<template>
  <div>
    {{ msg }}
    <ul>
      <li v-for="todo in todos" :key="todo._id">
        {{ todo.title }} <button v-on:click="editTodo(todo._id, todo.title)">edit</button> <button v-on:click="deleteTodo(todo._id)">remove</button>
      </li>
    </ul>

    <form @submit.prevent="postTodo" v-if="!this.id">
      <input v-model="title" placeholder="title" />
      <button>Submit</button>
    </form>

    <form @submit.prevent="patchTodo" v-if="this.id">
      <input v-model="id" placeholder="id" hidden />
      <input v-model="title" placeholder="title" />
      <button>Update</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

export interface ITodo {
  _id: string;
  title: string;
  completed: boolean;
}

@Component({})
export default class Todos extends Vue {
  @Prop() private msg!: string;
  private id!: string;
  private title!: string;
  private completed!: boolean;
  private todos!: ITodo[];
  private url = "http://localhost:3333/todos";

  data() {
    return {
      todos: null,
      id: "",
      title: "",
      completed: false,
    };
  }

  mounted() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get<ITodo[]>(this.url)
      .then(({ data }) => (this.todos = data))
      .catch((error) => console.log(error));
  }

  postTodo() {
    axios
      .post<ITodo>(this.url, { title: this.title, completed: this.completed })
      .then(() => {
        this.title = "";
        this.getTodos();
      })
      .catch((error) => console.log(error));
  }

  patchTodo() {
    axios
      .patch<ITodo>(`${this.url}/${this.id}`, { title: this.title, completed: this.completed })
      .then(() => {
        this.id = "";
        this.title = "";
        this.getTodos();
      })
      .catch((error) => console.log(error));
  }

  editTodo(id: string, title: string) {
    this.id = id;
    this.title = title;
  }

  deleteTodo(id: string) {
    axios
      .delete(`${this.url}/${id}`)
      .then(() => this.getTodos())
      .catch((error) => console.log(error));
  }
}
</script>

<style scoped></style>
