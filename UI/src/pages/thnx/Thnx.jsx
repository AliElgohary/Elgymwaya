import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";

const Thnx = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    transactionId: "",
    amountCents: 0,
    paymentStatus: "processing",
  });
  const { id } = useParams();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const transactionId = queryParams.get("id");
    const amountCents = queryParams.get("amount_cents");
    const paymentStatus =
      queryParams.get("success") === "true" ? "successful" : "failed";

    setPaymentDetails({
      transactionId,
      amountCents: amountCents ? parseInt(amountCents) / 100 : 0,
    });

    const timeoutId = setTimeout(() => {
      navigate("/userHome");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [location.search, navigate, id]);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="text-center">
              <>
                <h1 className="fw-bold my-2">
                  Payment Successful <GiCheckMark size={50} />
                </h1>
                <h4 className="my-3">
                  Your payment has been processed successfully.
                </h4>
              </>

              <h5 className="my-3">Thank you for your transaction!</h5>
              <p>Transaction ID: {paymentDetails.transactionId}</p>
              <p>Amount: EGP {paymentDetails.amountCents.toFixed(2)}</p>
              <p>Redirecting to home page...</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Thnx;
