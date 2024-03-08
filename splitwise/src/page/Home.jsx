import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Box,
  Input,
  useDisclosure,
  VStack,
  Container
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [nameOfGroup, setNameOfGroup] = useState("");
  const [groups, setGroups] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const createGroup = () => {
    try {
      const data = {
        id: uuid(),
        nameOfGroup: nameOfGroup,
      };
      localStorage.setItem("groups", JSON.stringify([...groups, data]));
      setGroups((prevGroups) => [...prevGroups, data]);
      onClose();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("groups");
    const parsedData = JSON.parse(data);
    setGroups(parsedData || []);
  }, []);

  const navigate = useNavigate()
  const navigateToSplitPage = (id) => {
    navigate(`/split-page/${id}`)
  }

  return (
    <>
      <VStack className="">
      <Container maxW='5xl' className="flex flex-col gap-2 mt-10">
        {groups.length > 0 ? (groups.map((data) => (
          <Box key={data.id} className=" bg-blue-500 p-2 text-white rounded-md" onClick={() => navigateToSplitPage(data.id)}>
            {data.nameOfGroup}
          </Box>
        ))) : (<p>No group exists</p>)}
        <Box className="mt-5 ">
          <Button className="" onClick={onOpen}>
            Split Bills
          </Button>
        </Box>
      </Container>
      </VStack>
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
            <Input
              type="text"
              placeholder="Name of the group"
              onChange={(e) => setNameOfGroup(e.target.value)}
            />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" ml={3} onClick={createGroup}>
              Create
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Home;
