FROM node:14-alpine

RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
RUN npm i
COPY ./public ./public
COPY ./src ./src

CMD npm start src/index.tsx