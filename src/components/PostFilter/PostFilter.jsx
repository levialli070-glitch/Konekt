import React, { useState } from "react";
import classes from "./PostFilter.module.css";

const PostFilter = ({ onFilterChange }) => {
  const [sort, setSort] = useState("latest");
  const [location, setLocation] = useState("all");

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    onFilterChange({ sort: newSort, location });
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    onFilterChange({ sort, location: newLocation });
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={handleSortChange}
          className={classes.select}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="mostLiked">Most Liked</option>
          <option value="mostCommented">Most Commented</option>
        </select>
        <select
          name="location"
          id="location"
          value={location}
          onChange={handleLocationChange}
          className={classes.select}
        >
          <option value="all">All Locations</option>
          <option value="n_america">North America</option>
          <option value="s_america">South America</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="australia">Australia</option>
        </select>
      </form>
    </div>
  );
};

export default PostFilter;
