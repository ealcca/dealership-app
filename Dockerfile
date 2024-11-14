FROM node:22.5.1-alpine AS build
WORKDIR /app
COPY package-lock.json /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --configuration=kubernetes

FROM nginx:1.27.1-alpine AS webserv
COPY --from=build /app/dist/dealership /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]