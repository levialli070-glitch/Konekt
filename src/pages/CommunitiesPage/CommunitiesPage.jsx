import classes from "./CommunitiesPage.module.css";
import cn from "classnames";
import { useState } from "react";
import CommunitySearch from "../../components/CommunitySearch/CommunitySearch";
import CommunityList from "../../components/CommunityList/CommunityList";

const CommunitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.header}>
        <h1 className={classes.title}>Communities</h1>
        <p className={classes.subtitle}>
          Explore and join communities that interest you
        </p>
      </div>
      <div className={classes.content}>
        <CommunitySearch onSearchChange={handleSearchChange} />
        <CommunityList searchQuery={searchQuery} />
      </div>
    </main>
  );
};

export default CommunitiesPage;
