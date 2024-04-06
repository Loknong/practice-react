import { useState } from "react";
import "./TodoListV1.css";
import Layout from "../../../layout/Layout";
const TodoListV1 = () => {
  const [todos] = useState([
    { id: 1, title: "test", detail: "asdasdasd" },
  ]);
  return (
    <Layout>
      <div className="todolist-v1">
        <span>Todo list V1</span>
        <form action="">
          <div>
            <label htmlFor="">Todo Topic</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Todo Detail</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">Complete Date</label>
            <input type="datetime-local" />
          </div>
        </form>

        <div>
          <ul>
            {todos.map((todo) => {
              return (
                <div>
                  <li>Title: {todo.title}</li>
                  <li>Detail: {todo.detail}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default TodoListV1;
