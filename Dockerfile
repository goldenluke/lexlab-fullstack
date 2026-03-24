FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 1234

CMD ["node","apps/realtime/server.mjs"]
