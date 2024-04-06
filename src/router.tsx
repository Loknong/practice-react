// src/router.js
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import TodoListPrototype from "./pages/TodoList/TodoListPrototype/TodoListPrototype";
// import TodoListWestride from "./pages/TodoList/TodoListWestride/TodoListWestride";
// import TodoListV1 from "./pages/TodoList/TodoListV1/TodoListV1";
import { todoRoutes } from "./routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  // {
  //   path: "/todolist-v1",
  //   element: <TodoListV1 />,
  // },

  // {
  //   path: "/todolist-v0",
  //   element: <TodoListPrototype />,
  // },
  // {
  //   path: "/todolist-v0-we",
  //   element: <TodoListWestride />,
  // },
  ...todoRoutes,
  { path: "/login", element: <LoginPage /> },
]);

export default router;
