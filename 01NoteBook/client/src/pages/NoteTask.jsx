import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CartData from "../components/CartData";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import Cart from "./Cart";

function NoteTask() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { selectedCardArr, pinArr } = useSelector((state) => state.user);

  const [formdata, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleModelSubmite = async (e) => {
    e.preventDefault();

    const data = await fetch(`/api/task/create-task`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formdata),
    });

    const result = await data.json();

    console.log(result);
  };

  const handleSelectedDeleteBtn = async () => {
    const data = await fetch(`/api/task/selected-task-delete`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(selectedCardArr),
    });

    const result = await data.json();

    console.log(result);
  };

  const [searchInput, setSearchInput] = useState("");

  const [isSearchInput, setIsSearchInput] = useState(false);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    // if (searchInput === "") {
    //   setIsSearchInput(false);
    // }
    // console.log(searchInput);
  };

  // find input

  const [searchInputArr, setSearchInputArr] = useState([]);

  const handleFindSubmite = async (e) => {
    e.preventDefault();
    setIsSearchInput(true);
    const data = await fetch(`/api/task/search?title=${searchInput}`);
    const result = await data.json();
    // console.log(result);
    setSearchInputArr(result);
  };
  return (
    <>
      <Container
        h={"100vh"}
        maxW={"container-2xl"}
        backgroundImage={"https://wallpapercave.com/wp/wp7901310.jpg"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        opacity="0.5"
        // bg={"black"}
      >
        {" "}
      </Container>
      <Container
        pos={"absolute"}
        top={"20%"}
        left={"50%"}
        transform={"translate(-50%,-50%)"}
        display={"flex"}
        // bg={"red"}
        // alignItems={"center"}
        h={"30vh"}
        mt={"4em"}
        justifyContent={"center"}
      >
        <VStack>
          <Button
            onClick={onOpen}
            fontSize={"2rem"}
            zIndex={"overlay"}
            pos={"sticky"}
          >
            Create Task
          </Button>
          <Box w={"40rem"} mt={"5"}>
            <form onSubmit={handleFindSubmite}>
              <Box display={"flex"}>
                <Input
                  borderWidth={"2px"}
                  value={searchInput}
                  onChange={handleSearchInput}
                />
                <Button ml={"2"} type="submit">
                  Search
                </Button>
              </Box>
            </form>
          </Box>
        </VStack>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleModelSubmite}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="First name"
                    onChange={handleInputChange}
                    name="title"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Descriptione</FormLabel>
                  <Input
                    placeholder=""
                    h={"5rem"}
                    name="descriptione"
                    onChange={handleInputChange}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  type="submit"
                  // onClick={handleModelSubmite}
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Container>
      <Container
        pos={"absolute"}
        top={"40%"}
        left={"50%"}
        // bg={"green"}
        transform={"translate(-50%,-50%)"}
        display={"flex"}
        // alignItems={"center"}
        h={"30vh"}
        maxW={["conainer-xl", "container-2xl"]}
        mt={"4em"}
        justifyContent={"center"}
        m={["0", "10"]}
      >
        {/* Cart Components */}
        {
          isSearchInput ? (
            searchInputArr.map((cartItem) => (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                w={["90%", "80%"]}
                flexWrap={"wrap"}
                p={"0"}
              >
                <Cart
                  key={cartItem._id}
                  cartId={cartItem._id}
                  cartTitle={cartItem.title}
                  cartDesc={cartItem.descriptione}
                />
              </Box>
            ))
          ) : (
            <CartData />
          )
          // isSearchInput ? : <CartData />
        }

        <MdDeleteForever
          size={"2em"}
          onClick={handleSelectedDeleteBtn}
          cursor={"pointer"}
        />
      </Container>
    </>
  );
}

export default NoteTask;
