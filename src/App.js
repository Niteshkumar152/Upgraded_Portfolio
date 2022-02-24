import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubPage from "./pages/GithubPage";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GithubPage />} />
        </Routes>
      </Router>
    </GithubProvider>
  );
}

export default App;
