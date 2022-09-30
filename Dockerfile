FROM node:18-alpine3.15
WORKDIR /usr/src/app
# COPY app/package.json .
# COPY app/package-lock.json .
RUN yarn install