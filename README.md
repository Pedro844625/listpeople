# 📘 Sistema de Gerenciamento de Pessoas

## 📌 Apresentação do Projeto

Este projeto é uma aplicação web completa, desenvolvida com foco em boas práticas de desenvolvimento fullstack. O sistema permite o **cadastro**, **listagem** e **remoção** de pessoas, utilizando uma arquitetura moderna composta por:

- **Frontend em React com Bootstrap**, para uma interface responsiva e amigável
- **Backend em Java (Spring Boot)**, responsável pela lógica de negócios e controle dos dados
- **API RESTful**, que realiza a integração entre as camadas
- **Docker**, utilizado para facilitar a configuração e execução do ambiente de desenvolvimento e produção

---

## ✅ Funcionalidades

- Cadastro de novas pessoas
- Listagem de registros cadastrados
- Exclusão de pessoas por ID
- Comunicação completa via API REST

---

## 🧑‍💻 Tecnologias Utilizadas

- **Frontend**: React.js, Bootstrap, JavaScript   dependências  NPM
- **Backend**: Java, Spring Boot dependências  MVN
- **API**: RESTful com Spring Web
- **Banco de Dados**: MySQL
- **Containerização**: Docker Compose

---

## Instalação

Para executar a aplicação, você pode optar por:

### Com docker + docker-compose

Requisitos:
- Docker
- Docker-compose

Tendo estes dois recursos instalados, é possível utilizar a aplicação simplesmente utilizando o seguinte comando na raiz do projeto:

```
docker-compose up --build
```

### Sem docker
Requisitos:
- Maven 3+
- Node v20+
- Um banco de dados relacional (Postgres)

Tendo estes recursos instalados, siga o passo a passo:

Para preparar o frontend:
```shell
cd ./frontend && npm install && npm run dev
```
Para preparar o backend:
(Tenha certeza de ter atualizado as configurações do banco em ./backend/main/resources/application.yml)
```shell
cd ./backend && mvn clean install -DskipTests && ./mvnw spring-boot:run
```

Após isto, acesse http://localhost:5173 e pode desfrutar da aplicação! :)

---

## 🔗 Endpoints da API

| Método HTTP | Endpoint                   | Descrição                              |
|-------------|----------------------------|----------------------------------------|
| GET         | `/v1/pessoas`              | Retorna todos os registros cadastrados |
| POST        | `/v1/pessoas`              | Cadastra uma nova pessoa               |
| DELETE      | `/pess/v1/pessoasoas/{id}` | Remove uma pessoa com base no ID       |

