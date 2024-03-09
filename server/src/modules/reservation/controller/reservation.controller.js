import reservationModel from "../../../../Database/models/reservation.model.js";

async function isCoachAvailable(coachId, date, startTime, endTime) {
  const reservationDate = new Date(date);
  const dayOfWeek = reservationDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const coach = await coachModel.findById(coachId);
  if (!coach) return false;

  const workingDay = coach.working_days.find((day) => day.day === dayOfWeek);
  if (!workingDay) return false;
  const requestStartTime = parseInt(startTime.replace(":", ""), 10);
  const requestEndTime = parseInt(endTime.replace(":", ""), 10);
  const workStartTime = parseInt(workingDay.start_time.replace(":", ""), 10);
  const workEndTime = parseInt(workingDay.end_time.replace(":", ""), 10);

  if (requestStartTime < workStartTime || requestEndTime > workEndTime)
    return false;

  return true;
}

// Create Reservation
export const createReservation = async (req, res) => {
  const { coach_id, date, start_time, end_time } = req.body;
  const client_id = req.userID;

  try {
    // Check coach's availability
    const available = await isCoachAvailable(
      coach_id,
      date,
      start_time,
      end_time
    );
    if (!available) {
      return res
        .status(400)
        .send({ message: "Coach is not available at the requested time." });
    }

    // Proceed with creating the reservation if the coach is available
    const reservation = new reservationModel({
      client_id,
      coach_id,
      date,
      start_time,
      end_time,
      status: "pending", // Initial status; could be updated based on business logic
    });

    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while creating the reservation.",
      error: error.toString(),
    });
  }
};

// Confirm Reservation
export const confirmReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const coachId = req.userID;

    const reservation = await reservationModel.findOne({
      _id: reservationId,
      coach_id: coachId,
    });
    if (!reservation) {
      return res.status(404).send({
        message: "Reservation not found or not assigned to this coach.",
      });
    }

    reservation.status = "confirmed";
    await reservation.save();

    res.send({ message: "Reservation confirmed.", reservation });
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while confirming the reservation.",
      error: error.toString(),
    });
  }
};

// Cancel Reservation
export const cancelReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const coachId = req.userID;

    const reservation = await reservationModel.findOne({
      _id: reservationId,
      coach_id: coachId,
    });
    if (!reservation) {
      return res.status(404).send({
        message: "Reservation not found or not assigned to this coach.",
      });
    }

    reservation.status = "cancelled";
    await reservation.save();

    res.send({ message: "Reservation cancelled.", reservation });
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while cancelling the reservation.",
      error: error.toString(),
    });
  }
};

// Get Client Reservations
export const clientReservations = async (req, res) => {
  try {
    const clientId = req.userID;

    const reservations = await reservationModel
      .find({ client_id: clientId })
      .populate("coach_id", "full_name profile_picture")
      .exec();

    if (!reservations.length) {
      return res
        .status(404)
        .send({ message: "No reservations found for this client." });
    }

    res.send(reservations);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while fetching the client's reservations.",
      error: error.toString(),
    });
  }
};

// Get Coach Reservations
export const coachReservations = async (req, res) => {
  try {
    const coachId = req.userID;

    const reservations = await reservationModel
      .find({ coach_id: coachId })
      .populate("client_id", "full_name profile_picture")
      .exec();

    if (!reservations.length) {
      return res
        .status(404)
        .send({ message: "No reservations found for this coach." });
    }

    res.send(reservations);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while fetching the coach's reservations.",
      error: error.toString(),
    });
  }
};
