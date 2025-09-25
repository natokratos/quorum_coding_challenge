# Use a Node.js base image
FROM node:20

RUN apt update && \
        apt -y upgrade

#RUN apt install xsel

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
#COPY package*.json ./

# Install dependencies
#RUN npm install react-chartjs-2 chart.js axios

# Copy the rest of the application files
COPY . .

# Build the React application for production
#RUN npm run build

# Install serve globally to serve the production build
#RUN npm install -g serve
WORKDIR /app/src/frontend
RUN npm install

# Expose the port the app will run on (e.g., 3000)
ENV HOST=0.0.0.0
ENV PORT=8000
EXPOSE 8000

# Command to run the application using serve
#CMD ["serve", "-s", "build", "-l", "8000"]
CMD ["npm", "start"]