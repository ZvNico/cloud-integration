# Start from the official Node.js LTS image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY . .

# Build the project
RUN yarn build


# Expose the listening port
EXPOSE 3000

# Run the app
CMD ["sh", "-c", "yarn prisma migrate deploy && yarn prisma generate && yarn start"]
