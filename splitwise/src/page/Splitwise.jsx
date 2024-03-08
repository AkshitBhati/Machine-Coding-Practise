import React, { useState, useEffect } from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Box,
  UnorderedList,
  ListItem,
  Checkbox
} from "@chakra-ui/react";
import { users } from "../data";


const Splitwise = () => {
    const [usersList, setUsersList] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  useEffect(() => {
    const data = localStorage.getItem("groups")
    const parsedData = JSON.parse(data)

  }, [])
  return (
    <>
      <Box className="p-2">
        <Button onClick={onOpen} className="mt-5">
          Add Users
        </Button>
      </Box>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Create group</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <UnorderedList styleType="none">
                {users.map((user) => (
                    <ListItem>
                        <Checkbox>
                        {user.name}
                        </Checkbox>
                        </ListItem>
                ))}
                </UnorderedList>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" ml={3}>
              Create
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Splitwise;
