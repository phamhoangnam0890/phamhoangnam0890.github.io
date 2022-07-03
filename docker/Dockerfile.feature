FROM nginx:1.20.0-alpine

# working directory setup
RUN mkdir -p /content

# install and cache app dependencies
COPY ./public_feature /content/html

COPY ./docker/nginx.conf /etc/nginx/nginx.conf