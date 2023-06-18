import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import CampaignCard from "./CampaignCard";

const Search = ({ data, campaigns }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value?.toLowerCase();
    setSearchTerm(searchTerm);

    console.log(data, "data");
    const filteredResults = data?.filter((item) => {
      item?.toLowerCase().includes(searchTerm);
      console.log(item?.toLowerCase(), "item");
    });

    console.log(filteredResults, "filteredResults");
    setSearchResults(filteredResults);
  };

  // console.log(data, "data");
  console.log(searchTerm, "searchTerm");
  console.log(searchResults, "searchResults");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mt: "1vh", width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <FormControl> */}
      <TextField
        id="search-bar"
        label="Search"
        variant="filled"
        color="secondary"
        autoComplete="off"
        value={searchTerm}
        onChange={handleSearch}
        inputProps={{
          autoComplete: "off",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          borderRadius: "30px",
        }}
      />
      <ul>
        {searchResults?.map((campaign) => (
          <li key={campaign.id}>
            <CampaignCard
              {...campaign}
              handleClick={() => handleRoute(campaign)}
            />
          </li>
        ))}
      </ul>
      {/* </FormControl> */}
    </Box>
  );
};

export default Search;
