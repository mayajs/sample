<template>
  <div>
    {{ msg }}
    <ul>
      <li v-for="todo in todos" :key="todo._id">{{ todo.title }} <span>edit</span> <button v-on:click="deleteTodo(todo._id)">remove</button></li>
    </ul>
    <form method="post" @submit.prevent="postTodo">
      <input v-model="title" placeholder="title" />
      <button>Submit</button>
    </form>
    <p>Title is: {{ title }}</p>
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
  private title!: string;
  private completed!: string;
  private todos!: ITodo[];
  private url = "http://localhost:3333/todos";

  data() {
    return {
      todos: null,
      title: "",
      completed: false,
    };
  }

  mounted() {
    this.getTodos();
    this.postTodo();
  }

  getTodos() {
    axios
      .get(this.url)
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

  deleteTodo(id: string) {
    axios
      .delete(`${this.url}/${id}`)
      .then(() => this.getTodos())
      .catch((error) => console.log(error));
  }
}
</script>

<style scoped></style>
