import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import checkedPNG from "../assets/right.png";

function Task({ todoData }) {
  const [updateTask, setUpdateTask] = useState(false);

  const [todoMsg, setTodoMsg] = useState(todoData.title);

  // Delete-Task
  const handleDelete = async () => {
    const data = await fetch(`/api/todo/delete/${todoData._id}`);
  };

  // console.log(todoData);
  // check circle
  const [isCheck, setIsCheck] = useState(todoData.isComplited);
  const handleCheckCircle = async () => {
    setIsCheck(true);
    const data = await fetch(`/api/todo/toogle-task/${todoData._id}`);
    const result = await data.json();
    console.log(result);
  };

  // Update-Task
  const handleEdit = async () => {
    setUpdateTask(true);
    if (todoMsg) {
      const data = await fetch(`/api/todo/update/${todoData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ title: todoMsg }),
      });
      const result = await data.json();
    }

    if (updateTask) {
      setUpdateTask(false);
    }
  };

  return (
    <>
      <div className="sm:w-[50%] w-[90%] mt-3">
        <div
          className={`flex border text-white border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-lg shadow-white/70 duration-300  mt-5 items-center`}
        >
          <div className="block cursor-pointer relative">
            <FaRegCircle onClick={handleCheckCircle} />
            {isCheck ? (
              <img
                src={checkedPNG}
                className="h-6 absolute -top-[7px] -right-0.5"
                onClick={() => setIsCheck(false)}
              />
            ) : null}
          </div>
          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg border-transparent 
                    `}
            readOnly={!updateTask}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
          {/* Edit, Save Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={handleEdit}
            disabled={isCheck}
          >
            {updateTask ? "📁" : "✏️"}
          </button>
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={handleDelete}
          >
            ❌
          </button>
        </div>
      </div>
    </>
  );
}

export default Task;
