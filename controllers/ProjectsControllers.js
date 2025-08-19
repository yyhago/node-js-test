class ProjectsControllers {
  createProject(req, res) {
    const { nome, descricao } = req.body;
    res.json({ nome, descricao });
  }

  getProjects(req, res) {
    res.json({ message: "seus dados dos projetos" });
  }

  getProject(req, res) {
    const { id } = req.params;
    res.json({ message: `Dados individual do projeto ${id}` });
  }

  putProject(req, res) {
    const { id } = req.params;
    res.json({ message: `Atualização dos dados individual do projeto ${id}` });
  }

  delProject(req, res) {
    const { id } = req.params;
    res.json({ message: `Deletando dados do projeto ${id}` });
  }

  projectIDTaks(req, res) {
    const { status, titulo, descricao } = req.body;
    res.json({ status, titulo, descricao });
  }
}

module.exports = ProjectsControllers;
