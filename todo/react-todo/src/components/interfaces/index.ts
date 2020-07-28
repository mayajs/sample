interface IActions {
  toggleComplete: (id: string) => void;
  deleteItem: (id: string) => void;
}

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IPropsTodoItem {
  todo: ITodo;
  actions: IActions;
}

export interface IPropsTodoList {
  list: ITodo[];
  actions: IActions;
}
