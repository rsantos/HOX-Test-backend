<h1 align="center"> HOX Teste Backend </h1>

## Descrição do Backend
<br>
<p align="justify"> Backend usando mongodb, focado em autenficação e em CRUD de Produtos </p>

## Funcionalidades
<br>

Autenficar usuario

Listar, criar, editar e deletar os produtos

## Pré-Requisitos
<br>

 - [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
 - [Node](https://nodejs.org/en/docs/guides/getting-started-guide/)
 
 ## Configuração
 
### Rodando o Back End (servidor)

####  Clone este repositório
```bash
$ git clone https://github.com/lucasqg95/HOX-Test-backend
```

#### Acesse a pasta do projeto 

```
# Instale as dependências
$ yarn install
```
#### Iniciar backend

```
$ yarn start
```

#### O servidor inciará na porta:4000 - acesse <http://localhost:4000>

## 🛠 Tecnologias
<br>

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [CORS](https://www.npmjs.com/package/cors?activeTab=versions)

## Observações

dotenv foi enviado apenas para o teste, o certo seria não envia-lo.
<br>
dotenv contendo especificação de conexão com o mongo e o secret do JWT
