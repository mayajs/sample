<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
          {{ msg }}
        </a>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto mt-5 mb-2">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="todo in todos" :key="todo._id">
              <div>
                <input class="form-check-input mr-1" type="checkbox" />
                {{ todo.title }}
              </div>
              <div>
                <button class="btn btn-info btn-sm mx-1" v-on:click="editTodo(todo._id, todo.title)"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm mx-1" v-on:click="deleteTodo(todo._id)"><i class="fas fa-trash"></i></button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mx-auto">
          <form @submit.prevent="postTodo" v-if="!this.id">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Enter TODO" v-model="title" />
              <button class="btn btn-primary">Submit</button>
            </div>
          </form>

          <form @submit.prevent="patchTodo" v-if="this.id">
            <input v-model="id" placeholder="id" hidden />
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Enter TODO" v-model="title" />
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
