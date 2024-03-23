import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/selectors/userSelectors";
import { Spinner } from "react-bootstrap";
import NotFound from "../../pages/NotFound/NotFound";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingComponent = () => {
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner color="white" />
    </div>
  );
};
const WithCurrentUserRedirect = (WrappedComponent, validateRole) => {
  const WithCurrentUserRedirectComponent = (props) => {
    const currentUser = useSelector(getCurrentUser);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        if (!token) navigate("/login");
      }, 500);
      return () => clearTimeout(timer);
    }, []);

    if (!currentUser) return <LoadingComponent />;
    if (!validateRole(currentUser)) return <NotFound />;
    return <WrappedComponent {...props} />;
  };
  WithCurrentUserRedirectComponent.displayName =
    "WithCurrentUserRedirectComponent";
  return WithCurrentUserRedirectComponent;
};

export default WithCurrentUserRedirect;
