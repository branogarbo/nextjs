FROM node
WORKDIR /app
COPY . .
RUN npm i
RUN nmp run build
EXPOSE 3000
CMD ["npm", "start"]