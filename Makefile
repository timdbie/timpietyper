dev:
	sudo docker compose -f docker-compose.dev.yml up --build -d dev
test:
	sudo docker compose -f docker-compose.dev.yml run --build --rm test