import axios from "axios";
import { validateResponse } from "./validateResponse";

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;

export function getTask() {
  return axios
    .get(`${api_url}/api/all_task/`)
    .then((response) => response.data)
    .catch(validateResponse);
}

export function changeTasks(task_id: number) {
  return axios
    .post(`${api_url}/api/change_status_of_task/`, {
      task_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}

export function checkTasks(task_id: number) {
  return axios
    .post(`${api_url}/api/check_tasks/`, {
      task_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}

export function checkTasksTg(task_id: number) {
  return axios
    .post(`${api_url}/api/check_telegram/`, {
      task_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}
