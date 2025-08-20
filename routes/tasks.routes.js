const { Router } = require("express");
const taskRouter = Router();

const TasksControllers = require("../controllers/TasksControllers.js");
const tasksControllers = new TasksControllers();

taskRouter.put("/:id", tasksControllers.putTask);
taskRouter.delete("/:id", tasksControllers.deleteTask);

module.exports = taskRouter;