.PHONY: create-schema apply-schema diff-schema

create-schema:
	sudo docker compose -f ../docker-compose.prod.yml exec directus npx directus schema snapshot /directus/snapshots/snapshot.yml

apply-schema:
	sudo docker compose -f ../docker-compose.prod.yml exec directus npx directus schema apply /directus/snapshots/snapshot.yml

diff-schema:
	sudo docker compose -f ../docker-compose.prod.yml exec directus npx directus schema apply --dry-run /directus/snapshots/snapshot.yml