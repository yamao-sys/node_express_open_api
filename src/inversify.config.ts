import { Container } from "inversify"
import { TYPES } from "./inject.type"
import ITodoModel from "./models/todo/Todo.interface"
import { TodoModel } from "./models/todo/Todo"
import { TodoController } from "./controllers/Todo.controller"

const container = new Container()

// Todo
container.bind<ITodoModel>(TYPES.ITodoModel).to(TodoModel).inSingletonScope()
container.bind<TodoController>(TYPES.TodoController).to(TodoController).inSingletonScope()

export { container }
