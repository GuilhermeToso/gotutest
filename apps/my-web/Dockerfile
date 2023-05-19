# Stage 1: Base Image
FROM node:14-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy the built Next.js application from the local machine to the container
COPY dist ./

# Stage 2: Serve Stage
FROM node:14-alpine AS serve

# Set the working directory inside the container
WORKDIR /app

# Copy necessary artifacts from the base stage
COPY --from=base /app ./

# Expose the desired port (change it to match your Next.js app's port)
EXPOSE 3000

# Set the environment variable
ENV NODE_ENV production

# Start the Next.js application
CMD ["npx", "next", "start"]
