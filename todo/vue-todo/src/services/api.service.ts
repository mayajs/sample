import { environment as env } from "../environments/index";
import axios from "axios";

interface ITodo {
  _id?: string;
  title: string;
  completed: boolean;
}

const url = env.API_URL;

export function getTodos() {
  return axios.get<ITodo[]>(`${url}todos`);
}

export function postTodo(title: string) {
  return axios.post<ITodo>(`${url}todos`, { title, completed: false });
}

export function patchTodo(todo: ITodo) {
  return axios.patch<ITodo>(`${url}todos/${todo._id}`, todo);
}

export function deleteTodo(id: string) {
  return axios.delete(`${url}todos/${id}`);
}
