import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./TraineeRotine.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { crateRoutineInit } from "../../thunks/users";
import { useDispatch } from "react-redux";
import Input from "./../../components/common/Input";

// eslint-disable-next-line react/prop-types
const WorkoutForm = ({ clientId, handleCloseModal }) => {
  const dispatch = useDispatch();
  // State variables to hold form data
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    status: "Active",
    goals: "",
    notes: "",
    workouts: [
      {
        name: "",
        description: "",
        frequency: "",
        duration: "",
        type: "",
        sets: "",
        reps: "",
        rest_period: "",
        equipment_needed: "",
        video_link: "",
      },
    ],
  });

  // Function to handle changes in workout fields
  const handleWorkoutChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkouts = [...formData.workouts];
    updatedWorkouts[index][name] = value;
    setFormData({ ...formData, workouts: updatedWorkouts });
  };

  // Function to add a new empty workout
  const addWorkout = () => {
    setFormData({
      ...formData,
      workouts: [
        ...formData.workouts,
        {
          name: "",
          description: "",
          frequency: "",
          duration: "",
          type: "",
          sets: "",
          reps: "",
          rest_period: "",
          equipment_needed: "",
          video_link: "",
        },
      ],
    });
  };

  // Function to remove a workout
  const removeWorkout = (index) => {
    const updatedWorkouts = [...formData.workouts];
    updatedWorkouts.splice(index, 1);
    setFormData({ ...formData, workouts: updatedWorkouts });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData["client_id"] = clientId;
    dispatch(crateRoutineInit(formData));
    handleCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.modal_bg}>
      <Form.Group controlId="startDate">
        <Form.Label className="pt-1 mb-1">Start Date</Form.Label>
        <Input
          className={styles.input_modal}
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group controlId="endDate">
        <Form.Label className="pt-4 mb-1">End Date</Form.Label>
        <Input
          className={styles.input_modal}
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group controlId="status">
        <Form.Label className="pt-4 mb-1">Status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="paused">Paused</option>
        </Form.Control>
      </Form.Group>

      {/* Workouts */}
      <h4 className={styles.workoutsFormTitle}>Workouts</h4>
      {formData.workouts.map((workout, index) => (
        <div className={styles.workoutFormContainer} key={index}>
          <h5>Workout {index + 1}</h5>
          <Row>
            <Col>
              <Form.Group controlId={`workoutName-${index}`}>
                <Form.Label className="pt-4 mb-1">Name</Form.Label>
                <Input
                  className={styles.input_modal}
                  type="text"
                  name="name"
                  value={workout.name}
                  onChange={(e) => handleWorkoutChange(index, e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`workoutDescription-${index}`}>
                <Form.Label className="pt-4 mb-1">Description</Form.Label>
                <Input
                  className={styles.input_modal}
                  type="text"
                  name="description"
                  value={workout.description}
                  onChange={(e) => handleWorkoutChange(index, e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId={`workoutFrequency-${index}`}>
                <Form.Label className="pt-4 mb-1">Frequency</Form.Label>
                <Input
                  className={styles.input_modal}
                  type="text"
                  name="frequency"
                  value={workout.frequency}
                  onChange={(e) => handleWorkoutChange(index, e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`workoutDuration-${index}`}>
                <Form.Label className="pt-4 mb-1">
                  Duration (minutes)
                </Form.Label>
                <Input
                  className={styles.input_modal}
                  type="number"
                  name="duration"
                  value={workout.duration}
                  onChange={(e) => handleWorkoutChange(index, e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId={`workoutType-${index}`}>
                <Form.Label className="pt-4 mb-1">Type</Form.Label>
                <Input
                  className={styles.input_modal}
                  type="text"
                  name="type"
                  value={workout.type}
                  onChange={(e) => handleWorkoutChange(index, e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`workoutSets-${index}`}>
                <Form.Label className="pt-4 mb-1">Sets</Form.Label>
                <Input
                  className={styles.input_modal}
                  type="number"
                  name="sets"
                  value={workout.sets}
                  onChange={(e) => handleWorkoutChange(index, e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId={`workoutReps-${index}`}>
                <Form.Label className="pt-4 mb-1">Reps</Form.Label>
                <Input
                  className={styles.input_modal}
                  type="number"
                  name="reps"
                  value={workout.reps}
                  onChange={(e) => handleWorkoutChange(index, e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`workoutRestPeriod-${index}`}>
                <Form.Label className="pt-4 mb-1">
                  Rest Period (seconds)
                </Form.Label>
                <Input
                  className={styles.input_modal}
                  type="number"
                  name="rest_period"
                  value={workout.rest_period}
                  onChange={(e) => handleWorkoutChange(index, e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId={`workoutEquipment-${index}`}>
            <Form.Label className="pt-4 mb-1">Equipment Needed</Form.Label>
            <Input
              className={styles.input_modal}
              type="text"
              name="equipment_needed"
              value={workout.equipment_needed}
              onChange={(e) => handleWorkoutChange(index, e)}
            />
          </Form.Group>
          <Form.Group controlId={`workoutVideoLink-${index}`}>
            <Form.Label className="pt-4 mb-1">Video Link</Form.Label>
            <Input
              className={styles.input_modal}
              type="text"
              name="video_link"
              value={workout.video_link}
              onChange={(e) => handleWorkoutChange(index, e)}
            />
          </Form.Group>
          <Button
            className={styles.removeWorkout}
            variant="danger"
            onClick={() => removeWorkout(index)}
          >
            Remove Workout
          </Button>
        </div>
      ))}
      <Button
        variant="primary"
        className={styles.addWorkout}
        onClick={addWorkout}
      >
        <FontAwesomeIcon icon={faPlus} />
        Add
      </Button>

      <Form.Group controlId="goals">
        <Form.Label className="pt-4 mb-1">Goals</Form.Label>
        <Input
          className={styles.input_modal}
          as="textarea"
          rows={3}
          name="goals"
          value={formData.goals}
          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="notes">
        <Form.Label className="pt-4 mb-1">Notes</Form.Label>
        <Input
          className={styles.input_modal}
          as="textarea"
          rows={3}
          name="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WorkoutForm;
