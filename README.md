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

- **Frontend**: React.js, Bootstrap, JavaScript
- **Backend**: Java, Spring Boot
- **API**: RESTful com Spring Web
- **Banco de Dados**: MySQL
- **Containerização**: Docker Compose

---

## 🔗 Endpoints da API

| Método HTTP | Endpoint           | Descrição                            |
|-------------|--------------------|--------------------------------------|
| GET         | `/pessoas`         | Retorna todos os registros cadastrados |
| POST        | `/pessoas`         | Cadastra uma nova pessoa              |
| DELETE      | `/pessoas/{id}`    | Remove uma pessoa com base no ID      |

