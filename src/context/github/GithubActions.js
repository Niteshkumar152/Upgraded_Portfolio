import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: GITHUB_URL,
});

export const fetchUser = async () => {
  const response = await github.get(`/users/niteshkumar152`);
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    return response.data;
  }
};

export const getUserRepos = async () => {
  const response = await github.get(`/users/niteshkumar152/repos`);
  return response.data;
};
