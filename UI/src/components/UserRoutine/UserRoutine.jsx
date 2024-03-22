import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Modal,
  Box,
} from "@mui/material";

function UserRoutine() {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      if (!token) {
        console.log("No token found");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/clientt/workout-plans",
          {
            headers: {
              token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch workout plans");
        }

        const data = await response.json();
        setWorkoutPlans(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchWorkoutPlans();
  }, [token]);

  const handleOpenModal = (workout) => {
    setSelectedWorkout(workout);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Workout Plans
      </Typography>
      <Grid container spacing={2}>
        {workoutPlans.length > 0 &&
          workoutPlans.map((plan) =>
            plan.workouts.map((workout, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea onClick={() => handleOpenModal(workout)}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {workout.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {workout.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          )}
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="workout-details-title"
        aria-describedby="workout-details-description"
      >
        <Box sx={modalStyle}>
          {selectedWorkout && (
            <>
              <Typography
                id="workout-details-title"
                variant="h6"
                component="h2"
              >
                {selectedWorkout.name}
              </Typography>
              <Typography id="workout-details-description" sx={{ mt: 2 }}>
                {selectedWorkout.description}
              </Typography>

              <iframe
                width="100%"
                height="315"
                src={selectedWorkout.video_link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

export default UserRoutine;
