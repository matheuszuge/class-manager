# ClassManager

API backend para gerenciamento de turmas, alunos e professores.

## Descrição

O ClassManager é uma API RESTful desenvolvida em Node.js, TypeScript e Express, utilizando o Prisma com banco de dados MySQL. Permite criar, editar, listar e remover usuários (alunos/professores) e classes (salas/turmas).

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- MySQL

## Endpoints Principais

### Usuários

- `GET /users` — Lista todos os usuários
- `POST /users` — Cria um novo usuário
- `PUT /users/:id` — Atualiza um usuário
- `DELETE /users/:id` — Remove um usuário

### Classes

- `GET /class` — Lista todas as classes
- `POST /class` — Cria uma nova classe
- `PUT /class/:id` — Atualiza uma classe
- `DELETE /class/:id` — Remove uma classe

## Exemplo de JSON para criar usuário

```json
{
  "status": true,
  "role": "ALUNO",
  "name": "Aluno da silva",
  "class": 1,
  "email": "email@email.com"
}
```

## Exemplo de JSON para criar classe

```json
{
  "status": true,
  "title": "Matemática Avançada"
}
```
