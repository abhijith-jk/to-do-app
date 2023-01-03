import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions/index.js";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState(todo.data);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todo._id, task));
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        textDecorationThickness: todo.done ? "2px" : "",
        color: todo.done ? "red" : "",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={task}
          className="edit-todo"
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      <span className="taskicon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <i className="fas fa-trash" />
      </span>
      <span
        className="taskicon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default Todo;
