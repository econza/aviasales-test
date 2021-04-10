FROM node:lts
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 4000
CMD [ "yarn", "start" ]