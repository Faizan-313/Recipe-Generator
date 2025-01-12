# Use an official node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files into the container
COPY . /app/.

# Debug: Check if the files are copied correctly
RUN ls -al /app/src

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "preview"]
