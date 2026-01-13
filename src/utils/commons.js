let BASE_URL = "";

if (location.hostname === "localhost") {
  BASE_URL = "https://aiagentsportal-cloud.inflectotechnologies.com/api";
} else {
  BASE_URL = "/api";
}

export { BASE_URL };