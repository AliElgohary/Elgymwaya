import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
//for redux
import { Provider } from "react-redux";
import store from "./store/store.js";
//for react-tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD

=======
>>>>>>> e056e1bfb340dc186680caf5474c26406692ee07
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
  // </React.StrictMode>
);
