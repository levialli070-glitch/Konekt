import classes from "./Homepage.module.css";
import cn from "classnames";
import { useState } from "react";
import PostList from "../../components/PostList/PostList";
import PostFilter from "../../components/PostFilter/PostFilter";

const Homepage = () => {
  const [filters, setFilters] = useState({ sort: "latest", location: "all" });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.content}>
        <PostFilter onFilterChange={handleFilterChange} />
        <PostList filters={filters} />
      </div>
    </main>
  );
};

export default Homepage;
