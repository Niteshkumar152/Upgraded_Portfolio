import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setUser = (data) => dispatch({ type: "SET_USER", payload: data });
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const getRepos = (data) => dispatch({ type: "GET_REPOS", payload: data });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        setLoading,
        setUser,
        repos: state.repos,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
