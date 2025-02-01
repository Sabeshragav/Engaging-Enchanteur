# Using official node package
FROM node:18 AS build

# set the working directory in the container
WORKDIR /app

COPY package.json ./
RUN npm install

# copy the rest of the application code
COPY . .

# expose the backend port
RUN npm run build

#serve the app with nginx
FROM nginx:alpine

# multistage build : from node to nginx(webserver)
COPY --from=build /app/dist /usr/share/nginx/html

# Set correct file permissions
RUN chmod -R 755 /usr/share/nginx/html/assets && \
    chown -R nginx:nginx /usr/share/nginx/html/assets

EXPOSE 80
