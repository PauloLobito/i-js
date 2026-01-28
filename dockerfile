FROM node:20

WORKDIR /app

# Copia package.json primeiro
COPY package*.json ./

# (opcional agora, mas importante depois)
RUN npm install

# Copia o código
COPY src ./src

CMD ["node", "src/index.js"]
