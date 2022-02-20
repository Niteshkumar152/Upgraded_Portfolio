import { useContext } from "react";
import Spinner from "../components/layout/Spinner";
import UserItem from "../components/users/UserItem";
import GithubContext from "../context/github/GithubContext";

function GithubPage() {
  const { loading } = useContext(GithubContext);
  if (!loading) {
    return <UserItem />;
  } else {
    return <Spinner />;
  }
}

export default GithubPage;
