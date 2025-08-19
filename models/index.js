const Project = require("./projectsModel");
const Task = require("./tasksModel");

Project.hasMany(Taks, {
  foreignKey: "projectId",
  as: "tasks",
});

Taks.belongsToMany(Project, {
  foreignKey: "projectId",
  as: "project",
});

module.exports = { Project, Task };
