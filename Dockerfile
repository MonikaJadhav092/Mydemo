FROM node:18
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.json
EXPOSE 8000
