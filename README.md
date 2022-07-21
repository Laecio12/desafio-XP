# Desafio XP.inc - Backend 


## Documentação com Swagger
https://desafio-xp.herokuapp.com/docs
 #

## Variáveis de Ambiente
#
Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env
#
`MYSQL_HOST=localhost`\
`MYSQL_USER=seuusuario`\
`MYSQL_PASSWORD=suasenha`\
`MYSQL_DATABASE=suaDatabase`\
`PORT=PORTA`
#
Código gerado no site: https://www.md5hashgenerator.com/ 

`JWT_SECRET=` 
#

## Rodando com Docker

Clone o projeto

```bash
  git clone git@github.com:Laecio12/desafio-XP.git
```

Entre no diretório do projeto

```bash
  cd desafio-XP
```
Execute a criação dos containers
```bash
docker-compose up -d
```
Entre no container 
```bash
docker exec -it desafio_xp bash
```

Instale as dependências

```bash
  yarn
```

Inicie o servidor

```bash
  yarn run dev
```

#
## Para executar os testes 
```
  yarn run test:mocha
```
#
 ![Resultado dos testes](./src/public/assets/testes.webp)
 #
## Stack utilizada
**Back-end:** Docker, Docker-Compose, Node, Express, JWT, MYSQL

#
## Autor

- [@Laecio](https://github.com/Laecio12)


