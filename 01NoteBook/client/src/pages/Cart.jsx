import React, { useState } from "react";
import { LuPin } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import checkPng from "../assets/right.png";
import { useDispatch } from "react-redux";
import { IoMdMore } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { LuPinOff } from "react-icons/lu";
import { removeSelecteCard, selectedCardArr } from "../app/features/userSlice";

function Cart({ cartId, cartTitle, cartDesc }) {
  const dispatchData = useDispatch();

  // console.log(cartId);
  const handleDeleteBtn = async () => {
    const data = await fetch(`api/task/delete-task/${cartId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(cartId),
    });

    const result = await data.json();
    console.log(result);
  };

  const handlePINBtn = async () => {
    setIsActivePin(true);
    const data = await fetch(`api/task/pin-task/${cartId}`);

    const result = await data.json();
    console.log(result);
  };

  const [checkBg, setCheckBg] = useState(false);

  const [chekedArr, setchekedArr] = useState([]);

  const [isActicePin, setIsActivePin] = useState(false);

  const [openOption, SetOpenOption] = useState(false);

  const handleCheckBtn = async () => {
    setCheckBg(true);
    setchekedArr(cartId);
    dispatchData(selectedCardArr(cartId));
    if (checkBg) {
      setCheckBg(false);
      dispatchData(removeSelecteCard(cartId));
    }
  };

  // MODEL
  const { isOpen, onClose, onOpen } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [formTitle, setFormTitle] = useState(cartTitle);
  const [formDesc, setFormDesc] = useState(cartDesc);

  const handleModelSubmite = async (e) => {
    e.preventDefault();
    const data = await fetch(`api/task/update-task/${cartId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ title: formTitle, descriptione: formDesc }),
    });
  };

  return (
    <>
      <Card
        backdropFilter={"blur(16px)"}
        bg={"transparent"}
        w={["23rem", "20rem"]}
        // maxW={"container-2xl"}
        h={["14rem", "17rem"]}
        margin={"0 5rem 5rem 5rem"}
        // backgroundColor={"red"}
        p={"0"}
        // mt={"2"}
      >
        <CardHeader display={"flex"} justifyContent={"space-between"}>
          <Heading size="md" display={["none", "flex"]}>
            Client Report
          </Heading>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            mr={"10"}
            w={["10rem", "5rem"]}
            // bg={"green"}
          >
            <Box>
              {checkBg ? (
                <Image
                  src={checkPng}
                  h={"30px"}
                  pos={"absolute"}
                  top={"13px"}
                  left={"11.50rem"}
                  cursor={"pointer"}
                  onClick={handleCheckBtn}
                />
              ) : null}
              <Box display={"flex"}>
                <RiCheckboxBlankCircleLine
                  size={"1.50em"}
                  cursor={"pointer"}
                  onClick={handleCheckBtn}
                />
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              {openOption ? (
                <RxCross1
                  size={"1.20em"}
                  cursor={"pointer"}
                  onClick={() => SetOpenOption(false)}
                />
              ) : (
                <IoMdMore
                  size={"1.60em"}
                  onClick={() => SetOpenOption(true)}
                  cursor={"pointer"}
                />
              )}
            </Box>
          </Box>
        </CardHeader>

        <CardBody>
          <div style={openOption ? { display: "flex" } : { display: "none" }}>
            <Box pos={"absolute"} right={"1"} top={"3.50em"}>
              <Box display={"flex"} mt={"2"}>
                <Button size={"1"} onClick={handlePINBtn} mt={"1"}>
                  <LuPin size={"1.15em"} cursor={"pointer"} />
                  <Box ml={"2"}>PIN</Box>
                </Button>
              </Box>
              <Box display={"flex"} mt={"2"} onClick={handleDeleteBtn}>
                <Button size={"1"} mt={"1"}>
                  <MdDelete size={"1.20em"} cursor={"pointer"} />
                  <Box ml={"2"}>Delete</Box>
                </Button>
              </Box>

              <Box display={"flex"} mt={"2"}>
                <Button size={"1"} mt={"1"} ml={"1"} onClick={onOpen}>
                  <FaRegEdit size={"1.10em"} cursor={"pointer"} />
                  <Box ml={"2"}>Edit</Box>
                </Button>
              </Box>
            </Box>
          </div>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading
                fontSize={"1.20rem"}
                textTransform="uppercase"
                // w={"3.60rem"}
                // textAlign={"center"}
                borderRadius={"5px"}
              >
                Title
              </Heading>
              <Text pt="2" fontSize="1.10rem">
                {cartTitle}
              </Text>
            </Box>
            <Box>
              <Heading
                fontSize={"1.20rem"}
                textTransform="uppercase"
                // w={"9rem"}
                // textAlign={"center"}
                borderRadius={"5px"}
              >
                descriptione
              </Heading>
              <Text pt="2" fontSize="1.10rem">
                {cartDesc}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
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
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  name="title"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Descriptione</FormLabel>
                <Input
                  h={"5rem"}
                  value={formDesc}
                  name="descriptione"
                  onChange={(e) => setFormDesc(e.target.value)}
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
    </>
  );
}

export default Cart;
