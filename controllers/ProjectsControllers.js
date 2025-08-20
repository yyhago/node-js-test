const { Project, Task } = require("../models/index.js");


class ProjectsControllers {

  async createProject(req, res) {
    try {
      const { nome, descricao } = req.body;
      if (!nome) {
        return res.status(400).json({ msg: "O nome do projeto é obrigatório!" });
      }

      const project = await Project.create({ nome, descricao });
      return res.status(201).json(project);
    } catch (error) {
      return req.status(500).json({ msg: `Erro do servidor ao criar um projeto, erro: ${error}` });
    }
  }

  async getProjects(req, res) {
    try {
      const project = await Project.findAll({
        include: [{ model: Task, as: "tasks" }],
      });
      return res.status(200).json(project);
    } catch (error) {
      return res.status(500).json({ msg: `Erro ao listar projetos, erro: ${error}` });
    }
  }

  async getProject(req, res) {
    try {
      const { id } = req.params;
      const project = await Project.findByPk(id, {
        include: [{ model: Task, as: "tasks" }],
      });
      return res.status(200).json(project);
    } catch (error) {
      return res.status(404).json({ msg: `Projeto não encontrado, erro: ${error}` });
    }
  }

  async putProject(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const project = await Project.findByPk(id);
      if (!project) {
        return res.status(404).json({ msg: "Projeto não encontrado" });
      }
      await project.update({ nome, descricao });
      return res.status(200).json(project);
    } catch (error) {
      return res.status(500).json({ msg: `Erro ao atualizar projeto, erro: ${error.message}` });
    }
  }

  async delProject(req, res) {
    try {
      const { id } = req.params;

      const project = await Project.findByPk(id);
      if (!project) {
        return res.status(404).json({ msg: `Projeto não encontrado` });
      }

      await project.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ msg: `Erro ao deletar projeto, erro: ${error}` });
    }
  }

}

module.exports = ProjectsControllers;
