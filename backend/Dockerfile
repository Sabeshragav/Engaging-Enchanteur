# Using official node package
FROM node:18

# set the working directory in the container
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

# copy the rest of the application code
COPY . .

# expose the backend port
EXPOSE 5000

# run command to start server
CMD ["npm", "start"]
