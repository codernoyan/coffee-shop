import Root from "Layout/Root";
import AllMenus from "pages/AllMenus";
import Home from "pages/Home";
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
      }
    ]
  }
])