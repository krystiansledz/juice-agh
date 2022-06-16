import React, { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const GroupFilters: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      searchParams.set("search", event.target.value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  return (
    <TextField
      type="text"
      label="Szukaj..."
      value={searchParams.get("search") || ""}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      size="small"
      sx={{
        width: {
          xs: "100%",
          md: "60%",
        },
      }}
    />
  );
};

export default GroupFilters;
