<script>
  import { Container, Col, Row, Button, InputGroup, Input, InputGroupAddon, Form } from "sveltestrap";
  import { getTodo, getTodoList, addTodo, removeTodo } from "./api.service.js";
  import { onMount } from "svelte";

  let title = "";
  let list = [];

  onMount(async () => {
    const result = await getTodoList();
    list = result;
  });

  function onSubmit(event) {
    event.preventDefault();
    todoList();
  }

  async function onDelete(id) {
    const result = await removeTodo(id);
    list = list.filter((item) => item._id !== result._id);
  }

  async function todoList() {
    const result = await addTodo({ title, completed: false });
    title = "";
    list = [...list, result];
  }
</script>

<style>
  .todo {
    background-color: #333;
    color: #fff;
    text-align: "center";
    padding: 10px;
    margin: 1rem 0;
  }
</style>

<Container>
  <header class="todo text-center">
    <h1>TodoList</h1>
  </header>
  {#each list as item (item._id)}
    <Row>
      <Col xs={{ size: 1 }} class="ml-3">
        <input type="checkbox" checked={item.completed} />
      </Col>
      <Col>
        <h4>{item.title}</h4>
      </Col>
      <Col xs={{ size: 1, offset: 1 }} style="padding:.2rem">
        <Button color="danger" on:click={() => onDelete(item._id)}>X</Button>
      </Col>
    </Row>
  {:else}
    <Col class="text-center">
      <h4>There are no todo item to show...</h4>
    </Col>
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
