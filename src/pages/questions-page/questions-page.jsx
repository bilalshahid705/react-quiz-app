import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useAxios from "../../components/useAxios";
import { setScoreValue } from "../../features/scoreSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./questions-page.style.scss";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const QuestionsPage = () => {
  const { category, difficultyLevel, questionsType } = useSelector(
    (state) => state.quiz
  );
  const { score } = useSelector((state) => state.score);
  const nagivate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=10`;
  if (category) {
    apiUrl = apiUrl.concat(`&category=${category}`);
  }
  if (difficultyLevel) {
    apiUrl = apiUrl.concat(`&difficulty=${difficultyLevel}`);
  }
  if (questionsType) {
    apiUrl = apiUrl.concat(`&type=${questionsType}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    const correctAnswer =
      questionsType === "boolean" ? e.target.textContent : e.target.value;
    if (correctAnswer === question.correct_answer) {
      dispatch(setScoreValue(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      nagivate("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <div className="questions-page-style">
        <Typography mt={5}>
          {decode(response.results[questionIndex].question)}
        </Typography>
        <FormControl>
          {options.map((data, id) => (
            <Box mt={2} key={id}>
              {questionsType === "boolean" ? (
                <Button
                  onClick={handleClickAnswer}
                  variant="contained"
                  color="secondary"
                >
                  {decode(data)}
                </Button>
              ) : (
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    onChange={handleClickAnswer}
                    value={decode(data)}
                    control={<Radio />}
                    label={decode(data)}
                  />
                </RadioGroup>
              )}
            </Box>
          ))}
        </FormControl>
        <Box mt={5}>
          Score: {score} / {response.results.length}
        </Box>
      </div>
    </Box>
  );
};

export default QuestionsPage;
