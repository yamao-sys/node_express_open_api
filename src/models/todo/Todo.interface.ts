import { ValidationError } from "class-validator"
import Todo from "../../entities/Todo"

export default interface ITodoModel {
  findAll(): Promise<Todo[]>
  findOne(id: number): Promise<Todo | null>
  buildNewTodo(params: todoParams): Promise<Todo>
  assignParams(todo: Todo, params: todoParams): Promise<Todo>
  validate(todo: Todo): Promise<ValidationError[]>
  save(todo: Todo): Promise<Todo>
  remove(todo: Todo): Promise<Todo>
}

export interface todoParams {
  title: string
  content: string
}
