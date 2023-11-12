Nosso deploy na Netlify já foi feito nessa URL: https://smartgridproject.netlify.app/

# Aplicação Smartgrid

Uma aplicação que demonstra o que a smartgrid é, simulando cadastro e login via API Json.

- [Node.js](https://nodejs.org/en/)
- [json-server](https://www.npmjs.com/package/json-server) (para simular uma API RESTful)

## Passo a Passo para Configuração

1. **Instalação de Dependências**
   No diretório raiz do projeto, execute:
npm install

2. **Instalação do json-server**
npm install json-server

3. **Iniciar a Simulação da API**
No diretório raiz do projeto, execute:
npm run backend

Isso inicia o `json-server` na porta 3000, usando `users.json` como seu banco de dados.

4. **Executar a Aplicação**
Em um novo terminal (sem fechar o json-server), navegue até o diretório raiz do projeto e execute:
npm run dev

A aplicação deve ser iniciada em qualquer porta que **NÃO** seja a 3000, já que essa é a porta da base de dados json onde ficam os usuários.


