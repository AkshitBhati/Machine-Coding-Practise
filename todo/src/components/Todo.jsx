import {
  Box,
  Button,
  Container,
  Input,
  ListIcon,
  ListItem,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  // Function for creating or updating todo
  const createTodo = () => {
    if (editIndex === -1) {
      setTodoList((todos) => [...todos, todoText, ]);
    } else {
      const updatedTodos = [...todoList];
      updatedTodos[editIndex] = todoText;
      setTodoList(updatedTodos);
      setEditIndex(-1);
    }
    setTodoText("");
  };

  const editText = (text, index) => {
    setEditIndex(index);
    setTodoText(text);
  };

  //function for deleting todo
  const deleteTodo = (todo, index) => {
    // const updatedList = [...todoList]
    // updatedList.splice(index, 1)
    // setTodoList(updatedList)

    const updatedTodo = todoList.filter((_, i ) => i !== index)
    setTodoList(updatedTodo)
  }

  return (
    <Container className="flex flex-col mt-10 gap-5">
      <Box className="flex gap-5">
        <Input
          placeholder="Enter Text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <Button onClick={createTodo}>
          {editIndex === -1 ? "Create" : "Update"}
        </Button>
        {editIndex !== -1 && <Button>Cancel</Button>}
      </Box>
      <Box>
        <UnorderedList>
          {todoList.length > 0 ? (
            todoList.map((todo, index) => (
              <ListItem
                className="flex gap-5 items-center"
                key={index}
              >
                {todo}
                <Box>
                <Tooltip label="Edit">
                  <ListIcon
                    onClick={() => editText(todo, index)}
                    cursor="pointer"
                  >
                    <FaRegEdit className="text-2xl" />
                  </ListIcon>
                </Tooltip>

                <Tooltip label="Delete">
                  <ListIcon cursor="pointer" onClick={() => deleteTodo(todo, index)}>
                    <MdOutlineDelete className="text-2xl"/>
                  </ListIcon>
                </Tooltip>
                </Box>
              </ListItem>
            ))
          ) : (
            <></>
          )}
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Todo;
