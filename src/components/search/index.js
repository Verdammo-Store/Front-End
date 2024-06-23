import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <TextField
      color="secondary"
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleSearchChange}
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearchSubmit} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ backgroundColor: "white" }}
    />
  );
};

export default SearchComponent;
