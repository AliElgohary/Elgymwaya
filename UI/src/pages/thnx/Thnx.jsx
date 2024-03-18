import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";

const Thnx = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  useEffect(() => {
    // Parse the query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const paymentStatus = queryParams.get("success");
    const transactionId = queryParams.get("id");

    // Example: redirect to /userHome after 5 seconds
    if (paymentStatus === "true" || paymentStatus === "false") {
      // Payment successful, handle accordingly
      // For example, update user's transaction history, show success message, etc.
      console.log("Payment successful. Transaction ID: ", transactionId);
      const timeoutId = setTimeout(() => {
        navigateTo("/userHome");
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [location.search, navigateTo]);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="text-center">
              <h1 className="fw-bold my-2">
                Payment Successful <GiCheckMark size={50} />
              </h1>
              <h4 className="my-3">
                Your payment has been processed successfully.
              </h4>
              <h5 className="my-3">Thank you for your purchase!</h5>
              <p>Redirecting to home page...</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Thnx;
