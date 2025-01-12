# Use an official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (this helps leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Build the React project
RUN npm run build

# Expose the port the app will run on (default for Vite is 3000)
EXPOSE 3000

# Command to run your app using Vite's preview mode
CMD ["npm", "run", "start"]
