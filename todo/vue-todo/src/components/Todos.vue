<template>
  <div>
    {{ info }}
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
  private info!: ITodo[];

  data() {
    return {
      info: null,
    };
  }

  mounted() {
    this.get();
    this.post();
  }

  get() {
    axios
      .get("http://localhost:3333/todos")
      .then((response) => (this.info = response.data))
      .catch((error) => console.log(error));
  }

  post() {
    axios
      .post<ITodo>("http://localhost:3333/todos", {})
      .then((response) => (this.info = [...this.info, response.data]))
      .catch((error) => console.log(error));
  }
}
</script>

<style scoped></style>
