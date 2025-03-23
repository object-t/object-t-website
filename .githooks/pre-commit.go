package main

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
)

func main() {
	fmt.Println("ESLintを実行します...")
	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		cmd = exec.Command("cmd", "/C", "npx eslint")
	} else {
		cmd = exec.Command("sh", "-c", "npx eslint")
	}
	output, err := cmd.Output()
	if err != nil {
		fmt.Println(string(output))
		fmt.Println("\033[91m[Error] コミットを中断します...\033[0m\n")
		os.Exit(1)
	}
	fmt.Println(string(output))
	fmt.Println("\033[92m[Success] Lint check passed! \033[0m\n")
}
