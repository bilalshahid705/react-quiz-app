import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsPage from "./pages/settings-page";
import QuestionsPage from "./pages/questions-page";
import FinalScreenPage from "./pages/final-screen-page";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" exact element={<SettingsPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/score" element={<FinalScreenPage />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
