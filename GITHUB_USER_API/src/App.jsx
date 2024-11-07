import Navbar from "./components/common/Navbar";

const {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} = require("react-router-dom");

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
    root: "/",
    element: <Root />,
    children: {},
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
