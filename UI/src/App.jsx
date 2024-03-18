import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import LandingLayout from "./layouts/LandingLayout/LandingLayout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CaloriesCalculator from "./pages/CaloriesCalculator/CaloriesCalculator";
import BmiCalc from "./pages/BMICalc/BmiCalc";
import Plans from "./pages/Plans/Plans";
import SubscriptionMonths from "./pages/SubscriptionMonths/SubscriptionMonths";
import AllTrainers from "./pages/AllTrainers/AllTrainers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./thunks/users";
import SelectTrainer from "./pages/SelectTrainer/SelectTrainer";
import Thnx from "./pages/thnx/Thnx";
import EditProfile from "./pages/EditProfile/EditProfile";

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
  { path: "plans", element: <Plans /> },
  { path: "subscriptionMonths/:id", element: <SubscriptionMonths /> },
  { path: "allTrainers", element: <AllTrainers /> },
  { path: "selectTrainer", element: <SelectTrainer /> },
<<<<<<< HEAD
  { path: "thnx/:id", element: <Thnx /> },
  { path: "editProfile", element: <EditProfile /> },
=======
  { path: "thnx", element: <Thnx /> },
>>>>>>> 401107e91450ea964eb531a71d890cfbf45802f7
]);

// BMI => w/h2
// calories => (66.5+13.75*w+5.003*h-6.755*age)* 1.3||1.4||1.6

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
