import { useEffect, useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { difficultyOptions, typeOptions } from "../utils/select-options";
import SelectField from "../components/selectField.component";
import useAxios from "../components/useAxios";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { response, error, loading } = useAxios({
    url: "/api_category.php",
  });

  const nagivate = useNavigate();
  const { category, difficultyLevel, questionsType } = useSelector(
    (state) => state.quiz
  );
  const [selectError, setSelectError] = useState(false);

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
    if (category != "" && difficultyLevel != "" && questionsType != "") {
      e.preventDefault();
      nagivate("/questions");
    } else {
      setSelectError(true);
    }
  };

  return (
    <form>
      <h1>Quiz App</h1>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField
        options={difficultyOptions}
        label="Level of Difficulty"
        errorValue={selectError}
      />
      <SelectField
        options={typeOptions}
        label="Questions Type"
        errorValue={selectError}
      />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" onClick={(e) => handleSubmit(e)}>
          Get Started
        </Button>
      </Box>
      {selectError && <h5>Please select the above options</h5>}
    </form>
  );
};

export default HomePage;
