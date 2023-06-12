FROM node:16-alpine as base

WORKDIR /usr/src/app/react-nextjs
EXPOSE 3000
VOLUME "/usr/src/app/react-nextjs/node_modules/"
COPY package*.json .

FROM base as production
ENV NODE_ENV=production
VOLUME "/usr/src/app/react-nextjs/.next/"
RUN npm install
# RUN npm audit fix
RUN npm run build
COPY . .
CMD ["npm", "run", "start"]

FROM base as development
ENV NODE_ENV=development
RUN npm install
# RUN npm update
COPY . .
CMD ["npm", "run", "dev"]