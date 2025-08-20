const Project = require("./projectsModel");
const Task = require("./tasksModel");
const Repository = require("./repositoriesGithub")

Project.hasMany(Task, {
  foreignKey: "projectId",
  as: "tasks",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  as: "project",
});

Project.hasMany(Repository, {
  foreignKey: "projectId",
  as: "repositories"
})

Repository.belongsTo(Project, {
  foreignKey: "projectId",
})

module.exports = { Project, Task, Repository };