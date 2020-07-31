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
              <input class="form-check-input mr-1" type="checkbox" v-bind:checked="todo.completed" v-on:change="onChange(todo, $event)" />
              <span class="flex-grow-1 ml-1">{{ todo.title }}</span>

              <button class="btn btn-action btn-info badge mx-1" v-on:click="editTodo(todo)">
                <span class="fas fa-edit"></span>
              </button>

              <button class="btn btn-action btn-danger badge mx-1" v-on:click="removeTodo(todo._id)">
                <span class="fas fa-trash"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col mx-auto">
          <form @submit.prevent="addTodo" v-if="!this.todo._id">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Enter TODO here..." v-model="todo.title" />
              <button class="btn btn-success">Add</button>
            </div>
          </form>

          <form @submit.prevent="updateTodo" v-if="this.todo._id">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Enter TODO here..." v-model="todo.title" />
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
import { getTodos, postTodo, patchTodo, deleteTodo } from "../services/api.service";

interface ITodo {
  _id?: string;
  title: string;
  completed: boolean;
}

@Component({})
export default class Todos extends Vue {
  @Prop() private msg!: string;
  private todos!: ITodo[];
  private todo!: ITodo;
  private errorMessage!: string;

  data() {
    return {
      todos: null,
      errorMessage: "",
      todo: { _id: "", title: "", completed: false },
    };
  }

  mounted() {
    getTodos()
      .then(({ data }) => (this.todos = data))
      .catch(() => (this.errorMessage = "There are no todo items to show..."));
  }

  addTodo() {
    postTodo(this.todo.title)
      .then(() => {
        this.todo = { _id: "", title: "", completed: false };
        return getTodos();
      })
      .then(({ data }) => (this.todos = data))
      .catch((error) => (this.errorMessage = error));
  }

  updateTodo() {
    patchTodo({ ...this.todo })
      .then(() => {
        this.todo = { _id: "", title: "", completed: false };
        return getTodos();
      })
      .then(({ data }) => (this.todos = data))
      .catch((error) => (this.errorMessage = error));
  }

  removeTodo(id: string) {
    deleteTodo(id)
      .then(() => getTodos())
      .then(({ data }) => (this.todos = data))
      .catch((error) => (this.errorMessage = error));
  }

  editTodo(todo: ITodo) {
    this.todo = { ...todo };
  }

  onChange(todo: ITodo, event: Event) {
    const check = (event.target as HTMLInputElement).checked;
    patchTodo({ ...todo, completed: check });
  }
}
</script>

<style scoped>
.btn-action {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
