FROM node:20

WORKDIR /app

# Primeiro copia apenas o necessário para instalação de dependências
COPY package*.json ./
COPY prisma ./prisma
COPY .env ./

# Instala TODAS as dependências (incluindo devDependencies)
RUN npm install --include=dev

# Gera o cliente Prisma
RUN npx prisma generate

# Copia o restante (isso será sobrescrito pelo volume, mas é necessário para build)
COPY . .

EXPOSE 3000

# Usa nodemon para monitorar mudanças (melhor integração com Docker)
CMD ["npm", "run", "dev"]