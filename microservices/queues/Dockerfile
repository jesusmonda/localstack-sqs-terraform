FROM node:alpine

WORKDIR /app

RUN npm install -g nodemon

ADD package.json .
RUN npm install

CMD nodemon --legacy-watch index.js