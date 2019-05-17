FROM node:10

WORKDIR /usr/src/app
COPY . .
RUN npm i -g gatsby-cli && npm i && gatsby build

CMD [ "npm", "start" ]