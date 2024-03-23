import { api } from "./http";

const getClientByToken = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found in localStorage");
  }

  try {
    const response = await api.get("/me", {
      headers: {
        token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch user data");
  }
};

export default getClientByToken;
