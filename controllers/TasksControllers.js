const TaskService = require("../services/TaskService.js");

class TasksControllers {
  async createTask(req, res) {
    try {
      const { projectId } = req.params;
      const { titulo, descricao, status } = req.body;
      const task = await TaskService.createTask({ projectId, titulo, descricao, status });
      return res.status(201).json(task);
    } catch (error) {
      const status = error.message.includes("obrigatórios") ? 400 : error.message.includes("não encontrado") ? 404 : 500;
      return res.status(status).json({ msg: `Erro ao criar tarefa: ${error.message}` });
    }
  }

  async putTask(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descricao, status } = req.body;
      const task = await TaskService.updateTask(id, { titulo, descricao, status });
      return res.status(200).json(task);
    } catch (error) {
      const status = error.message.includes("não encontrado") ? 404 : error.message.includes("Título") || error.message.includes("Descrição") || error.message.includes("Status") ? 400 : 500;
      return res.status(status).json({ msg: `Erro ao atualizar tarefa: ${error.message}` });
    }
  }

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      await TaskService.deleteTask(id);
      return res.status(204).send();
    } catch (error) {
      const status = error.message.includes("não encontrado") ? 404 : 500;
      return res.status(status).json({ msg: `Erro ao deletar tarefa: ${error.message}` });
    }
  }
}

module.exports = new TasksControllers();