# Build stage
FROM node:alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci

# Copy the entire application code
COPY . .

# Build the Next.js application
RUN npm run build

# Runtime stage
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary build artifacts from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json .

# Install production dependencies only
RUN npm ci --production

# Set the appropriate environment variables (if needed)
# ENV NODE_ENV production

# Expose the port on which the Next.js application listens
EXPOSE 3000

# Define the command to start the Next.js application
CMD ["npm", "start"]
