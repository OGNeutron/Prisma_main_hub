#!/usr/bin/env sh

npm run build
npm run copy-graphql
npm run docker:build
heroku container:pull web
heroku container:push web
