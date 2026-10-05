FROM node:24-alpine
WORKDIR /app
COPY app/package*.json ./
RUN npm ci
COPY app/ .
CMD ["npm", "run", "web"]