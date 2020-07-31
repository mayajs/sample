<template>
  <div>
    <div class="container mt-4 col-md-5">
      <nav class="navbar navbar-dark bg-dark mb-2">
        <div class="container-fluid">
          <a class="navbar-brand mx-auto">
            <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
            {{ msg }}
          </a>
        </div>
      </nav>

      <div class="row">
        <div class="col mx-auto my-2">
          <h4 class="text-center" v-if="errorMessage">{{ errorMessage }}</h4>
          <ul class="list-group" v-if="!errorMessage">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="todo in todos" :key="todo._id">
              <span class="flex-grow-1 ml-1">{{ todo.title }}</span>

              <button class="btn btn-action btn-info badge mx-1" v-on:click="editTodo(todo._id, todo.title)">
                <span class="fas fa-edit"></span>
              </button>

              <button class="btn btn-action btn-danger badge mx-1" v-on:click="deleteTodo(todo._id)">
                <span class="fas fa-trash"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col mx-auto">
          <form @submit.prevent="postTodo" v-if="!this.id">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Enter TODO here..." v-model="title" />
              <button class="btn btn-success">Add</button>
            </div>
          </form>

          <form @submit.prevent="patchTodo" v-if="this.id">
            <input v-model="id" placeholder="id" hidden />
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Enter TODO here..." v-model="title" />
              <button class="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
import { environment as env } from "../environments/index";

interface ITodo {
  _id?: string;
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
  private url = env.API_URL;
  private errorMessage!: string;

  data() {
    return {
      todos: null,
      id: "",
      title: "",
      completed: false,
      todo: { id: "", title: "", completed: false },
      errorMessage: "",
    };
  }

  mounted() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get<ITodo[]>(`${this.url}todos`)
      .then(({ data }) => (this.todos = data))
      .catch(() => (this.errorMessage = "There are no todo items to show..."));
  }

  postTodo() {
    axios
      .post<ITodo>(`${this.url}todos`, { title: this.title, completed: this.completed })
      .then(() => {
        this.title = "";
        this.getTodos();
      })
      .catch((error) => (this.errorMessage = error));
  }

  patchTodo() {
    axios
      .patch<ITodo>(`${this.url}todos/${this.id}`, { title: this.title, completed: this.completed })
      .then(() => {
        this.id = "";
        this.title = "";
        this.getTodos();
      })
      .catch((error) => (this.errorMessage = error));
  }

  deleteTodo(id: string) {
    axios
      .delete(`${this.url}todos/${id}`)
      .then(() => this.getTodos())
      .catch((error) => (this.errorMessage = error));
  }

  editTodo(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}
</script>

<style scoped>
.btn-action {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
