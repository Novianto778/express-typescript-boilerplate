FROM node:current-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN pnpm install --frozen-lockfile

# Bundle app source
COPY . .

# Build the TypeScript files
RUN pnpm build

# Expose port 8080
EXPOSE 8080

# Start the app
CMD npm run start
