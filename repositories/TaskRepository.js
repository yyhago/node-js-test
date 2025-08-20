const { Task } = require("../models/index.js");

class TaskRepository {
  async create({ projectId, titulo, descricao, status }) {
    return await Task.create({
      projectId,
      titulo,
      descricao,
      status: status || "Pendente",
    });
  }

  async findById(id) {
    return await Task.findByPk(id);
  }

  async update(id, { titulo, descricao, status }) {
    const task = await Task.findByPk(id);
    await task.update({
      titulo: titulo || task.titulo,
      descricao: descricao || task.descricao,
      status: status || task.status,
    });
    return task;
  }

  async delete(id) {
    const task = await Task.findByPk(id);
    await task.destroy();
  }
}

module.exports = new TaskRepository();