import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
// import Demo from "../demo/demo";
// import { makeStyles } from "@material-ui/core/styles";
export default function Search({ data }) {
  return (
    <form className={styles.wrapper}>
      <Autocomplete
        disablePortal
        // id="combo-box-demo"
        // options={data.map((option) => (
        //   <div style={{ display: "flex" }}>
        //     <p>{option.title}</p>
        //     <p>{option.follows}follows</p>
        //   </div>
        // ))}
        options={data}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} />}
        getOptionLabel={(option) => `${option.title}:${option.description}`}
        renderOption={(option) => {
          return (
            <div
              style={{
                backgroundColor: "#121212",
                color: "white",
                padding: "10px ",
              }}
            >
              <p>{option.key.slice(0, option.key.indexOf(":"))}</p>
              <p style={{ fontSize: "small" }}>
                {option.key.slice(option.key.indexOf(":") + 1, 100)}
              </p>
            </div>
          );
          // console.log(option);
        }}
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
