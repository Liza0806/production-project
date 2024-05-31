# Указываем базовый образ для сборки проекта
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY . .

# Устанавливаем зависимости
RUN npm install

ENTRYPOINT ["npm", "run", "build:dev"]
