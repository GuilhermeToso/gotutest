# Stage 1: Environment Setup
FROM node:14-alpine AS env-setup

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci --only=production

# Stage 2: Build the Next.js Application
FROM env-setup AS build

# Copy the entire application to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 3: Serve Artifacts
FROM node:14-alpine AS serve

# Set the working directory inside the container
WORKDIR /app

# Copy necessary artifacts from the build stage
COPY --from=build /app/.next .next
COPY --from=build /app/public public

# Expose the desired port (change it to match your Next.js app's port)
EXPOSE 3000

# Set the environment variable
ENV NODE_ENV production

# Start the Next.js application
CMD ["npm", "start"]
