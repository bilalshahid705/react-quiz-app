import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { difficultyOptions, typeOptions } from "../utils/select-options";
import SelectField from "../components/selectField.component";
import useAxios from "../components/useAxios";

const HomePage = () => {
  const { response, error, loading } = useAxios({
    url: "/api_category.php",
  });

  console.log("response", response);
  const nagivate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong! Refresh The Page
      </Typography>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    nagivate("/questions");
  };

  return (
    <form>
      <h1>Quiz App</h1>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOptions} label="Level of Difficulty" />
      <SelectField options={typeOptions} label="Questions Type" />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" onClick={(e) => handleSubmit(e)}>
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default HomePage;
