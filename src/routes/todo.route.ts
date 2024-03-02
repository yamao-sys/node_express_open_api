import express from "express"
import { TodoController } from "../controllers/Todo.controller"
import { container } from "../inversify.config"
import { TYPES } from "../inject.type"

const todoController = container.get<TodoController>(TYPES.TodoController)

export const createTodoRoutes = (app: express.Express) => {
  app.get("/todos", async (req, res) => await todoController.index(req, res))
  app.get("/todos/:id", async (req, res) => await todoController.show(req, res))
  app.post("/todos", async (req, res) => await todoController.create(req, res))
  app.put("/todos/:id", async (req, res) => await todoController.update(req, res))
  app.delete("/todos/:id", async (req, res) => await todoController.delete(req, res))
}
