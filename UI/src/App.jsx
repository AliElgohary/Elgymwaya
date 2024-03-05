import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import LandingLayout from "./layouts/LandingLayout/LandingLayout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CaloriesCalculator from "./pages/CaloriesCalculator/CaloriesCalculator";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LandingLayout />,
    children: [{ index: true, path: "", element: <Landing /> }],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "userHome", element: <UserHomePage /> },
  { path: "caloriesCalculator", element: <CaloriesCalculator /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
