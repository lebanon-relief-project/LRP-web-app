import axios from "axios";

export async function getFlashCards() {
  try {
    const response = await axios.get("/api/flashcards");

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch flash cards");
  }
}
