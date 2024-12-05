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

FROM base AS production
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=production /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]