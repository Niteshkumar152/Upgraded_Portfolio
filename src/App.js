import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubPage from "./pages/GithubPage";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Delayed from "./components/Delayed";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Delayed><Home/></Delayed>} />
          <Route path="/custom-github-page" element={<GithubPage />} />
        </Routes>
      </Router>
    </GithubProvider>
  );
}

export default App;
