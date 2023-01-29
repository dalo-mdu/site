This repo contians the Dalo website.

# Local Developement.
This  enviurments builds with the make commands.

## Builds the container from deploy.env.
make build

## Build the container without caching.
make build-nc: 

## Run container on port configured in `config.env`.
make run

## Starts container on port 80.
make up
## Stops the container.
make stop