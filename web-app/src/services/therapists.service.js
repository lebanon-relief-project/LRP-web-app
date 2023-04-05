import axios from "axios";

export async function getTherapists(filter) {
  if (filter) {
    try {
      const queryParams = new URLSearchParams();

      Object.keys(filter).forEach((key) => {
        filter[key].forEach((value) => {
          queryParams.append(`filter[${key}]`, value);
        });
      });

      const response = await axios.get("/api/psychotherapists", {
        params: queryParams,
      });

      return response.data.psychotherapists;
    } catch (error) {
      throw new Error("Failed to fetch therapists");
    }
  }
  try {
    const response = await axios.get("/api/psychotherapists");

    return response.data.psychotherapists;
  } catch (error) {
    throw new Error("Failed to fetch therapists");
  }
}
