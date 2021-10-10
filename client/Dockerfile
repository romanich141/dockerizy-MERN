# Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/src/app/public

# COPY package*.json ./

###  Installing dependencies

RUN npm install

# copy local files to app folder
# COPY . .

EXPOSE 80

CMD ["npm","start"]