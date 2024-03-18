import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";

const Thnx = () => {
  const navigateTo = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigateTo("/userHome");
    }, 5000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [history]);

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
