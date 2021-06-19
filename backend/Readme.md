
<h1 align="center">
    BLUEPIX API
</h1>

<h3 align="center">
Plataforma de inscrição em eventos online e pagamento via PIX integrado com Gerencianet
</h3>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a> | <a href="#computer-tecnologias">Tecnologias</a> | <a href="#books-guia-de-instalação-e-execução">Guia de instalação e execução</a> | <a href="#pencil-como-contribuir">Como contribuir</a> | <a href="#page_with_curl-licença">Licença</a>
</p>

## Layout

## :rocket: Sobre o projeto

<p>Esta é uma plataforma completa para fazer inscrições em eventos online</p> 

<p>Este é o repositório da API do projeto.</p>
<ul>
  <li>Para a versão web, <a href="https://github.com/wilsonllucena/bluepix">clique aqui</a>.</li>
</ul>

## :computer: Tecnologias

Além das tecnologias abaixo, esta aplicação foi desenvolvida com as melhores práticas de desenvolvimento! 
<p>:heart_eyes: <strong>TDD</strong> :sparkling_heart: Design patterns: <strong>SOLID</strong>, <strong>DDD</strong> e <strong>DRY</strong>, :balance_scale: estratégia de <strong>cache</strong> e :police_car: <strong>segurança</strong> no node.</p>
    
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Jest](https://jestjs.io/) 
- [Multer](https://github.com/expressjs/multer)
- [Datefns](https://date-fns.org/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js/)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [TypeORM](https://typeorm.io/#/)
- [Cors](https://github.com/expressjs/cors)
- [Class-transformer](https://github.com/typestack/class-transformer)
- [Rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Uuidv4](https://github.com/thenativeweb/uuidv4)

## :books: Guia de instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) v10.20 ou maior
- [Yarn](https://yarnpkg.com/)
- Uma instância de [PostgreSQL](https://www.postgresql.org/), [Mongodb](https://www.mongodb.com/) e [Redis](https://redis.io/) **

** Ou [Docker](https://www.docker.com/) 

### Como executar

<i>Antes de executar estes passos, você precisa ter uma instância dos bancos listados acima ou um Docker com as imagens e os databases e schemas criados.</i>

- Clone o repositório ```git clone https://github.com/willucena/apibluepix.git```
- Vá até o diretório ```cd apibluepix```
- Execute ```yarn``` para instalar as dependências
- Copie o arquivo .env.example executando ```cp .env.example .env``` para linux ou mac e ```copy .env.example .env``` para windows
- Abra o arquivo .env e preencha com suas variáveis de ambiente
- Copie o arquivo de configuração do orm executando ```cp ormconfig.example.json ormconfig.json``` para linux ou mac e ```copy ormconfig.example.json ormconfig.json``` para windows
- Abra o arquivo ormconfig.json e preencha com suas credenciais das instâncias dos bancos de dados
- Execute ```yarn typeorm migration:run``` para rodar as migrations 
- Execute ```yarn dev:server``` para rodar o servidor


## :pencil: Como contribuir

<b>Faça um fork deste repositório</b>

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd inscritoo

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :page_with_curl: Licença

Esse projeto está sob a licença MIT. 

<hr />
<p>by Wilson Lucena :wave: <a href="#">Get in touch!</a></p>
