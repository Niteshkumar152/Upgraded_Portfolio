import Spinner from "../layout/Spinner";
import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import RepoList from "../repos/RepoList";
import User from "./User";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

function UserItem() {
  const { setLoading, setUser, getRepos, user, loading, repos } =
    useContext(GithubContext);
  const fetchUser = async () => {
    //setLoading();
    const response = await fetch(`${GITHUB_URL}/users/niteshkumar152`);
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      console.log("This is the Data Related To Github User");
      console.log(data);
      setUser(data);
    }
  };

  const getUserRepos = async () => {
    //setLoading();
    const response = await fetch(`${GITHUB_URL}/users/niteshkumar152/repos`);
    const data = await response.json();
    getRepos(data);
  };

  useEffect(() => {
    fetchUser();
    getUserRepos();
  }, []);
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <User user={user} />
      <RepoList repos={repos} />
    </>
  );
}

export default UserItem;
