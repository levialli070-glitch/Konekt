import React, { useState } from "react";
import classes from "./CommunitySearch.module.css";
import { FiSearch } from "react-icons/fi";

const CommunitySearch = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <div className={classes.container}>
      <div className={classes.searchBox}>
        <input
          type="text"
          placeholder="Search communities..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={classes.input}
        />
        <FiSearch className={classes.icon} />
      </div>
    </div>
  );
};

export default CommunitySearch;
