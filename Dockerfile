FROM node:20

WORKDIR /app

COPY  src/ /app/src
COPY package*.json ./

CMD [ "bash" ]