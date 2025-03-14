package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"regexp"
	"slices"
	"strconv"
	"strings"
)

var recommendedBranchPrefix = []string{"feature", "fix", "hotfix", "chore", "ci", "refactor", "docs", "style", "test", "release", "revert"}

type Issue struct {
	Number    int    `json:"number"`
	Title     string `json:"title"`
	State     string `json:"state"`
	User      User   `json:"user"`
	Assignees []User `json:"assignees"`
}

type User struct {
	Login string `json:"login"`
}

func main() {
	currentBranch, err := getCurrentBranch()
	if err != nil {
		fmt.Printf("\033[91m[Error] ブランチ名が取得できませんでした。\033[0m\n")
		os.Exit(1)
	}

	splited := strings.Split(currentBranch, "/")
	if len(splited) < 1 {
		fmt.Printf("\033[91m[Error] ブランチ名が命名規則に則っていません。\033[0m\n")
		fmt.Printf("\033[91m[Error] Example: 'feature/1-login-form'\033[0m\n")
		os.Exit(1)
	}

	prefix := strings.Split(currentBranch, "/")[0]
	if !slices.Contains(recommendedBranchPrefix, prefix) {
		fmt.Printf("\033[93m[WORNING]\033[0m %sは非推奨のPrefixです。\n", prefix)
	}

	issue, err := containsIssueNumber(currentBranch)
	if err == nil && 0 < issue {
		showIssueInfo(issue)
	}
}

func getCurrentBranch() (string, error) {
	cmd := exec.Command("git", "rev-parse", "--abbrev-ref", "HEAD")

	output, err := cmd.Output()
	if err != nil {
		return "", err
	}

	return strings.TrimSpace(string(output)), nil
}

func containsIssueNumber(branch string) (int, error) {
	pattern := `^\w+/\d+-.+?`
	matched, _ := regexp.MatchString(pattern, branch)
	if !matched {
		return -1, nil
	}
	return strconv.Atoi(regexp.MustCompile(`/(\d+)-`).FindStringSubmatch(branch)[1])
}

func showIssueInfo(issueId int) {
	url := fmt.Sprintf("https://api.github.com/repos/object-t/object-t-website/issues/%d", issueId)
	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("\033[91m[Error] 正常にリクエストを送信できませんでした。\033[0m\n")
		return
	}

	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		fmt.Printf("\033[91m[Error] Issueを正常に取得できませんでした。[StatusCode: %s]\033[0m\n", resp.StatusCode)
		return
	}

	var issue Issue
	if err := json.NewDecoder(resp.Body).Decode(&issue); err != nil {
		fmt.Printf("\033[91m[Error] Jsonにパースできませんでした。\033[0m\n")
		return
	}

	fmt.Printf("\033[94m[INFO]\033[0m ISSUE #%sの情報\n")
	fmt.Println("----------")
	fmt.Printf("Issue    : %d\n", issue.Number)
	fmt.Printf("Title    : %s\n", issue.Title)
	fmt.Printf("State    : %s\n", issue.State)
	fmt.Printf("Created  : %s\n", issue.User.Login)
	for i, user := range issue.Assignees {
		if i == 0 {
			fmt.Printf("Assignees: %s\n", user.Login)
		} else {
			fmt.Printf("           %s\n", user.Login)
		}

	}
	fmt.Println("----------")
}
