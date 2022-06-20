import React from "react";

function TodoTask({ index, todo, deleteTask }) {
  return (
    <div className="flex justify-between w-3/4 mt-2 bg-[#FFC7C7] sm:w-2/3 lg:w-1/3">
      <span className="px-8 py-3 break-all	">{todo.task}</span>
      <button
        className="px-3 py-2 bg-[#AAAAAA] duration-150 hover:bg-[#b01e15]"
        onClick={() => deleteTask(index)}
      >
        X
      </button>
    </div>
  );
}

export default TodoTask;
