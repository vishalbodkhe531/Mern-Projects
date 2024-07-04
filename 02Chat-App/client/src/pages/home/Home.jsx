import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessagesContainer from "../../components/messages/MessagesContainer";
import { useAuthContext } from "../../context/AuthContext";

function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="bg-white p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 sm:h-[450px] md:h-[590px] w-[25rem] ">
          <SideBar />
        </div>
        <div className="bg-white p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 sm:h-[450px] md:h-[590px] w-[33rem]">
          <MessagesContainer />
        </div>
      </div>
    </>
  );
}

export default Home;
