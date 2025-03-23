init:
	@echo "\033[94m[INFO]\033[0m Building Git hooks..."
	@printf "\033[91m[-]\033[0m commit-msg\r"
	@go build -o ./.git/hooks/commit-msg ./.githooks/commit-msg.go && printf "\033[92m[✔]\033[0m commit-msg\n"
	@printf "\033[91m[-]\033[0m pre-commit\r"
	@go build -o ./.git/hooks/pre-commit ./.githooks/pre-commit.go && printf "\033[92m[✔]\033[0m pre-commit\n"
	@printf "\033[91m[-]\033[0m post-checkout\r"
	@go build -o ./.git/hooks/post-checkout ./.githooks/post-checkout.go && printf "\033[92m[✔]\033[0m post-checkout\n"
	@echo "\033[94m[INFO]\033[0m Git hooks build completed successfully!"
	@echo "\033[94m[INFO]\033[0m Installing npm dependencies..."
	@rm -rf node_modules
	@npm install
	@echo "\033[94m[INFO]\033[0m \033[92m✔\033[0m Completed installing npm dependencies."
	@echo "\033[94m[INFO]\033[0m 🎉 Directory initialization completed successfully 🎉"

tree:
	@tree -da -I "node_modules|.git|.react-router"
