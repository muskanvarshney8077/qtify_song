import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

export default function Search({ data }) {
  return (
    <form className={styles.wrapper}>
      <Autocomplete
        disablePortal
        options={data}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} />}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => {
          return (
            <div
              style={{
                backgroundColor: "#121212",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                padding: "10px 5px",
              }}
            >
              <img
                src={option.image}
                alt={option.title}
                width={60}
                style={{
                  border: "1px solid white",
                  borderRadius: "6px",
                }}
              />
              <div
                style={{
                  backgroundColor: "#121212",
                  color: "white",
                  padding: "10px ",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
                {...props}
              >
                <p>{option.title}</p>
                <p style={{ fontSize: "small" }}>
                  {option.description.slice(0, 100)}
                </p>
              </div>
            </div>
          );
        }}
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
