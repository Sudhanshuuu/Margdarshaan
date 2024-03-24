import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ value , handleChange }) {
    return (<div className={styles["searchBar"]}>
        <input type="text" name="searchBar" id="searchBar" placeholder="Search..." value={value} onChange={handleChange}/>
    </div>)
}

export default SearchBar;