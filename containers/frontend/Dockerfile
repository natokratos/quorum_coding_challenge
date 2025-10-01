# Use a Node.js base image
FROM node:20

RUN apt update && \
        apt -y upgrade

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application files
COPY . .

# Install serve globally to serve the production build
WORKDIR /app/frontend
RUN npm install --save

# Expose the port the app will run on (e.g., 3000)
ENV HOST=0.0.0.0
ENV PORT=8000
EXPOSE 8000

# Command to run the application using serve
#CMD ["serve", "-s", "build", "-l", "8000"]
CMD ["npm", "start"]
#CMD ["bash"]