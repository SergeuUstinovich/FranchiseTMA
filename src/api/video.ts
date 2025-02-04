import axios from "axios";
import { validateResponse } from "./validateResponse";

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;

export function getVideo() {
  return axios
    .get(`${api_url}/api/get_video/`)
    .then(validateResponse)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function countVideo(video_id: number) {
  return axios
    .post(`${api_url}/api/count_video/`, {
      video_id,
    })
    .then((response) => {
      const data = response.data.data;
      return data;
    })
    .catch(validateResponse);
}
