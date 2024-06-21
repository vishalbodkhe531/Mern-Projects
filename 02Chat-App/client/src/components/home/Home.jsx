import React from "react";
import SideBar from "../sidebar/SideBar";
import MessagesContainer from "../messages/MessagesContainer";

function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="bg-white p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 sm:h-[450px] md:h-[590px] w-[25rem] overflow-y-scroll">
          <SideBar />
        </div>
        <div className="bg-white p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 sm:h-[450px] md:h-[590px] w-[30rem] overflow-y-scroll">
          <MessagesContainer />
        </div>
      </div>
    </>
  );
}

export default Home;
