import TodoListPrototype from "../pages/TodoList/TodoListPrototype/TodoListPrototype";
import TodoListWestride from "../pages/TodoList/TodoListWestride/TodoListWestride";
import TodoListV1 from "../pages/TodoList/TodoListV1/TodoListV1";

const todoRoutes = [
  { path: "/todolist-v1", element: <TodoListV1 /> },
  { path: "/todolist-v0", element: <TodoListPrototype /> },
  { path: "/todolist-v0-we", element: <TodoListWestride /> },
];

export default todoRoutes;
