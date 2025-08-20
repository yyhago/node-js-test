const ProjectRepository = require("../repositories/ProjectRepository.js");
const RepositoryRepository = require("../repositories/RepositoryRepository.js");
const axios = require("axios");

class ProjectService {
  async createProject({ nome, descricao }) {
    if (!nome || !descricao || descricao.trim() === "") {
      throw new Error("O nome do projeto é obrigatório e é necessário uma descrição válida!");
    }
    return await ProjectRepository.create({ nome, descricao });
  }

  async getProjects() {
    return await ProjectRepository.findAll();
  }

  async getProject(id) {
    const project = await ProjectRepository.findById(id);
    if (!project) {
      throw new Error("Projeto não encontrado");
    }
    return project;
  }

  async updateProject({ id, nome, descricao }) {
    const project = await ProjectRepository.findById(id);
    if (!project) {
      throw new Error("Projeto não encontrado");
    }
    return await ProjectRepository.update({ id, nome, descricao });
  }

  async deleteProject(id) {
    const project = await ProjectRepository.findById(id);
    if (!project) {
      throw new Error("Projeto não encontrado");
    }
    await ProjectRepository.delete(id);
  }

  async getGithubRepos(id, username) {
    const project = await ProjectRepository.findById(id);
    if (!project) {
      throw new Error("Projeto não encontrado");
    }
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      params: {
        sort: "updated",
        per_page: 5,
      },
    });
    const repos = response.data;
    if (!repos || repos.length === 0) {
      throw new Error("Usuário não encontrado ou não possui repositórios públicos");
    }
    const savedRepos = await Promise.all(
      repos.map(async (repo) => {
        const [savedRepo] = await RepositoryRepository.findOrCreate({
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
    return savedRepos;
  }
}

module.exports = new ProjectService();