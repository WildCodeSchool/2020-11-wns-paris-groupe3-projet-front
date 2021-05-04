## this is the stage one , also know as the build step

FROM node:14-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY .env.local .env.local
RUN npm install
COPY public public
COPY src src
RUN npm run build

## this is stage two , where the app actually runs

FROM node:14-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json package.json
COPY .env.local .env.local
RUN npm install --only=production
COPY --from=builder /app/build ./build
RUN npm install -g serve

CMD serve -s build -l 3000
