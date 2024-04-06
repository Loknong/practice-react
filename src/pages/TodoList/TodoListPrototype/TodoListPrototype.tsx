import React from "react";
import { useState } from "react";
import "./TodoListPrototype.css";
import Layout from "../../../layout/Layout";
interface item {
  id: number;
  name: string;
  lastName: string;
  status: number;
}
interface clickFunction {
  (todo: item, index: number): void;
}
export default function TodoListPrototype() {
  const [todos, setTodos] = useState<item[]>([]);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  // const newId = todos.length === 0 ? 0 : Math.max(...todos.map(todo => todo.id)) + 1;
  const newId = todos.length === 0 ? 0 : todos.length;

  const addPerson = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodo: item = {
      id: newId,
      name: name,
      lastName: lastName,
      status: 1,
    };
    setTodos([...todos, newTodo]);
    setName("");
    setLastName("");
  };

  const editPerson = (todo: item, index: number) => {
    console.log(index);

    setTodos(todos.filter((todo) => todo.id !== index));
  };

  const vaa = (arr: item[], clickFunction: clickFunction) => {
    return arr.map((todo: item, index: number) => {
      return (
        <li key={todo.id}>
          ชื่อ: {todo.name} สกุล: {todo.lastName} ID:{todo.id}
          <button onClick={() => clickFunction(arr[index], todo.id)}>
            Click
          </button>
        </li>
      );
    });
  };
  return (
    <Layout>
      <div>
        App todo list
        <ul>{vaa(todos, editPerson)}</ul>
        <form action="">
          <label htmlFor="">ชื่อ</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">นามสกุล</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <button onClick={addPerson}>Add todo</button>
        </form>
      </div>
    </Layout>
  );
}
