.PHONY: create-schema apply-schema diff-schema

create-schema:
	sudo docker compose -f ../docker-compose.prod.yml exec directus npx directus schema snapshot ./snapshots/snapshot.yml

apply-schema:
	sudo docker compose -f ../docker-compose.prod.yml exec directus npx directus schema apply ./snapshots/snapshot.yml

diff-schema:
	sudo docker compose -f ../docker-compose.prod.yml exec directus npx directus schema apply --dry-run ./snapshots/snapshot.yml