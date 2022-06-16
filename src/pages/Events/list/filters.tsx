import React, { ChangeEvent, useEffect } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const EventFilters: React.FC<Props> = (props) => {
  const {} = props;
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
      label="Szukaj po Tytuł, Koło, Opis"
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
      sx={{ width: "40%" }}
    />
  );
};

export default EventFilters;
