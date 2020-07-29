<template>
  <div>
    {{ msg }}
    <ul>
      <li v-for="todo in todos" :key="todo._id">
        {{ todo.title }}
      </li>
    </ul>
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
  private todos!: ITodo;

  data() {
    return {
      todos: [],
    };
  }

  mounted() {
    this.get();
    this.post();
  }

  get() {
    axios
      .get("http://localhost:3333/todos")
      .then((response) => (this.todos = response.data))
      .catch((error) => console.log(error));
  }

  post() {
    axios
      .post<ITodo>("http://localhost:3333/todos", {})
      .then((response) => (this.todos = response.data))
      .catch((error) => console.log(error));
  }
}
</script>

<style scoped></style>
