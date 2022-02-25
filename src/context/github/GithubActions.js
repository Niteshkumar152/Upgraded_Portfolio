const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const fetchUser = async () => {
  const response = await fetch(`${GITHUB_URL}/users/niteshkumar152`);
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};

export const getUserRepos = async () => {
  const response = await fetch(`${GITHUB_URL}/users/niteshkumar152/repos`);
  const data = await response.json();
  return data;
};
