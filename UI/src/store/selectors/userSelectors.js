export const getCurrentUser = (state) => state.me.currentUser;

const filterClientsByWorkouts = (state, hasWorkouts) => {
  const workoutsMap = state.me.currentUser?.clientsWorkoutsMap;
  if (!workoutsMap) return [];
  if (!state.me.currentUser.client_ids) return [];

  const clientIds = Object.entries(workoutsMap)
    .filter(([, workouts]) =>
      hasWorkouts ? workouts.length > 0 : workouts.length === 0
    )
    .map(([clientId]) => clientId);

  return state.me.currentUser.client_ids.filter((client) =>
    clientIds.includes(client._id)
  );
};

export const getCurrentUserClientsWithNoWorkouts = (state) => {
  return filterClientsByWorkouts(state, false) || [];
};

export const getCurrentUserClientsWithWorkouts = (state) => {
  return filterClientsByWorkouts(state, true) || [];
};
