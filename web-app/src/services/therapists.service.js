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
