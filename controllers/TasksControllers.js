class TasksControllers {
  putTasks(req, res) {
    const { id } = req.params;
    res.json({ message: `Atualizando status/título/descrição ${id}.` });
  }

  delTaks(req, res) {
    const { id } = req.params;
    res.json({ message: `Removendo tarefa ${id}.` });
  }
}

module.exports = TasksControllers;
