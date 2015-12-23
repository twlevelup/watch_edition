FROM node:4

RUN npm install -g grunt-cli jscs yo
WORKDIR /usr/src/app

EXPOSE 8080 9001