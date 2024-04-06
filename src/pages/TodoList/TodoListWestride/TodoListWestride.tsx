import { useEffect, useState } from "react";
import React from "react";
import "./TodoListWestride.css";
import Layout from "../../../layout/Layout";
const TodoListWestride = () => {
  interface item {
    id: number;
    name: string;
    lastName: string;
    status: number;
  }

  const [todos, setTodos] = useState<item[]>([]);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [editName, setEditName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [todoSearch, setTodoSearch] = useState("");
  const [todoSearchList, setTodoSearchList] = useState<item[]>([]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  useEffect(() => {
    console.log(editName);
  }, [editName]);

  useEffect(() => {
    // console.log(todoSearch);
    if (todoSearch !== "") {
      setTodoSearchList(
        todos.filter((todo) => {
          return todo.name.includes(todoSearch);
        })
      );
    } else {
      setTodoSearchList([]);
    }

    console.log(todoSearchList);
  }, [todoSearch]);

  const deletePerson = (index: number) => {
    console.log(index);
    setTodos(
      todos.filter((todo) => {
        return todo.id !== index;
      })
    );
  };

  const editPerson = (index: number) => {
    setEditName(todos[index].name);
    setEditLastName(todos[index].lastName);
    setTodos(
      todos.map((todo) => {
        if (todo.id === index) {
          return { ...todo, status: 8 };
        }
        return todo;
      })
    );
  };

  const saveEditPerson = (index: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === index) {
          return { ...todo, name: editName, status: 1 };
        }
        return todo;
      })
    );

    setEditName("");
    setEditLastName("");
  };

  const cancelEditPerson = (index: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === index) {
          return { ...todo, status: 1 };
        }
        return todo;
      })
    );
  };

  const addPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;
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
  return (
    <>
      <Layout>
        <div>
          <h2>We Stride version</h2>
          <p> adjust some point</p>
        </div>
        <form action="" onSubmit={addPerson}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        <ul className="todo-list">
          {todos.length !== 0 ? <span>Todo list</span> : <></>}
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {todo.status === 1 && (
                <>
                  <p>Name: {todo.name}</p>
                  <p>Last Name: {todo.lastName}</p>
                  <button
                    onClick={() => {
                      return editPerson(todo.id);
                    }}
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      return deletePerson(todo.id);
                    }}
                  >
                    delete
                  </button>
                </>
              )}

              {todo.status === 8 && (
                <>
                  <input
                    type="text"
                    placeholder="Edit name"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Edit Last Name"
                    value={editLastName}
                    onChange={(e) => setEditLastName(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      return saveEditPerson(todo.id);
                    }}
                  >
                    save
                  </button>
                  <button
                    onClick={() => {
                      return cancelEditPerson(todo.id);
                    }}
                  >
                    cancel
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        <div className="filter-todolist">
          <span>Filter Todo List</span>
          <div className="search-person">
            <label htmlFor="todoSearch">Search Person by Name</label>
            <input
              id="todoSearch"
              type="text"
              value={todoSearch}
              onChange={(e) => {
                setTodoSearch(e.target.value);
              }}
            />
          </div>

          {/* {todoSearchList.length !==0 && } */}
          <ul className="search-person-list">
            {todoSearchList.map((searchList, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {searchList.status === 1 && (
                  <>
                    <p>Name: {searchList.name}</p>
                    <p>Last Name: {searchList.lastName}</p>
                    <button
                      onClick={() => {
                        return editPerson(searchList.id);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        return deletePerson(searchList.id);
                      }}
                    >
                      delete
                    </button>
                  </>
                )}

                {searchList.status === 8 && (
                  <>
                    <input
                      type="text"
                      placeholder="Edit name"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="Edit Last Name"
                      value={editLastName}
                      onChange={(e) => setEditLastName(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        return saveEditPerson(searchList.id);
                      }}
                    >
                      save
                    </button>
                    <button
                      onClick={() => {
                        return cancelEditPerson(searchList.id);
                      }}
                    >
                      cancel
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default TodoListWestride;
