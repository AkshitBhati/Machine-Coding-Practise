import {
  Box,
  Button,
  Container,
  Input,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState("");

  //function for creating todo
  const createTodo = () => {
    setTodoList((todo) => [todoText, ...todo]);
    setTodoText("");
  };
  
  return (
    <Container className="flex flex-col mt-10 gap-5">
      <Box className="flex gap-5">
        <Input
          placeholder="Enter Text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <Button onClick={createTodo}>Create</Button>
      </Box>
      <Box>
        <UnorderedList>
          {todoList.length > 0 ?(
          todoList.map((todo) => (
            <ListItem>{todo} <ListIcon></ListIcon></ListItem>
          ))) : (<></>)}
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Todo;
