const { Router } = require("express");
const projectRouter = require("./projects.routes.js");
const taskRouter = require("./tasks.routes.js")

const routes = Router();

routes.use("/projects", projectRouter);
routes.use("/tasks", taskRouter)


module.exports = routes;
