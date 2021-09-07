FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g npm@7.9.0
RUN npm install

# Bundle app source
COPY . .

RUN npm run build

ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]