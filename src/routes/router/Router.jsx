import Root from "Layout/Root";
import AllMenus from "pages/AllMenus";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/all-menus',
        element: <AllMenus />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])