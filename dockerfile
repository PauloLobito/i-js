FROM node 

WORKDIR /app

COPY src/ /app/src

EXPOSE 80

CMD [ "bash" ]