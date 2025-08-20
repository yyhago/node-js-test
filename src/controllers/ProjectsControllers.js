const ProjectService = require("../services/ProjectServices");

class ProjectsControllers {
  async createProject(req, res) {
    try {
      const { nome, descricao } = req.body;
      const project = await ProjectService.createProject({ nome, descricao });
      return res.status(201).json(project);
    } catch (error) {
      const status = error.message.includes("obrigatório") ? 400 : 500;
      return res.status(status).json({ msg: `Erro ao criar projeto: ${error.message}` });
    }
  }

  async getProjects(req, res) {
    try {
      const projects = await ProjectService.getProjects();
      return res.status(200).json(projects);
    } catch (error) {
      return res.status(500).json({ msg: `Erro ao listar projetos: ${error.message}` });
    }
  }

  async getProject(req, res) {
    try {
      const { id } = req.params;
      const project = await ProjectService.getProject(id);
      return res.status(200).json(project);
    } catch (error) {
      const status = error.message.includes("não encontrado") ? 404 : 500;
      return res.status(status).json({ msg: `Erro ao buscar projeto: ${error.message}` });
    }
  }

  async putProject(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const project = await ProjectService.updateProject({ id, nome, descricao });
      return res.status(200).json(project);
    } catch (error) {
      const status = error.message.includes("não encontrado") ? 404 : 500;
      return res.status(status).json({ msg: `Erro ao atualizar projeto: ${error.message}` });
    }
  }

  async delProject(req, res) {
    try {
      const { id } = req.params;
      await ProjectService.deleteProject(id);
      return res.status(204).send();
    } catch (error) {
      const status = error.message.includes("não encontrado") ? 404 : 500;
      return res.status(status).json({ msg: `Erro ao deletar projeto: ${error.message}` });
    }
  }

  async getGithubRepos(req, res) {
    try {
      const { id, username } = req.params;
      const repos = await ProjectService.getGithubRepos(id, username);
      return res.status(200).json(repos);
    } catch (error) {
      const status = error.message.includes("não encontrado") ? 404 : 500;
      return res.status(status).json({ msg: `Erro ao buscar repositórios: ${error.message}` });
    }
  }
}

module.exports = new ProjectsControllers();