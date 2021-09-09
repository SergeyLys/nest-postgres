FROM node:14.0.0

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

COPY . /app

EXPOSE 3005

CMD [ "npm", "run", "start:prod" ]
