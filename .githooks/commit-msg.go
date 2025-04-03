package main

import (
	"fmt"
	"os"
	"regexp"
	"strings"
)

var allowedPrefixes = []string{"feat", "add", "update", "delete", "revert", "fix", "refactor", "chore", "test", "style"}

func main() {
	input, err := os.ReadFile(os.Args[1])
	if err != nil {
		fmt.Println("Error reading commit message: ", err)
		os.Exit(1)
	}

	commitMessage := string(input)
	pattern := fmt.Sprintf("^((%s):\\s|Merge)", strings.Join(allowedPrefixes, "|"))
	re := regexp.MustCompile(pattern)

	if !re.MatchString(commitMessage) {
		fmt.Printf("\033[91m[Error] Prefixが無効です。[%s]\033[0m\n", strings.Replace(strings.Split(commitMessage, " ")[0], "\n", "", 1))
		fmt.Println()
		fmt.Println("Prefixes :", strings.Join(allowedPrefixes, ", "))
		fmt.Println("Example  : add: README.mdを追加しました。")
		os.Exit(1)
	}
}
