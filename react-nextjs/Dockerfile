FROM node:16-alpine as base
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app/react-nextjs
EXPOSE 3000
VOLUME "/usr/src/app/react-nextjs/node_modules/"
COPY package*.json .

FROM base as production
ENV NODE_ENV=production
VOLUME "/usr/src/app/react-nextjs/.next/"
RUN npm install
# RUN npm audit fix
COPY . .
RUN npm run build
COPY . .
CMD ["npm", "run", "start"]

FROM base as development
ENV NODE_ENV=development
RUN npm install
# RUN npm update
COPY . .
CMD ["npm", "run", "dev"]