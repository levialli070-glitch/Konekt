import classes from "./Homepage.module.css";
import cn from "classnames";
import { useState, Suspense } from "react";
import PostList from "../../components/PostList/PostList";
import PostFilter from "../../components/PostFilter/PostFilter";
import PostListSkeleton from "../../components/PostList/PostListSkeleton";
import PostFilterSkeleton from "../../components/PostFilter/PostFilterSkeleton";

const Homepage = () => {
  const [filters, setFilters] = useState({ sort: "latest", location: "all" });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.content}>
        <Suspense fallback={<PostFilterSkeleton />}>
          <PostFilter onFilterChange={handleFilterChange} />
        </Suspense>
        <Suspense fallback={<PostListSkeleton />}>
          <PostList filters={filters} />
        </Suspense>
      </div>
    </main>
  );
};

export default Homepage;
