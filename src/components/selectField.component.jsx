import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  setCategoryValue,
  setDifficultyValue,
  setQuestionsType,
} from "../features/quizSlice";
import { Box } from "@mui/system";

const SelectField = ({ label, options, errorValue }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setValue(e.target.value);
    console.log("label", label);
    switch (label) {
      case "Category":
        dispatch(setCategoryValue(e.target.value));
        break;
      case "Level of Difficulty":
        dispatch(setDifficultyValue(e.target.value));
        break;
      case "Questions Type":
        dispatch(setQuestionsType(e.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={(e) => handleChange(e)}
          error={errorValue}
        >
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
