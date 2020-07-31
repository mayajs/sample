<script>
  import { Container, Col, Row, Button } from "sveltestrap";
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
    <Row>
      <Col xs={{ size: 1, offset: 1 }}>
        <input type="checkbox" />
      </Col>
      <Col>
        <h4>{item.title}</h4>
      </Col>
      <Col xs={{ size: 1, offset: 1 }} style="padding:.2rem">
        <Button class="btn-danger">X</Button>
      </Col>
    </Row>
  {/each}
</Container>
