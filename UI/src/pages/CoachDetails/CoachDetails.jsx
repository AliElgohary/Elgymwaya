import { useDispatch, useSelector } from "react-redux";
import { fetchCoachById } from "./../../thunks/coach";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CoachDetails.css";
import { setCoach } from "./../../thunks/setCoach";

const CoachDetails = () => {
  const { coachId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coach = useSelector((state) => state.coach.coach?.coach);
  console.log(coach);

  useEffect(() => {
    dispatch(fetchCoachById(coachId));
  }, [dispatch, coachId]);

  const handleSelectedCoach = () => {
    dispatch(setCoach(coachId));
    navigate("/userHome");
  };

  return (
    <div className="container">
      {coach && (
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title">{coach.full_name}</h2>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={coach.profile_picture}
                  alt={coach.full_name}
                  className="img-fluid rounded mb-3"
                />
                <p>
                  <strong>Email:</strong> {coach.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {coach.phone_number}
                </p>
                <p>
                  <strong>Age:</strong> {coach.age}
                </p>
                <p>
                  <strong>Birth Date:</strong>{" "}
                  {new Date(coach.birth_date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Hired Date:</strong>{" "}
                  {new Date(coach.hiredDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Role:</strong> {coach.role}
                </p>
                <p>
                  <strong>Salary:</strong> {coach.salary}
                </p>
              </div>
              <div className="col-md-6">
                <h3>Feedbacks:</h3>
                {coach.feedbacks.length > 0 ? (
                  <ul className="list-unstyled">
                    {coach.feedbacks.map((feedback, index) => (
                      <li key={index}>
                        <p>
                          <strong>Rating:</strong> {feedback.rating}
                        </p>
                        <p>
                          <strong>Comment:</strong> {feedback.comment}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {new Date(feedback.date).toLocaleDateString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No feedback available</p>
                )}
              </div>
            </div>
          </div>
          <div className="text-center mb-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={handleSelectedCoach}
            >
              select
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachDetails;
