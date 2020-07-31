<script>
  import { Container, Col, Row, Button, InputGroup, Input, InputGroupAddon, Form, ListGroup, ListGroupItem } from "sveltestrap";
  import { getTodo, getTodoList, addTodo, removeTodo } from "./api.service.js";
  import { onMount } from "svelte";

  let title = "";
  let list = [];
  let todo = {};
  let isEdit = false;

  onMount(async () => {
    const result = await getTodoList();
    list = result;
  });

  function onSubmit(event) {
    event.preventDefault();
    addItem();
  }

  function onEdit(item) {
    todo = { ...item };
    title = item.title;
    isEdit = true;
    event.preventDefault();
  }

  async function onDelete(id) {
    const result = await removeTodo(id);
    list = list.filter((item) => item._id !== result._id);
  }

  async function addItem() {
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

<Container class="container mt-4 col-md-5">
  <header class="todo text-center">
    <h1>TodoList</h1>
  </header>
  <ListGroup>
    {#each list as item (item._id)}
      <ListGroupItem class="list-group-item d-flex justify-content-between align-items-center">
        <input type="checkbox" checked={item.completed} />
        <span class="flex-grow-1 ml-1">{item.title}</span>
        <Button class="btn btn-info mx-1" on:click={() => onEdit(item)}>
          <span class="fas fa-edit" />
        </Button>
        <Button color="btn btn-danger mx-1" on:click={() => onDelete(item._id)}>
          <span class="fas fa-trash" />
        </Button>
      </ListGroupItem>
    {:else}
      <Col class="text-center">
        <h4>There are no todo item to show...</h4>
      </Col>
    {/each}
  </ListGroup>
  <Form class="mt-2" on:submit={onSubmit}>
    <InputGroup>
      <Input type="text" bind:value={title} placeholder="Enter TODO here..." readonly={false} />
      <InputGroupAddon addonType="append">
        {#if isEdit}
          <Button disabled={title === ''} color="primary" type="submit " id="submit-btn">Update</Button>
        {:else}
          <Button disabled={title === ''} color="success" type="submit " id="submit-btn">Add</Button>
        {/if}
      </InputGroupAddon>
    </InputGroup>
  </Form>
</Container>
