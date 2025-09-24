import { BASE_URL } from "../utils/commons";

export async function getAgents() {
  try {
    const response = await fetch(`${BASE_URL}/api/ai-agents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
}
