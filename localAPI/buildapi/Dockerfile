FROM node:12.18.0 as build
WORKDIR /api
COPY package.json wait-for-stack.sh /api/
RUN chmod +x /api/wait-for-stack.sh
RUN npm install

ENV LOCALSTACK_HOST localhost
ENV LOCAL_ES_HOST localhost
ENV NODE_ENV test
ENV cmr_provider CUMULUS
ENV FAKE_AUTH true

CMD ["/api/wait-for-stack.sh", "/api/node_modules/@cumulus/api/bin/cli.js", "serve", "--no-reseed"]
