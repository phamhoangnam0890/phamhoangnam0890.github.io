debug:
	docker-compose -f ./docker/docker-compose_dev.yml up --build --remove-orphans

# Staging Release
stg-release:
	docker-compose -f ./docker/docker-compose_stg.yml up --build --remove-orphans

# production Release
prod-release-upload:
	docker-compose -f ./docker/docker-compose_prod.yml up --build --remove-orphans
	if test -d public; \
	then firebase deploy --only hosting:aiko-system-01; rm -Rf ./public; \
	fi
