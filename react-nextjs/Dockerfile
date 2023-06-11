FROM node:16-alpine as base

WORKDIR /usr/src/app/react-nextjs
EXPOSE 3000
COPY package*.json .

FROM base as production
ENV NODE_ENV=production
RUN npm ci
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