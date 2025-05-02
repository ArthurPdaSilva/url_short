# 🔗 url_short - Encurtador de URLs com Next.js

Projeto fullstack de encurtador de URLs, desenvolvido com **Next.js**, **Redis**, **PostgreSQL** e **Docker**.

## 📌 Objetivo

Criar uma aplicação simples, rápida e funcional para encurtar URLs com armazenamento em banco de dados e cache, oferecendo redirecionamento eficiente e (opcionalmente) análises básicas.

## 🚀 Tecnologias Usadas

- **Next.js (fullstack)** – Backend e frontend integrados.
- **PostgreSQL** – Armazenamento principal das URLs.
- **Redis** – Cache para otimizar redirecionamentos.
- **Docker** – Orquestração dos serviços.
- **pgAdmin** – Interface web para gerenciamento do PostgreSQL.

## 🧱 Estrutura do Projeto (Docker)

A aplicação roda com 4 containers:

1. **app**: aplicação Next.js
2. **postgres**: banco de dados relacional
3. **redis**: cache para acelerar redirecionamentos
4. **pgadmin**: painel de controle para o PostgreSQL

## ⚙️ Funcionalidades

- 🔗 Criação de URLs curtas únicas
- 📥 Redirecionamento automático para a URL original
- 🧠 Cache de redirecionamentos via Redis
- 🗂 Interface básica para gerenciamento

## 📂 Rotas (API)

### `POST /api/shorten`
Cria uma nova URL encurtada.
### `GET /api/redirect/[url]`
Buscar URL original a partir da encurtada.

