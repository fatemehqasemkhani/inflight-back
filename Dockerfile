FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
COPY . .
EXPOSE 5000
ENTRYPOINT ["yarn", "start"]
