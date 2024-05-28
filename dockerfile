FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV MONGO_URI="mongodb+srv://dbUser:dbUserPassword@cluster0.9jj8m0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

CMD ("npm" "start")
