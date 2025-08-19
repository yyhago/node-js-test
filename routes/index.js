const { Router } = require("express");
const projectRouter = require("./projects.routes.js");

const routes = Router();

routes.use("/projects", projectRouter);

module.exports = routes;
