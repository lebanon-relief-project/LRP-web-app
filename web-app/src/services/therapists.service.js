import axios from "axios";

export async function getTherapists() {
  try {
    const response = await axios.get("/api/psychotherapists");

    return response.data.psychotherapists;
  } catch (error) {
    throw new Error("Failed to fetch therapists");
  }
}
