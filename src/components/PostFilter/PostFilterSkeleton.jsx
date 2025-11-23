import React from "react";
import classes from "./PostFilter.module.css";

const PostFilterSkeleton = () => {
  return (
    <div className={classes.skeletonContainer}>
      <div className={classes.skeletonSelect} />
      <div className={classes.skeletonSelect} />
    </div>
  );
};

export default PostFilterSkeleton;
