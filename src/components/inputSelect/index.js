import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const InputSelect = ({
  nomeInputLabel,
  labelSelect,
  menuItens,
  onChange,
  valorInicial,
  className
}) => {
  const [option, setOption] = React.useState(valorInicial || "");

  const handleChange = (event) => {
    setOption(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Box>
      <FormControl className={className} required color="tertiary">
        <InputLabel>{nomeInputLabel}</InputLabel>
        <Select value={option} label={labelSelect} onChange={handleChange}>
          {menuItens.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default InputSelect;
