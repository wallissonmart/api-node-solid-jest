# Define a imagem base
FROM node:16.19.0-apline

RUN npm install -g npm@8.19.3

WORKDIR /usr/app

COPY package.json ./

# Atualiza o sistema operacional e instala as dependências
RUN npm install --legacy-peer-deeps

# Copia os arquivos do diretório atual para o diretório de trabalho do contêiner
COPY . .

# Expõe a porta em que a aplicação irá rodar
EXPOSE 5000

# Define o comando de inicialização do contêiner
CMD ["npm", "run", "dev"]
