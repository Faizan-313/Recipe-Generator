# Use an official node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Debug step: List the files in /app to ensure everything is copied
RUN ls -al /app
RUN ls -al /app/src

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "preview"]
