import axios from "axios";

export async function getOurValuesCards() {
  try {
    const response = await axios.get("/api/ourvalues");

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch our values cards");
  }
}
