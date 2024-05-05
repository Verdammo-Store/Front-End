import * as React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputLabel,
  OutlinedInput,
  FormControl,
  IconButton,
  InputAdornment,
} from "@mui/material";

const InputSenha = ({ className, nomeInputLabel, label, onChange }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl
      className={className}
      sx={{ width: "100%" }}
      variant="outlined"
      color="tertiary"
    >
      <InputLabel htmlFor="outlined-adornment-password">
        {nomeInputLabel}
      </InputLabel>
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        onChange={onChange}
        required={true}
      />
    </FormControl>
  );
};
export default InputSenha;
