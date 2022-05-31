import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import QuestionsPage from "./pages/questions-page";
import FinalScreenPage from "./pages/final-page";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/score" element={<FinalScreenPage />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
