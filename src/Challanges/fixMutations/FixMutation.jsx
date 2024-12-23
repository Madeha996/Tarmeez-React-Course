import { useState } from "react";
import AddTodo from "./AddToDo.jsx";
import TaskList from "./TaskList.jsx";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    const newTodos = [...todos];
    newTodos.push({
      id: nextId++,
      title: title,
      done: false,
    });
    setTodos(newTodos);
  }

  function handleChangeTodo(nextTodo) {
    const newTodos = todos.map((todo) => {
      if (todo.id === nextTodo.id) {
        return { ...todo, title: nextTodo.title, done: nextTodo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function handleDeleteTodo(todoId) {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
