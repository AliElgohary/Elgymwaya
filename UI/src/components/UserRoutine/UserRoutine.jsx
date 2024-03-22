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
  Paper,
  Stack,
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
            headers: { token },
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
    width: "auto",
    maxWidth: "90vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    maxHeight: "90vh",
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
        <Paper elevation={3} sx={modalStyle}>
          <Stack spacing={2}>
            {selectedWorkout && (
              <>
                <Typography
                  id="workout-details-title"
                  variant="h6"
                  component="h2"
                >
                  {selectedWorkout.name}
                </Typography>
                <Typography variant="body1">
                  {selectedWorkout.description}
                </Typography>
                <Typography variant="body1">
                  Frequency: {selectedWorkout.frequency}
                </Typography>
                <Typography variant="body1">
                  Duration: {selectedWorkout.duration} minutes
                </Typography>
                <Typography variant="body1">
                  Sets: {selectedWorkout.sets}, Reps: {selectedWorkout.reps}
                </Typography>
                <Typography variant="body1">
                  Rest period: {selectedWorkout.rest_period} seconds
                </Typography>
                <Typography variant="body1">
                  Equipment Needed:{" "}
                  {selectedWorkout.equipment_needed.join(", ") || "None"}
                </Typography>
                {selectedWorkout.video_link && (
                  <Box
                    component="iframe"
                    src={selectedWorkout.video_link}
                    alt="Workout Video"
                    title="YouTube video player"
                    width="100%"
                    height="315"
                    frameBorder="0"
                    allowFullScreen
                    sx={{ my: 2, borderRadius: "4px", overflow: "hidden" }}
                  ></Box>
                )}
              </>
            )}
          </Stack>
        </Paper>
      </Modal>
    </Container>
  );
}

export default UserRoutine;
