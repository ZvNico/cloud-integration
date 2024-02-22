FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 50051

CMD ["sh", "-c", "yarn prisma migrate deploy && yarn prisma generate && yarn start"]
