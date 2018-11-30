FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production
RUN npm audit fix
COPY ./dist .    
# RUN npm run build
# RUN npm run copy-graphql
COPY .env .

# FROM node
# WORKDIR /usr/app
# COPY package*.json ./
# RUN npm install --production

# COPY --from=builder /usr/app/dist ./dist

EXPOSE $PORT
CMD node index.js

