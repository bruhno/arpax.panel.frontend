FROM node:latest
RUN npm install -g json-server

WORKDIR /app
VOLUME /app

COPY ./ .

EXPOSE 80
ADD run-json-srv.sh /run-json-srv.sh
ENTRYPOINT ["bash", "/run-json-srv.sh"]
CMD []
