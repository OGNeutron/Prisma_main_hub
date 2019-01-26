#!/usr/bin/env sh

npm run build
npm run copy-graphql

docker build -t prismabackend .

heroku container:pull web
heroku container:push web
heroku container:release web
