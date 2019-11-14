FROM node:12-alpine

WORKDIR alice

COPY package*.json ./
RUN npm install
