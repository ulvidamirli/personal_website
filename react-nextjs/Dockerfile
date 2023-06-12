FROM node:18-alpine as base
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app/react-nextjs
EXPOSE 3000
VOLUME "/app/react-nextjs/node_modules/"
COPY package*.json .

FROM base as production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
VOLUME "/app/react-nextjs/.next/"
RUN npm ci --omit=dev
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