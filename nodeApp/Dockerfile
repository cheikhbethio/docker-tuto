FROM node:12.16.2-alpine3.9

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm", "start"]
# CMD [ "npm", "/usr/src/app/bin/www" ]