# API de Gerenciamento de Projetos e Tarefas

Uma API REST desenvolvida em Node.js com Express, Sequelize e MySQL para gerenciar projetos e suas tarefas associadas. A API oferece operações CRUD completas (criação, leitura, atualização e exclusão) tanto para projetos quanto para tarefas.

## 🚀 Descrição do Projeto

Esta API permite:
- Gerenciar projetos com CRUD completo
- Gerenciar tarefas vinculadas aos projetos
- Relacionamento entre projetos e tarefas (um projeto pode ter várias tarefas)
- Arquitetura em camadas com controllers organizados
- Integração com banco de dados MySQL através do Sequelize ORM

> **Nota:** Este projeto é um Desafio Técnico — Node.js

## 📋 Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- **Node.js** (versão 18.x ou superior)
- **MySQL** (versão 8.x ou superior)
- **Postman** ou outra ferramenta para testar APIs (opcional)

## 🔧 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/yyhago/node-js-test.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Configure as variáveis conforme mostrado abaixo no arquivo .env

## 🌐 Variáveis de Ambiente

Na raiz temos`.env` com as seguintes variáveis, porém configure com seu user e password:

```env
DB_NAME=nodejstestyyhago
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=3305
```

Essas variáveis são essenciais para a conexão com o banco de dados MySQL.

## ▶️ Como Executar a API

1. **Crie o banco de dados no MySQL:**
   ```sql
   CREATE DATABASE nodejstestyyhago;
   ```

2. **Inicie a aplicação:**
   ```bash
   nodemon ./server.js
   ```

3. **Acesse a API:**
   A API estará disponível em `http://localhost:5000`

## 📚 Endpoints da API

### 🗂️ **Projetos**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/projects` | Criar um novo projeto |
| `GET` | `/projects` | Listar todos os projetos com suas tarefas |
| `GET` | `/projects/:id` | Obter detalhes de um projeto específico |
| `PUT` | `/projects/:id` | Atualizar um projeto existente |
| `DELETE` | `/projects/:id` | Deletar um projeto e suas tarefas |

**Exemplo de body para criar projeto:**
```json
{
  "nome": "Projeto Teste",
  "descricao": "Descrição do projeto"
}
```

### ✅ **Tarefas**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/projects/:projectId/tasks` | Criar uma tarefa vinculada a um projeto |
| `PUT` | `/tasks/:id` | Atualizar uma tarefa existente |
| `DELETE` | `/tasks/:id` | Deletar uma tarefa |

**Exemplo de body para criar tarefa:**
```json
{
  "titulo": "Tarefa Teste",
  "descricao": "Descrição da tarefa",
  "status": "Pendente"
}
```

### 📝 **Campos Obrigatórios e Validações**

- **Projetos:** `nome` (obrigatório)
- **Tarefas:** `titulo` (obrigatório)
- **Status válidos para tarefas:** `Pendente`, `Em progresso`, `Concluida`

## 📤 Respostas da API

A API segue padrões REST com códigos de status HTTP apropriados:

- `201` - Criação bem-sucedida
- `200` - Leitura ou atualização bem-sucedida
- `204` - Deleção bem-sucedida (sem corpo de resposta)
- `400` - Erro de validação (campo obrigatório ausente ou status inválido)
- `404` - Recurso não encontrado
- `500` - Erro interno do servidor

**Exemplo de resposta ao criar um projeto:**
```json
{
  "id": 1,
  "nome": "Projeto Teste",
  "descricao": "Descrição do projeto",
  "createdAt": "2025-08-19T20:58:00.000Z",
  "updatedAt": "2025-08-19T20:58:00.000Z"
}
```

## 🧪 Testando a API

### Usando cURL:
```bash
curl -X POST http://localhost:5000/projects \
  -H "Content-Type: application/json" \
  -d '{"nome": "Projeto Teste", "descricao": "Descrição do projeto"}'
```

### Usando Postman:
1. Configure a URL base: `http://localhost:5000`
2. Teste os endpoints conforme documentado acima

## 📁 Estrutura do Projeto

```
├── controllers/           # Controllers da aplicação
│   ├── ProjectsControllers.js
│   └── TasksControllers.js
├── models/               # Modelos Sequelize
│   ├── index.js
│   ├── projectsModel.js
│   └── tasksModel.js
├── routes/               # Configuração das rotas
│   ├── index.js
│   ├── projects.routes.js
│   └── tasks.routes.js
├── database/             # Configuração do banco
│   └── database.js
├── .env                  # Variáveis de ambiente
├── server.js             # Arquivo principal
└── package.json          # Dependências do projeto
```

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Sequelize** - ORM para banco de dados
- **MySQL** - Sistema de gerenciamento de banco de dados
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Nodemon** - Desenvolvimento com hot reload

## 🔄 Histórico de Desenvolvimento

Este projeto foi desenvolvido seguindo uma abordagem incremental:

1. **CRUD de Projetos** - Implementação completa das operações básicas
2. **CRUD de Tarefas** - Adição das funcionalidades de tarefas vinculadas
3. **Refatoração para Controllers** - Organização do código em camadas
4. **Configuração do Banco** - Setup da conexão com MySQL
5. **Models Sequelize** - Criação dos esquemas e relacionamentos

---

