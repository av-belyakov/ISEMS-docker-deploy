# ------ build ------
FROM node:alpine AS temporary_image_ui
WORKDIR /opt/isems-ui
RUN apk update && \
    apk add --no-cache git && \
    apk add --no-cache bash && \
    git clone https://github.com/av-belyakov/ISEMS_UI.git /opt/isems-ui/
RUN npm install --force && \
    npm run build-prod
#RUN npm install -g snyk && \
#    snyk auth && \
#    snyk container test node:alpine

# ------ production ------
FROM node:alpine
MAINTAINER Artemy Image for ISEMS-UI
RUN mkdir /home/keys
#USER node
WORKDIR /opt/isems-ui
RUN apk update && \ 
    apk add --no-cache bash

#COPY --chown=node:node --from=temporary_image_ui /opt/isems-ui/ .
#COPY --chown=node:node keys/* /home/keys/
#COPY --chown=node:node config.json ./configure/

COPY --from=temporary_image_ui /opt/isems-ui/ .
COPY keys/* /home/keys/
COPY config.json ./configure/

EXPOSE 8888
ENTRYPOINT [ "node", "app.js" ]
#CMD [ "node", "app.js" ]