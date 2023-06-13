.PHONY: dev-start dev-stop dev-down prod-start prod-start-background prod-stop prod-down

dev-start:
	docker compose -f docker-compose.dev.yml up

dev-stop:
	docker compose -f docker-compose.dev.yml stop

dev-down:
	docker compose -f docker-compose.dev.yml down

prod-start:
	sudo docker compose -f docker-compose.prod.yml up

prod-start-background:
	sudo docker compose -f docker-compose.prod.yml up -d

prod-stop:
	sudo docker compose -f docker-compose.prod.yml stop

prod-down:
	sudo docker compose -f docker-compose.prod.yml down