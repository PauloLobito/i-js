FROM node:20

WORKDIR /app

COPY src/ /app/src

EXPOSE 80

CMD [ "bash" ]