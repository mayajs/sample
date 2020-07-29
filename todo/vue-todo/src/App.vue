<template>
  <div id="app">
    <Todos msg="Vue TODOS App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todos from "./components/Todos.vue";

@Component({
  components: {
    Todos,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
