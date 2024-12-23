This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Subindo o projeto (Sem Docker)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu browser para ver o resultado.

## Subindo o projeto (Com Docker)

Este projeto é uma aplicação Next.js configurada para ser executada dentro de um container Docker.

## Pré-requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:
- **Docker**: [Download Docker](https://www.docker.com/get-started)
- **Docker Compose**: [Download Docker Compose](https://docs.docker.com/compose/install/)

## Rodando a Aplicação com Docker

### 1. Clonar o Repositório
Primeiro, clone o repositório do projeto para sua máquina local:

```bash
git clone https://github.com/lucsduartee/redeems-challenge-front
cd redeems-challenge-front
```

### 2. Criar as Imagens e Iniciar o Container
Use o docker-compose para construir e iniciar a aplicação:

```bash
docker-compose up --build
```
Acesse a aplicação em:

```bash
http://localhost:3000
```