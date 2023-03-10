import axios from "axios";
import {
  LOGIN_URL,
} from "./config";



// For Auth
export const fetchLogin = (postBody) => axios.post(LOGIN_URL, postBody, {});
