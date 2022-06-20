import { useState } from "react";
import TodoTaskContainer from "./TodoTaskContainer";
function TodoForm({ props, todos, createTask, deleteTask }) {
  const [value, setValue] = useState("");
  function Click(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
    createTask(value);
    setValue("");
  }
  return (
    <>
      <form onSubmit={Click}>
        <div className="flex justify-center">
          <input
            className="w-2/4 px-5 py-1.5 text-[#222222] text-left sm:w-72"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            className="px-8 py-2 bg-[#C70A80] duration-150 cursor-pointer hover:bg-[#0081e7]"
            type="submit"
            value="Ekle"
          />
        </div>
        <TodoTaskContainer
          props={props}
          todos={todos}
          deleteTask={deleteTask}
        />
      </form>
    </>
  );
}

export default TodoForm;
