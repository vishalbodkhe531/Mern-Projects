import { Box, Button, Container, Image, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  //   const dispatchData = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleUpdateBtn = () => {};

  return (
    <>
      <Container
        backgroundImage={
          "https://i.pinimg.com/originals/75/66/e8/7566e8e3fb0767032f991e1d53e52438.jpg"
        }
        h={"100vh"}
        maxW={"container-xl"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        pos={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={["100%", "30rem"]} filter={"blur"}>
          <Box display={"flex"} justifyContent={"center"} w={"full"}>
            <Image
              src={currentUser.profilePic}
              rounded={"full"}
              border={"2px solid white"}
            ></Image>
          </Box>
          <form>
            <VStack>
              <Input
                mt={"6"}
                readOnly
                border={"1px solid white"}
                value={currentUser.name}
              />
              <Input
                mt={"6"}
                readOnly
                border={"1px solid white"}
                value={currentUser.email}
              />

              {/* <Link to={"/updateProfile"}> */}
              <Button
                colorScheme="green"
                w={"full"}
                mt={"8"}
                type="submit"
                // onClick={handleUpdateBtn}
              >
                UPDATE PROFILE
              </Button>
              {/* </Link> */}
            </VStack>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
