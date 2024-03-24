/* eslint-disable react/prop-types */
import { Card, Badge } from "react-bootstrap";
import userPhoto from "../../assets/user.png";

const ClientCard = ({ client }) => {
  return (
    <Card>
      <Card.Img variant="top" src={client.profile_picture || userPhoto} />
      <Card.Body>
        <Card.Title>{client.full_name}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {client.email}
          <br />
          <strong>Phone Number:</strong> {client.phone_number}
          <br />
          <strong>Birth Date:</strong>{" "}
          {new Date(client.birth_date).toLocaleDateString()}
          <br />
          <strong>Age:</strong> {client.age}
          <br />
          <strong>Height:</strong> {client.height} cm
          <br />
          <strong>Weight:</strong> {client.weight} kg
          <br />
          <strong>Plan:</strong> {client.plan_id?.title}
          <br />
          <strong>Subscription Start Date:</strong>{" "}
          {new Date(client.subscription_date).toLocaleDateString()}
          <br />
          <strong>Subscription End Date:</strong>{" "}
          {new Date(client.subscription_end_date).toLocaleDateString()}
          <br />
          <strong>Subscription Months:</strong> {client.subscription_months}
          <br />
          <strong>Role:</strong>{" "}
          <Badge variant="secondary">{client.role}</Badge>
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClientCard;
