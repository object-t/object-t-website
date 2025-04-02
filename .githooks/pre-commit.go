package main

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
	"strings"
)

func main() {
	fmt.Println("ESLintを実行します...")

	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		cmd = exec.Command("cmd", "/C", "git diff --cached --name-only --diff-filter=ACM | findstr /R \\.(js|jsx|ts|tsx)$ || exit 0")
	} else {
		cmd = exec.Command("sh", "-c", "git diff --cached --name-only --diff-filter=ACM | grep -E '\\.(js|jsx|ts|tsx)$' || true")
	}

	output, _ := cmd.Output()
	files := strings.Fields(string(output))
	if len(files) == 0 {
		fmt.Println("対象のファイルがありません。コミットを続行します。")
		os.Exit(0)
	}

	fileList := strings.Join(files, " ")
	eslintCmdStr := fmt.Sprintf("npx eslint --fix %s", fileList)
	var eslintCmd *exec.Cmd
	if runtime.GOOS == "windows" {
		eslintCmd = exec.Command("cmd", "/C", eslintCmdStr)
	} else {
		eslintCmd = exec.Command("sh", "-c", eslintCmdStr)
	}

	eslintOutput, err := eslintCmd.CombinedOutput()
	fmt.Println(string(eslintOutput))

	if err != nil {
		fmt.Println("\033[91m[Error] コミットを中断します...\033[0m\n")
		os.Exit(1)
	}

	gitAddCmd := exec.Command("git", "add")
	gitAddCmd.Args = append(gitAddCmd.Args, files...)
	if err := gitAddCmd.Run(); err != nil {
		fmt.Println("\033[91m[[Error] 修正済みファイルのステージングに失敗しました\033[0m\n")
		os.Exit(1)
	}

	fmt.Println("\033[92m[Success] Lint check passed!\033[0m\n")
}
