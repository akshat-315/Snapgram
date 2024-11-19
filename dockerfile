# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Build the application
RUN npm run build

# Install a lightweight web server to serve the built application
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run your app
CMD ["serve", "-s", "dist", "-l", "5173"]
