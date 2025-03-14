init:
	@echo "\033[94m[INFO]\033[0m Building Git hooks..."
	@printf "\033[91m[-]\033[0m commit-msg\r"
	@go build -o ./.git/hooks/commit-msg ./.githooks/commit-msg.go && printf "\033[92m[✔]\033[0m commit-msg\n"
	@printf "\033[91m[-]\033[0m pre-checkout\r"
	@go build -o ./.git/hooks/pre-checkout ./.githooks/pre-checkout.go && printf "\033[92m[✔]\033[0m pre-checkout\n"
	@echo "\033[94m[INFO]\033[0m Git hooks build completed successfully!"