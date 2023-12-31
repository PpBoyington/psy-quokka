FROM node:20.9.0-alpine
WORKDIR /app

COPY package.json ./
COPY . .
RUN yarn install
RUN yarn build

CMD ["node", "./build/app.js" ]