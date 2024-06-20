import { Box, Container, HStack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Cart from "../pages/Cart";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { pinCard } from "../app/features/userSlice";

function CartData() {
  const [allTaskData, setAllTaskData] = useState([]);

  useEffect(() => {
    const data = fetch(`/api/task/allTasks`)
      .then((res) => res.json())
      .then((res) => setAllTaskData(res));
  }, [allTaskData]);

  // console.log(allTaskData);

  const dispatchData = useDispatch();

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={["90%", "80%"]}
      flexWrap={"wrap"}
      p={"0"}
    >
      <Container maxW={"container-2xl"}>
        {/* <HStack> */}
        <HStack
          w={"full"}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {allTaskData.map((cartItem) => {
            if (cartItem.isPinTask) {
              return (
                <Cart
                  key={cartItem._id}
                  cartId={cartItem._id}
                  cartTitle={cartItem.title}
                  cartDesc={cartItem.descriptione}
                />
              );
            }
          })}
        </HStack>
        <HStack
          w={"full"}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {allTaskData.map((cartItem) => {
            if (!cartItem.isPinTask) {
              return (
                <Cart
                  key={cartItem._id}
                  cartId={cartItem._id}
                  cartTitle={cartItem.title}
                  cartDesc={cartItem.descriptione}
                />
              );
            }
          })}
        </HStack>
        {/* </HStack> */}
      </Container>
    </Box>
  );
}

export default CartData;
