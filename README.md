# xy-inc

Node.js backend as a service com MongoDB

## Tecnologias

* [Node.js] 
* [Express]  
* [Mongodb]

## Instalação

É necessário instalar [Node.js] v4+ e [Mongodb].

### Git
```
git clone https://github.com/lsdevrp/xy-inc.git
```
### Dependências
Instalação das dependências.

```
cd xy-inc
npm install
```

### Inicialização
Inicialização do server.

```
npm start
```

## Desenvolvimento

### Estrutura do projeto

* [server](./server) - arquivos do backend
   * [api](./server/api) - diretório com sub-diretórios para cada modelo
     * [product](./server/api/product) - arquivos necessários para o modelo de product
       * [index](./server/api/product/index.js) - rotas para o modelo de product
       * [product.controller.js](./server/api/product/product.controller.js) - controller para o modelo de product
       * [product.model.js](./server/api/product/product.model.js) - modelo do mongodb para product
   * [config](./server/config)
     * [express.js](./server/config/express.js) - configurações e middlewares 
     * [mongodb.js](./server/config/mongodb.js) - configurações e conexão com o mongodb
     * [seeddb.js](./server/config/seeddb.js) - inicialização da collection product
     * [environment](./server/config/environment) - arquivos de configuração para cada tipo de env (development, test e production)
       * [development](./server/config/environment/development)
       * [test](./server/config/environment/test)
       * [production](./server/config/environment/production) 
 * [doc](./doc)
   * [apidoc](./doc/apidoc)
     * [index.html](./doc/apidoc/index.html) - documentação dos métodos e parâmetros da api
 * [test](./test)
   * [integration](./test/integration)
     * [product.spec.js](./test/integration/product.spec.js) - teste de integração das rotas para o modelo product
   * [unit](./test/unit)
     * [product.spec.js](./test/unit/product.spec.js) - testes unitários do controller do modelo de product
   * [postman](./test/postman)
     * [products.postman_collection.json](./test/postman/products.postman_collection.json) - collection para testes do modelo de produto através do postman


*Para validação do código o projeto esta configurado para utilizar o `eslint` com o padrão `airbnb/legacy`*

Validação
```
npm run lint
```
Correção
```
npm run lint-fix
```

## Testes

### Testes de integração

*Para os testes de integração esta sendo utilizado `supertest` e `should`*

Execução
```
npm run test-integration
``` 

### Testes unitários

*Para os testes unitários esta sendo utilizado `sinon` e `chai`*

Execução
```
npm run test-unit
``` 

## Documentação

*Para documentação esta sendo utilizado o `apidoc`*

Execução
```
apidoc -i server/api -o doc/apidoc
```



[Node.js]:  <http://nodejs.org>
[Express]: <http://expressjs.com>
[Mongodb]: <http://mongodb.com>

