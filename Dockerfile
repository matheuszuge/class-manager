# Usa uma imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências e schema do Prisma
COPY package*.json ./
COPY prisma ./prisma
COPY .env ./

# Instala as dependências
RUN npm install
# Gera o cliente Prisma necessário para @prisma/client
RUN npx prisma generate

# Copia o restante do código
COPY . .

# Expõe a porta que o app usa
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]