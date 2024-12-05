prod:
	docker compose up --build -d prod
dev:
	docker compose -f docker-compose.dev.yml up --build -d dev
test:
	docker compose -f docker-compose.dev.yml run --rm test
clean:
	docker compose down --volumes --remove-orphans && \
	docker rmi -f timpietyper-dev timpietyper-test timpietyper-prod || true && \
	docker network prune -f || true