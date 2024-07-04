import React from "react";

function Home() {
  return (
    <>
      <div
        className="h-[100vh] bg-cover"
        style={{
          backgroundImage:
            "url(https://free4kwallpapers.com/uploads/originals/2023/01/19/tree-in-the-wind-wallpaper.jpg)",
        }}
      >
        <div className="h-full" style={{ background: "rgba(0,0,0,0.1)" }}>
          <div className="text-white sm:w-[20rem] w-[50%]  h-[90vh] flex items-center justify-center ml-[7rem] font-[cursive] tracking-wider text-[1.10rem]">
            A to-do list is just a list of things you have to-do. That means
            basically anything and everything can be on your to-do list—but just
            because you've written your to-dos down doesn't mean your to-do list
            is actually useful. Effectively tracking when your work is due can
            help you prioritize and get great work done.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
