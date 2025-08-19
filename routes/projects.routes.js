const { Router } = require("express");
const projectRouter = Router();

projectRouter.post("/", (req, res) => {
  const { nome, descricao } = req.body;
  res.json({ nome, descricao });
});

projectRouter.get("/", (req, res) => {
  res.json({ message: "seus dados do projeto" });
});

projectRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Dados individual do projeto ${id}` });
});

projectRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Atualização dos dados individual do projeto ${id}` });
});

projectRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Deletando dados do projeto ${id}` });
});

// Rota vinculada à uma task específica
projectRouter.post("/:projectId/tasks", (req, res) => {
  const { status, titulo, descricao } = req.body;
  res.json({ status, titulo, descricao });
});


module.exports = projectRouter;
