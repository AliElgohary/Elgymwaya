import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 vh-100">
      <div className="px-4 py-lg-5">
        <div className="row gap-4">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center py-5">
            <h1 className="font-weight-bold text-primary display-1">404</h1>
            <p className="mb-2 text-2xl font-weight-bold text-center text-gray-800 md-text-3xl">
              <span className="text-danger">Oops!</span> Page not found
            </p>
            <p className="mb-4 text-center text-gray-500">
              The page you’re looking for doesn’t exist.
            </p>
            <Link to="/" className="btn btn-primary btn-lg" role="button">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
