import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setScoreValue } from "../features/scoreSlice";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FinalPage = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const { score } = useSelector((state) => state.score);

  const handleBackToSettings = () => {
    dispatch(setScoreValue(0));
    nagivate("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Result: {score}
      </Typography>
      <Button onClick={() => handleBackToSettings()} variant="outlined">
        back to settings!
      </Button>
    </Box>
  );
};

export default FinalPage;
