/* eslint-disable react/prop-types */
import { Card, Badge } from "react-bootstrap";
import userPhoto from "../../assets/user.png";

const ClientCard = ({ client }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        style={{ height: "10rem", width: "30rem", objectFit: "contain" }}
        src={client.profile_picture || userPhoto}
      />
      <Card.Body>
        <Card.Title className="text-primary text-center fw-bold py-2 fs-2">
          {client.full_name}
        </Card.Title>
        <Card.Text>
          <div className="py-1">
            <span className="fw-bolder fs-5">Email:</span>{" "}
            <span>{client.email}</span>
          </div>
          <div className="py-1">
            <span className="fw-bolder fs-5">Phone Number: </span>{" "}
            {client.phone_number}
          </div>
          <div className="py-1">
            <span className="fw-bolder fs-5">Age: </span> {client.age}
          </div>
          <div className="py-1">
            <span className="fw-bolder fs-5">Height: </span>
            <Badge variant="secondary"> {client.height} cm</Badge>
          </div>
          <div className="py-1">
            <span className="fw-bolder fs-5">Weight: </span>
            <Badge variant="secondary"> {client.weight} kg</Badge>
          </div>
          <div className="py-1">
            <span className="fw-bolder fs-5">Plan:</span>{" "}
            {client.plan_id?.title}
          </div>
          <div className="py-1">
            <span className="fw-bolder fs-5">Subscription Start Date:</span>{" "}
            {new Date(client.subscription_date).toLocaleDateString()}
          </div>
          <div className="py-1">
            <span className="fw-bolder fs-5">Subscription End Date:</span>{" "}
            {new Date(client.subscription_end_date).toLocaleDateString()}
          </div>
          <div className="py-1">
            <span className="fw-bolder fs-5">Subscription Months:</span>{" "}
            {client.subscription_months}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClientCard;
