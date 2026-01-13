let BASE_URL = "";

if (location.hostname === "localhost") {
  BASE_URL = "http://localhost:4000";
} else {
  BASE_URL = "/api";
}

export { BASE_URL };