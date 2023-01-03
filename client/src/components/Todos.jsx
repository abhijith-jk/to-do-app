import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions/index";
import { ALL_TODOS, INCOMPLETE_TODOS } from "../redux/actions/type";

import Todo from "./Todo";
import Tabs from "./Tabs";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const taskDisplay = () => {
    if (currentTab === ALL_TODOS) return todos;
    else if (currentTab === INCOMPLETE_TODOS)
      return todos.filter((todo) => !todo.done);
    else return todos.filter((todo) => todo.done);
  };

  const removeAllCompletedTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) dispatch(deleteTodo(_id));
    });
  };

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Tabs currentTab={currentTab} />
        {todos.some((todo) => todo.done) ? (
          <button onClick={removeAllCompletedTodos} className="clear">
            <i className="fas fa-trash"></i>
          </button>
        ) : null}
      </div>
      <ul>
        {taskDisplay().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </main>
  );
};

export default Todos;
