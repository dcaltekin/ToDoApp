import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
function TodoTitle(props) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("Yapılacaklar");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("Yapılacaklar", JSON.stringify(todos));
  }, [todos]);

  function createTask(task) {
    const newTodos = [...todos, { task }];

    setTodos(newTodos);

    console.log(newTodos);
  }

  function deleteTask(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="border-4 mr-8 ml-8 mt-12 mb-8 py-8 rounded-lg">
      <h1 className="text-5xl font-bold uppercase text-center text-white mt-16">
        Todo List App
      </h1>
      <h4 className="text-2xl font-light mt-6 text-white mb-16 text-center ">
        <span className="text-[#7C3E66]">Doğukan Çaltekin</span>
      </h4>
      <TodoForm
        props={props}
        todos={[...todos]}
        createTask={createTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TodoTitle;
