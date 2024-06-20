import React, { useState } from "react";

function Task({ todoData }) {
  const [updateTask, setUpdateTask] = useState(false);

  const [todoMsg, setTodoMsg] = useState(todoData.title);

  // Delete-Task
  const handleDelete = async () => {
    const data = await fetch(`/api/todo/delete/${todoData._id}`);
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
          className={`flex border text-white border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-lg shadow-white/70 duration-300  mt-5 `}
        >
          <input
            type="checkbox"
            className="cursor-pointer"
            // checked={todo.isCompolited}
          />
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
