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
import SelectTrainer from "./pages/SelectTrainer/SelectTrainer";
import Thnx from "./pages/thnx/Thnx";
import EditProfile from "./pages/EditProfile/EditProfile";
import ReviewPage from "./pages/Review/ReviewPage";
// import ReviewItem from "./pages/Review/ReviewItem";
import { fetchCurrentUser } from "./thunks/me";
import CoachDetails from "./pages/CoachDetails/CoachDetails";
import CoachHome from "./pages/CoachHome";
import FreeUserHomePage from "./pages/FreeUserHomePage/FreeUserHomePage";
import NotFound from "./pages/NotFound/NotFound";

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
  { path: "thnx/:id", element: <Thnx /> },
  { path: "editProfile", element: <EditProfile /> },
  { path: "thnx", element: <Thnx /> },
  { path: "coachDetails/:coachId", element: <CoachDetails /> },
  { path: "review", element: <ReviewPage /> },
  { path: "coach-home", element: <CoachHome /> },
  { path: "freeUserHomePage", element: <FreeUserHomePage /> },
  { path: "*", element: <NotFound /> },
]);

// BMI => w/h2
// calories => (66.5+13.75*w+5.003*h-6.755*age)* 1.3||1.4||1.6

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
