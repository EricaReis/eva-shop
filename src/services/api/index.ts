import axios from "axios";

const DEFAULT_TIMEOUT = 20000;

const api = axios.create({
  baseURL: "https://eva-test.herokuapp.com",
  timeout: DEFAULT_TIMEOUT,
});

export { api };
