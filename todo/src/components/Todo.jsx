import {
  Box,
  Container,
  Input,
  ListIcon,
  ListItem,
  Tooltip,
  UnorderedList,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  // For modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  // Function for creating or updating todo
  const createTodo = () => {
    if (editIndex === -1) {
      setTodoList((todos) => [...todos, todoText]);
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

  // Function for deleting todo
  const deleteTodo = (index) => {
    onOpen();
    // Store the index in state for later deletion
    setEditIndex(index);
  };

  // Function to handle deletion after confirmation
  const confirmDelete = () => {
    const updatedTodo = todoList.filter((_, i) => i !== editIndex);
    setTodoList(updatedTodo);
    // Clear the edit index after deletion
    setEditIndex(-1);
    // Close the modal
    onClose();
  };

  const cancelHandler = () => {
    setEditIndex(-1)
    setTodoText('')
  }

  return (
    <>
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
          {editIndex !== -1 && <Button onClick={cancelHandler}>Cancel</Button>}
        </Box>
        <Box>
          <UnorderedList>
            {todoList.length > 0 ? (
              todoList.map((todo, index) => (
                <ListItem className="flex gap-5 items-center" key={index}>
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
                      <ListIcon
                        cursor="pointer"
                        onClick={() => deleteTodo(index)}
                      >
                        <MdOutlineDelete className="text-2xl" />
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

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Delete Todo?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete the todo?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={confirmDelete}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Todo;
