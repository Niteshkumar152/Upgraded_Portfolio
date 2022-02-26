import Spinner from "../components/layout/Spinner";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { fetchUser, getUserRepos } from "../context/github/GithubActions";
import RepoList from "../components/repos/RepoList";
import User from "../components/users/User";
import { FaQuestionCircle } from "react-icons/fa";
function GithubPage() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await fetchUser();
      dispatch({ type: "SET_USER", payload: userData });

      const userRepoData = await getUserRepos();
      dispatch({ type: "GET_REPOS", payload: userRepoData });
    };

    getUserData();
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <User user={user} />
      <RepoList repos={repos} />
      <div
        className="animate-bounce cursor-pointer tooltip tooltip-left fixed bottom-10 right-10"
        data-tip="All Data fetched via an API "
      >
        <FaQuestionCircle size={"4em"} />
      </div>
    </div>
  );
}

export default GithubPage;
