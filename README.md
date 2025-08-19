# Log de Desenvolvimento do Projeto

Este README.md serve como um diário de desenvolvimento do projeto, onde documento as etapas do projeto e o motivo de cada commit realizado até a conclusão.

---

### Primeiro Commit - (19/08/2025)
**Implementação do CRUD de Projetos**

Realizei o primeiro commit após finalizar a base do primeiro sistema, CRUD de Projetos. Todas as rotas foram implementadas e testadas com sucesso no Insomnia:

#### Rotas Implementadas:
- **`POST /projects`** → Cria um novo projeto
- **`GET /projects`** → Lista todos os projetos cadastrados
- **`GET /projects/:id`** → Retorna dados específicos de um projeto
- **`PUT /projects/:id`** → Atualiza informações de um projeto existente
- **`DELETE /projects/:id`** → Remove um projeto do sistema

#### Estrutura arquivos:
- **`server.js`** → Arquivo responsável por configurar e inciar servidor.
- **`./routes/projects.routes.js`** → Arquivo responsável pela criação das rotas.
- **`./routes/index.js`** → Arquivo responsável apenas pela junção de todas as rotas, assim sendo chamado no server.js para melhor organização.

**Status:** ✅ Concluído e funcionando corretamente

---
---

### Segundo Commit - (19/08/2025)
**Implementação do segundo CRUD de Tarefas**

Realizei o segundo commit após finalizar a base do segundo sistema, CRUD de Tarefas. Todas as rotas foram implementadas e testadas com sucesso no Insomnia:

#### Rotas Implementadas:
- **`POST /:projectId/tasks`** → Rota que retorna uma task específica daquele devido projeto
- **`PUT /tasks/:id`** → Retorna a task específica de acordo com seu id
- **`DELETE /tasks/:id`** → Deleta a task específica de acordo com seu id

#### Estrutura arquivos:
- **`./routes/tasks.routes.js`** → Arquivo responsável pelas rotas de atualizar e deletar tasks, passando seus devidos parâmetros.

**Status:** ✅ Concluído e funcionando corretamente

---

## Observações

Tecnologias usadas: Javascript, Node.js (express, nodemon), Insomnia,  Prettier.
