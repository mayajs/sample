<script>
  import { Container } from "sveltestrap";
  let list = [
    { title: "Sleeping", completed: false, id: 1 },
    { title: "Walking", completed: false, id: 2 },
    { title: "Eating", completed: false, id: 3 },
  ];
</script>

<style>
  .todo {
    background-color: #333;
    color: #fff;
    text-align: "center";
    padding: 10px;
  }
</style>

<Container>
  <header class="todo text-center">
    <h1>TodoList</h1>
  </header>
  {#each list as item (item.id)}
    <div>
      <h4>{item.title}</h4>
    </div>
  {/each}
</Container>
