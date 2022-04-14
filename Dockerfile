# Build Stage
FROM node:14-slim AS builder

WORKDIR /opt/app-root/src

COPY . .

RUN npm run install_all

RUN npm run build

FROM node:14-slim

COPY --from=builder /opt/app-root/src/dist dist
COPY --from=builder /opt/app-root/src/public public
COPY --from=builder /opt/app-root/src/package.json .
RUN npm install --production

ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD npm run serve