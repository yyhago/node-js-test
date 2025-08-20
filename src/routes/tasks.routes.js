const { Router } = require("express");
const taskRouter = Router();

const TasksControllers = require("../controllers/TasksControllers.js");

taskRouter.put("/:id", TasksControllers.putTask);
taskRouter.delete("/:id", TasksControllers.deleteTask);

module.exports = taskRouter;