import axios from "axios";

export async function getTherapists(filter) {
  try {
    const queryParams = new URLSearchParams();

    if (filter) {
      for (const [key, values] of Object.entries(filter)) {
        for (const value of values) {
          queryParams.append(`filter[${key}]`, value);
        }
      }
    }

    const response = await axios.get("/api/psychotherapists", {
      params: queryParams,
    });

    return response.data.psychotherapists;
  } catch (error) {
    throw new Error("Failed to fetch therapists");
  }
}

export async function getTherapistLocations() {
  try {
    const response = await axios.get("/api/psychotherapists/locations");

    if (!Array.isArray(response.data)) {
      throw new Error("Invalid response");
    }

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch therapist locations");
  }
}
