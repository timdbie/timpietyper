FROM node:lts-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 

FROM base AS development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM base AS testing
COPY . .
CMD ["npm", "test"]