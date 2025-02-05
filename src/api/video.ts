import axios from "axios";
import { validateResponse } from "./validateResponse";

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;

export function getVideo() {
  return axios
    .get(`${api_url}/api/get_video/`)
    .then((response) => response.data)
    .catch(validateResponse);
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

export function changeCurseStatus(curse_video_id: number) {
  return axios
    .post(`${api_url}/api/change_curse_status/`, {
      curse_video_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}

export function compliteCurseStatus(curse_video_id: number) {
  return axios
    .post(`${api_url}/api/take_bonus_for_completed_curse/`, {
      curse_video_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}

export function takeBonusVideo(video_id: number) {
  return axios
    .post(`${api_url}/api/take_video_bonus/`, {
      video_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}
