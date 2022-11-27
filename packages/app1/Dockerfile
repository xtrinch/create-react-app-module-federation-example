# build environment
FROM node:alpine as build

ENV NODE_OPTIONS=--max_old_space_size=4096

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn run build

# production environment
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]