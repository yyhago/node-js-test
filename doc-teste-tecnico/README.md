# 🚀 Desafio Técnico — Node.js

## 🎯 Objetivo
Criar uma **API REST** em **Node.js** para gerenciar **projetos e tarefas**, incluindo:
- CRUD completo
- Integração com API externa
- Boas práticas de arquitetura, segurança e performance

---

## 📋 Requisitos Funcionais

### 1. CRUD de Projetos
- `POST /projects` → Cria um projeto.
- `GET /projects` → Lista todos os projetos.
- `GET /projects/:id` → Retorna dados do projeto.
- `PUT /projects/:id` → Atualiza informações do projeto.
- `DELETE /projects/:id` → Remove um projeto.

### 2. CRUD de Tarefas
- `POST /projects/:projectId/tasks` → Cria tarefa vinculada a um projeto.
- `PUT /tasks/:id` → Atualiza status/título/descrição.
- `DELETE /tasks/:id` → Remove tarefa.
  
--- 

## 📦 Requisitos Técnicos
- **Node.js + Express**
- Banco de dados **MySQL**
- ORM: **Sequelize**
- Arquitetura em camadas: `controllers → services → repositories`
- Documentação detalhada no README
---

## 📑 Entrega
O candidato deve entregar:
1. **Repositório Git** com código e README contendo:
   - Instruções para rodar a API localmente
   - Variáveis de ambiente necessárias, se houver

---

## Diferenciais (não obrigatórios):
1. Dockerfile e docker-compose para subir API e banco
2. Uso de cache in memory ou Redis para guardar resultados da integração por 10 minutos
3. Integração Externa (GitHub)
- `GET /projects/:id/github/:username` → Busca os **5 últimos repositórios públicos** de um usuário no GitHub e vincula ao projeto (salvando no banco).
- API: `https://api.github.com/users/{username}/repos`

---

## 💡 Observações
- Sinta-se livre para usar bibliotecas que ajudem na produtividade, mas mantenha boas práticas.
- Organização e clareza do código serão avaliadas junto com a implementação das funcionalidades.
