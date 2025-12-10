FROM public.ecr.aws/docker/library/node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
