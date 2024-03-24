import { useDispatch, useSelector } from "react-redux";
import { fetchCoachById } from "./../../thunks/coach";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setCoach } from "./../../thunks/setCoach";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import styles from './CoachDetails.module.css'

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
    <div style={{ backgroundColor: "#101010" }}>
      {/**coach && (
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title">{coach.full_name}</h2>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={coach.profile_picture}
                  alt={coach.full_name}
                  className="img-fluid rounded mb-3 h-50 w-50"
                />
                <p>
                  Email: {coach.email}
                </p>
                <p>
                  Phone Number: {coach.phone_number}
                </p>
                <p>
                  Age: {coach.age}
                </p>
                <p>
                  Birth Date:{" "}
                  {new Date(coach.birth_date).toLocaleDateString()}
                </p>
                <h3 className="my-3 fw-bold">Working Days</h3>
                <ul className="list-unstyled">
                  {coach.working_days.map((day, index) => (
                    <li key={index}>
                      <p>
                        {day.day}: {day.start_time} -{" "}
                        {day.end_time}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6 mt-5">
                <h3>Feedbacks:</h3>
                {coach.feedbacks.length > 0 ? (
                  <ul className="list-unstyled">
                    {coach.feedbacks.map((feedback, index) => (
                      <li key={index}>
                        <p>
                          Rating: {feedback.rating}
                        </p>
                        <p>
                          Comment: {feedback.comment}
                        </p>
                        <p>
                          Date:{" "}
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
                )**/}
   {coach && (
    <section style={{ backgroundColor: "#2b2b2b" }}>
    <MDBContainer className="py-5 h-100" style={{ backgroundColor: "#2b2b2b" }}>
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="6" className="mb-4 mb-lg-0">
          <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
            <MDBRow className="g-0">
              <MDBCol md="4" className={`gradient-custom text-center text-white ${styles.bg}`}
                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }  }>
                <MDBCardImage src={coach.profile_picture}
                  alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                <MDBTypography tag="h5">{coach.full_name}</MDBTypography>
                <MDBCardText>Coach</MDBCardText>
                <MDBIcon far icon="edit mb-5" />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody className="p-4">
                  <MDBTypography tag="h6">Information</MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Name</MDBTypography>
                      <MDBCardText className="text-muted">{coach.full_name}</MDBCardText>
                      <MDBTypography tag="h6">Email</MDBTypography>
                      <MDBCardText className="text-muted">{coach.email}</MDBCardText>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Phone</MDBTypography>
                      <MDBCardText className="text-muted">{coach.phone_number}</MDBCardText>
                      <MDBTypography tag="h6">Age</MDBTypography>
                      <MDBCardText className="text-muted">{coach.age}</MDBCardText>
                    </MDBCol>
                    
                  </MDBRow>

                  <MDBTypography tag="h6">Work Information</MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Working Days</MDBTypography>
                        <ul className="list-unstyled">
                          {coach.working_days.map((day, index) => (
                            <li key={index}>
                              <MDBCardText className="text-muted">
                                {day.day} {day.start_time} -{" "}{day.end_time}
                              </MDBCardText>
                            </li>
                          ))}
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" className="mb-3">
                      <MDBTypography tag="h6">Feedbacks</MDBTypography>
                      {coach.feedbacks.length > 0 ? (
                        <ul className="list-unstyled">
                          {coach.feedbacks.map((feedback, index) => (
                            <li key={index}>
                              <MDBCardText>
                                Rating: {feedback.rating}
                              </MDBCardText>
                              <MDBCardText>
                                Comment: {feedback.comment}
                              </MDBCardText>
                              <MDBCardText>
                                Date:{" "}
                                {new Date(feedback.date).toLocaleDateString()}
                              </MDBCardText>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No feedback available</p>
                      )}
                      <MDBCardText className="text-muted">123 456 789</MDBCardText>
                    </MDBCol>
                  </MDBRow>

                  <div className="d-flex justify-content-start">
                    <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                    <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                    <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
   )}
   
               
    </div>
  );
};

export default CoachDetails;
