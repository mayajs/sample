<script>
  import { Container } from "sveltestrap";
  let list = [
    { title: "Sleeping", completed: false, id: 1 },
    { title: "Walking", completed: false, id: 2 },
    { title: "Eating", completed: false, id: 3 },
  ];
</script>

<style>

</style>

<Container>
  {#each list as item (item.id)}
    <div>
      <h4>{item.title}</h4>
    </div>
  {/each}
</Container>
