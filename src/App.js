import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubPage from "./pages/GithubPage";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <GithubPage />
      </Router>
    </GithubProvider>
  );
}

export default App;
