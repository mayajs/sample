interface IActions {
  toggleComplete: (id: string) => void;
  deleteItem: (id: string) => void;
  onEdit: (todo: ITodo) => void;
}

export interface ITodo {
  _id: string;
  title: string;
  completed: boolean;
}

export interface IPropsApp {
  list: ITodo[];
  isEdit: boolean;
}

export interface IPropsTodoItem {
  todo: ITodo;
  actions: IActions;
}

export interface IPropsTodoList {
  list: ITodo[];
  actions: IActions;
}

export interface IPropsTodoAdd {
  addItem: (title: string) => void;
}

export interface IPropsTodoEdit {
  todo: ITodo;
  updateItem: (todo: ITodo) => void;
}
