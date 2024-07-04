import React, { useEffect, useState } from "react";
import Task from "../pages/Task";
import { API } from "../main";

function Todo() {
  const [todoItem, setTodoItem] = useState([]);

  useEffect(() => {
    const data = fetch(`${API}/api/todo/alltask`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setTodoItem(res))
      .catch((error) =>
        console.log(`error while display all tasks : ${error}`)
      );
  }, [todoItem]);
  return (
    <>
      <div
        className="h-[90vh] bg-no-repeat bg-cover bg-blend-saturation font-[cursive]"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/thumb_back/fh260/background/20231211/pngtree-christmas-mosk-up-wish-list-on-purple-background-notebook-todo-list-image_15497115.jpg)",
          backgroundPosition: "center",
        }}
      >
        <div
          className="h-[100vh] overflow-y-auto"
          style={{
            background: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="h-10 text-center p-2 text-white text-2xl	mt-6">
            Todo messages
          </div>
          <div>
            <div className="text-white flex justify-center items-center flex-col">
              {todoItem.map((Item) => (
                <Task todoData={Item} key={Item._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
