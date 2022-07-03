# base image
FROM node:16.15.1

# working directory setup
RUN mkdir -p /app
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
# add app - copy all from local storage to docker image
RUN npm install
RUN npm install -g @angular/cli@~8.3.20 --unsafe

COPY . /app

EXPOSE 4200
