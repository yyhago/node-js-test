const { Router } = require("express");
const taskRouter = Router();

taskRouter.put("/:id", (req, res) => {
  const {id} = req.params
  res.json({ message: `Atualizando status/título/descrição ${id}.` });
});

taskRouter.delete("/:id", (req, res) => {
  const {id} = req.params
  res.json({ message: `Removendo tarefa ${id}.` });
});

module.exports = taskRouter;
