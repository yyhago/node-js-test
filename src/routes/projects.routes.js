const { Router } = require("express");
const projectRouter = Router();

const ProjectsControllers = require("../controllers/ProjectsControllers.js");
const TasksControllers = require("../controllers/TasksControllers.js");

const projectsControllers = new ProjectsControllers();
const tasksControllers = new TasksControllers();

projectRouter.post("/", projectsControllers.createProject);
projectRouter.get("/", projectsControllers.getProjects);
projectRouter.get("/:id", projectsControllers.getProject);
projectRouter.put("/:id", projectsControllers.putProject);
projectRouter.delete("/:id", projectsControllers.delProject);

// Rota vinculada à uma task específica
projectRouter.post("/:projectId/tasks", tasksControllers.createTask);

projectRouter.get("/:id/github/:username", projectsControllers.getGithubRepos);


module.exports = projectRouter;
