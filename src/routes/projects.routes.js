const { Router } = require("express");
const projectRouter = Router();

const ProjectsControllers = require("../controllers/ProjectsControllers.js");
const TasksControllers = require("../controllers/TasksControllers.js");


projectRouter.post("/", ProjectsControllers.createProject);
projectRouter.get("/", ProjectsControllers.getProjects);
projectRouter.get("/:id", ProjectsControllers.getProject);
projectRouter.put("/:id", ProjectsControllers.putProject);
projectRouter.delete("/:id", ProjectsControllers.delProject);

// Rota vinculada à uma task específica
projectRouter.post("/:projectId/tasks", TasksControllers.createTask);

projectRouter.get("/:id/github/:username", ProjectsControllers.getGithubRepos);


module.exports = projectRouter;
