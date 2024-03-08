import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import LandingLayout from "./layouts/LandingLayout/LandingLayout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CaloriesCalculator from "./pages/CaloriesCalculator/CaloriesCalculator";
import BmiCalc from "./pages/BMICalc/BmiCalc";

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
  { path: "bmiCalc", element: <BmiCalc /> },
]);
// BMI => w/h2 
// calories => (66.5+13.75*w+5.003*h-6.755*age)* 1.3||1.4||1.6

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;

