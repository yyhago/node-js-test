const { Project, Task, Repository } = require("../models/index.js");
const axios = require("axios")

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
        include: [
          { model: Task, as: "tasks" },
          {model: Repository, as: "repositories"}
        ]
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
        include: [
          { model: Task, as: "tasks" },
          {model: Repository, as: "repositories"}
        ]
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


  async getGithubRepos(req,res){
    try {
      const {id, username} = req.params;

      const project = await Project.findByPk(id)
      if(!project){
        return res.status(404).json({ msg: "Github não encontrado"})
      }

      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        headers:{
          Accept: "application/vnd.github.v3+json",
        },
        params:{
          sort: "updated",
          per_page: 5
        },
      })
      const repos = response.data

      if(!repos || repos.length === 0){
        return res.status(404).json({ msg: "Usuário não encontrado ou não possui repositórios públicos!!" });
      }

      const savedRepos = await Promise.all(
        repos.map(async (repo) => {
          const [savedRepo, created] = await Repository.findOrCreate({
            where: { url: repo.html_url, projectId: id },
            defaults: {
              name: repo.name,
              description: repo.description || null,
              url: repo.html_url,
              updatedAtGitHub: new Date(repo.updated_at),
              projectId: id,
            },
          });
          return savedRepo;
        })
      );
      return res.status(200).json(savedRepos);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return res.status(404).json({ msg: "Usuário do GitHub não encontrado" });
      }
      return res.status(500).json({ msg: `Erro ao buscar repositórios, erro: ${error.message}` });
    }
  }


}

module.exports = ProjectsControllers;
