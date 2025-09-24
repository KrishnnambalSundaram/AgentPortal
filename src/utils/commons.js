let BASE_URL = "";

if (location.hostname === "localhost") {
  BASE_URL = "http://10.182.1.24:4000";
} else {
  BASE_URL = "";
}

export { BASE_URL };