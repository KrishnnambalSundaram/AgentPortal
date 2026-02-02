import { BASE_URL } from "../utils/commons";

export async function getAgents() {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      "Content-Type": "application/json",
    };

    // Add authorization header if token exists
    // Inflecto employees will get the url field if authenticated
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${BASE_URL}/api/ai-agents`, {
      method: "GET",
      headers,
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
