import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

//if need add additional actions go here, blogs, image, etc
export type Action = FetchTodosAction | DeleteTodoAction;