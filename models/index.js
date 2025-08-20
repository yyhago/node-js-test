const Project = require("./projectsModel");
const Task = require("./tasksModel");

Project.hasMany(Task, {
  foreignKey: "projectId",
  as: "tasks",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  as: "project",
});

module.exports = { Project, Task };