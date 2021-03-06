FROM mhart/alpine-node:latest
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --quiet --production
# RUN npm audit fix
COPY ./dist .
# RUN npm run build
# RUN npm run copy-graphql
COPY .env .
ENV NODE_ENV production

# FROM node
# WORKDIR /usr/app
# COPY package*.json ./
# RUN npm install --production

# COPY --from=builder /usr/app/dist ./dist

EXPOSE $PORT
CMD NODE_ENV=production node index.js

