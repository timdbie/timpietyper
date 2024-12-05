prod:
	docker compose up --build -d prod
dev:
	docker compose -f docker-compose.dev.yml up --build -d dev
test:
	docker compose -f docker-compose.dev.yml run --rm test