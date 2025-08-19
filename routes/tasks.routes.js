const { Router } = require("express");
const taskRouter = Router();

const TasksControllers = require("../controllers/TasksControllers.js");
const tasksControllers = new TasksControllers();

taskRouter.put("/:id", tasksControllers.putTasks);
taskRouter.delete("/:id", tasksControllers.delTaks);

module.exports = taskRouter;
