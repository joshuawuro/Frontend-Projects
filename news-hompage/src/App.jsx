import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import New from "./components/New";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "new",
        element: <New />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
