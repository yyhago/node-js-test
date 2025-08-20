const { Project, Task } = require("../models/index.js");


class TasksControllers {
  async createTask(req, res) {
    try {
      const { projectId } = req.params;
      const { titulo, descricao, status } = req.body;

      if (!titulo) {
        return res.status(400).json({ msg: "O título da tarefa é obrigatório" });
      }
      if (status && !['Pendente', 'Em progresso', 'Concluida'].includes(status)) {
        return res.status(400).json({ msg: "Status inválido" });
      }

      const project = await Project.findByPk(projectId);
      if (!project) {
        return res.status(404).json({ msg: "Projeto não encontrado" });
      }

      const task = await Task.create({
        titulo,
        descricao,
        status: status || 'Pendente',
        projectId,
      });

      return res.status(201).json(task);
    } catch (error) {
      return res.status(500).json({ msg: `Erro ao criar tarefa, erro: ${error.message}` });
    }
  }

  async putTask(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descricao, status } = req.body;

      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ msg: "Tarefa não encontrada" });
      }

      if (status && !['Pendente', 'Em progresso', 'Concluida'].includes(status)) {
        return res.status(400).json({ msg: "Status inválido" });
      }

      await task.update({ titulo, descricao, status });
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ msg: `Erro ao atualizar tarefa, erro: ${error.message}` });
    }
  }

  async deleteTask(req, res) {
    try {
      const { id } = req.params;

      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ msg: "Tarefa não encontrada" });
      }

      await task.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ msg: `Erro ao deletar tarefa, erro: ${error.message}` });
    }
  }
}

module.exports = TasksControllers;