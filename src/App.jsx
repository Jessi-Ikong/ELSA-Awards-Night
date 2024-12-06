import { Routes, Route } from "react-router-dom";
import Voting from "./components/Voting";
import SubmissionPage from "./components/SubmissionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Voting />} />
      <Route path="/submission-page" element={<SubmissionPage />} />
    </Routes>
  );
}

export default App;
