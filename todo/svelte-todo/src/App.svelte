<script>
  import { Container, Col, Row, Button, InputGroup, Input, InputGroupAddon, Form } from "sveltestrap";

  let title = "";
  let list = [
    { title: "Sleeping", completed: false, id: 1 },
    { title: "Walking", completed: false, id: 2 },
    { title: "Eating", completed: false, id: 3 },
  ];

  function onSubmit(event) {
    event.preventDefault();
    console.log("Add", title);
  }

  function onDelete(id) {
    console.log("Delete", id);
  }
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
        <Button color="danger" on:click={() => onDelete(item.id)}>X</Button>
      </Col>
    </Row>
  {/each}
  <Form class="px-3 mt-2" on:submit={onSubmit}>
    <InputGroup>
      <Input type="text" bind:value={title} placeholder="Enter TODO here..." readonly={false} />
      <InputGroupAddon addonType="append">
        <Button color="success" type="submit " id="submit-btn">Add</Button>
      </InputGroupAddon>
    </InputGroup>
  </Form>
</Container>
