import axios from "axios";

axios.defaults.withCredentials = true;

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;


export function mainPage(initData: string, refferal?: number) {
  return axios
    .get(`${api_url}/api/main_page/`, {
      headers: {
        Authorization: initData,
        xreferralid: refferal,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function mainStats() {
  return axios
    .get(`${api_url}/api/main_stats/`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function getAllFranchise() {
  return axios
    .get(`${api_url}/api/get_all_franchise/`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function addFavorites(franchise_id: number) {
  return axios
    .post(`${api_url}/api/add_or_delete_favorite_franchise/`, {
      franchise_id
    })
    .then((response) => {
      const data = response.data.data;
      return data;
    })
    .catch((err) => console.log(err));
};
