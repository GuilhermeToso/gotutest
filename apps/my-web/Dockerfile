# Stage 1: Serve Stage
FROM node:14-alpine AS serve

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary artifacts from the local machine to the container
COPY ../../dist/apps/my-web/.next .next
COPY ../../dist/apps/my-web/public public

# Expose the desired port (change it to match your Next.js app's port)
EXPOSE 3000

# Set the environment variable
ENV NODE_ENV production

# Start the Next.js application
CMD ["npx", "next", "start"]
