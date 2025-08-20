const { Project, Task, Repository } = require("../models/index.js");

class ProjectRepository {
  async create({ nome, descricao }) {
    return await Project.create({ nome, descricao });
  }

  async findAll() {
    return await Project.findAll({
      include: [
        { model: Task, as: "tasks" },
        { model: Repository, as: "repositories" },
      ],
    });
  }

  async findById(id) {
    const project = await Project.findByPk(id, {
      include: [
        { model: Task, as: "tasks" },
        { model: Repository, as: "repositories" },
      ],
    });
    return project;
  }

  async update({ id, nome, descricao }) {
    const project = await Project.findByPk(id);
    await project.update({ nome, descricao });
    return await Project.findByPk(id, {
      include: [
        { model: Task, as: "tasks" },
        { model: Repository, as: "repositories" },
      ],
    });
  }

  async delete(id) {
    const project = await Project.findByPk(id);
    await project.destroy();
  }
}

module.exports = new ProjectRepository();