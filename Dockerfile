FROM node:18-alpine
WORKDIR /open_api_sample
# ホストのpackage.jsonとpackage-lock.jsonを
# コンテナの/appにコピー
COPY ./package*.json ./

CMD sh -c "npm install && npm run dev"
