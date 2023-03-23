# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Mount the src code into the container
COPY . /app

# Install app dependencies
COPY package*.json /app/
RUN npm install
# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the command to start the app
CMD [ "node", "index.js" ]