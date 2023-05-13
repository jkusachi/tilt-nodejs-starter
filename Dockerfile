FROM node:16-alpine

WORKDIR /app

COPY index.js package.json .

RUN npm install

CMD ["sh", "-c", "printenv && npm start"]
