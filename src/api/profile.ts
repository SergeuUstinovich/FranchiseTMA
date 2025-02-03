import axios from "axios";
import { validateResponse } from "./validateResponse";

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;


export function getProfile() {
  return axios
    .get(`${api_url}/api/get_profile/`)
    .then(validateResponse)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function myFavorite() {
  return axios
    .get(`${api_url}/api/my_favorite_franchise/`)
    .then(validateResponse)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
}

export function editProfile(name?: string, last_name?: string, city?: string, mobile_phone?: string) {
  return axios
    .post(`${api_url}/api/edit_profile/`, {
      name,
      last_name,
      city,
      mobile_phone,
    })
    .then(validateResponse)
    .then((response) => {
      const data = response.data.data;
      return data;
    })
    .catch((err) => console.log(err));
};