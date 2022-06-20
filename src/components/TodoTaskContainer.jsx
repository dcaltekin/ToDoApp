import React from "react";
import TodoTask from "./TodoTask";

function TodoTaskContainer({ todos, deleteTask }) {
  return (
    <div className="flex items-center flex-col mt-5">
      {todos.map((todo, index) => {
        return (
          <TodoTask
            key={index}
            index={index}
            todo={todo}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

export default TodoTaskContainer;
