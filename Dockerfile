FROM alpine:3.16

ENV NODE_VERSION 16.19.0

WORKDIR /the/workdir/path
COPY ./ convcurrency.js
COPY ./ conv.html
COPY ./ user/html

CMD [ "node" ]