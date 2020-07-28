export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IPropsTodoItem {
  todo: ITodo;
}

export interface IPropsTodoList {
  list: ITodo[];
}
