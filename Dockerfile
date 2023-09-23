FROM node:18

WORKDIR /usr/src/app

COPY ./src ./src
COPY ./server.js ./server.js

RUN npm install

EXPOSE 3000

CMD ["./server.js"]