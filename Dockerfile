FROM node:14-alpine

WORKDIR /usr/app/src

LABEL APP_NAME="Tickitz Backend"

COPY ./ ./

EXPOSE 9000/tcp

RUN npm install --production

ENTRYPOINT [ "node" ]
CMD [ "./server.js" ]