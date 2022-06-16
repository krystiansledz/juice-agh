import React, { ChangeEvent } from "react";
import { Chip, InputAdornment, TextField, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const EventFilters: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const researchGroupFilter = searchParams.get("researchGroup");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      searchParams.set("search", event.target.value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  const handleRemoveFilter = () => {
    searchParams.delete("researchGroup");
    setSearchParams(searchParams);
  };

  return (
    <Stack
      sx={{
        gap: "1rem",
        alignItems: {
          xs: "flex-start",
          md: "center",
        },
        width: {
          xs: "100%",
          md: "60%",
        },
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
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
        sx={{ width: "100%" }}
      />
      {!!researchGroupFilter && (
        <Chip
          color="secondary"
          label={researchGroupFilter}
          onDelete={handleRemoveFilter}
        />
      )}
    </Stack>
  );
};

export default EventFilters;
