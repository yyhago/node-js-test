const TaskRepository = require("../repositories/TaskRepository.js");
const ProjectRepository = require("../repositories/ProjectRepository.js");

class TaskService {
  async createTask({ projectId, titulo, descricao, status }) {
    const project = await ProjectRepository.findById(projectId);
    if (!project) {
      throw new Error("Projeto não encontrado");
    }
    if (!titulo || !titulo.trim() || !descricao || !descricao.trim() || !status || !["Pendente", "Em progresso", "Concluida"].includes(status)) {
      throw new Error("Título, descrição e status válido (Pendente, Em progresso, Concluida) são obrigatórios");
    }
    return await TaskRepository.create({ projectId, titulo, descricao, status });
  }

  async updateTask(id, { titulo, descricao, status }) {
    const task = await TaskRepository.findById(id);
    if (!task) {
      throw new Error("Tarefa não encontrada");
    }
    if (titulo && !titulo.trim()) {
      throw new Error("Título não pode ser vazio");
    }
    if (descricao && !descricao.trim()) {
      throw new Error("Descrição não pode ser vazia");
    }
    if (status && !["Pendente", "Em progresso", "Concluida"].includes(status)) {
      throw new Error("Status deve ser Pendente, Em progresso ou Concluida");
    }
    return await TaskRepository.update(id, { titulo, descricao, status });
  }

  async deleteTask(id) {
    const task = await TaskRepository.findById(id);
    if (!task) {
      throw new Error("Tarefa nao encontrada");
    }
    await TaskRepository.delete(id);
  }
}

module.exports = new TaskService();