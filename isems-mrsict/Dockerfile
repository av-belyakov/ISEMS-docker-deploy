FROM golang:1.17-alpine AS temporary_image
WORKDIR /go/src/
ENV PATH /usr/local/go/bin:$PATH
RUN apk update && \
    apk add --no-cache git && \
    git clone https://github.com/av-belyakov/ISEMS-MRSICT.git /go/src/
RUN go build

FROM alpine
MAINTAINER Artemy Image for  ISEMS-MRSICT
WORKDIR /opt/isems-mrsict
RUN mkdir /opt/isems-mrsict/defaultsettingsfiles && \
    mkdir /home/logs && \
    mkdir /home/keys
COPY --from=temporary_image /go/src/ISEMS-MRSICT /opt/isems-mrsict/ 
COPY --from=temporary_image /go/src/defaultsettingsfiles/* /opt/isems-mrsict/defaultsettingsfiles/
COPY keys/* /home/keys/
COPY config.json README.md /opt/isems-mrsict/
EXPOSE 13000
ENTRYPOINT [ "./ISEMS-MRSICT" ]