FROM nginx

WORKDIR /the/workdir/path
COPY convcurrency.js ./
COPY conv.html ./


