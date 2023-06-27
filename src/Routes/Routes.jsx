import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
