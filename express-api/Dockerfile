FROM node:16.17-alpine as build
WORKDIR /app
COPY . .
RUN yarn install --production
RUN yarn global add @vercel/ncc
RUN ncc build app.js -o dist

FROM node:16.17-alpine
WORKDIR /app
COPY --from=build /app/dist/index.js .
EXPOSE 3000
CMD ["node", "index.js"]