FROM node:20.9.0-alpine
WORKDIR /app

COPY package.json ./
COPY . .
RUN yarn install

CMD ["yarn", "workspace", "backend", "start"]