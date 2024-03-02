import { Repository } from "typeorm"
import { validate } from "class-validator"
import { injectable } from "inversify"
import ITodoModel, { todoParams } from "./Todo.interface"
import Todo from "../../entities/Todo"
import { AppDataSource } from "../../data-source"

@injectable()
export class TodoModel implements ITodoModel {
  private _todoRepository: Repository<Todo>

  public constructor() {
    this._todoRepository = AppDataSource.getRepository(Todo)
  }

  public async findAll() {
    return this._todoRepository.find()
  }

  public async findOne(id: number) {
    return this._todoRepository.findOne({
      where: {
        id: id,
      },
    })
  }

  public async buildNewTodo(params: todoParams) {
    let todo = new Todo()
    todo = await this.assignParams(todo, params)
    return todo
  }

  public async assignParams(todo: Todo, params: todoParams) {
    todo.title = params.title
    todo.content = params.content
    return todo
  }

  public async validate(todo: Todo) {
    return validate(todo)
  }

  public async save(todo: Todo) {
    return this._todoRepository.save(todo)
  }

  public async remove(todo: Todo) {
    return this._todoRepository.remove(todo)
  }
}
