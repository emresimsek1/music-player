import Axios from "axios";

const config = require("../config/config.json");

export const axios = Axios.create({
  baseURL: config.DEV.URL_BASE_PATH,
});
