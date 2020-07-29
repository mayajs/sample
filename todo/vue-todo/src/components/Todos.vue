<template>
  <div>
    {{ info }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class Todos extends Vue {
  @Prop() private msg!: string;
  private info!: any;
  data() {
    return {
      info: null,
    };
  }
  mounted() {
    axios
      .get("http://localhost:3333/todos")
      .then((response) => (this.info = response.data))
      .catch((error) => console.log(error));
  }
}
</script>

<style scoped></style>
