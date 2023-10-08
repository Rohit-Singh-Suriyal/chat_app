import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <TextField
        variant="standard"
        value={searchTerm}
        placeholder="Search"
        fullWidth
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <SearchIcon
              sx={{
                color: "white", // Change the color of the search icon as needed
                marginRight: 1, // Adjust the spacing as needed
              }}
            />
          ),
          style: {
            color: "white", // Set the input text color to white
          },
        }}
        InputLabelProps={{
          style: {
            color: "white", // Set the placeholder color to white
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
