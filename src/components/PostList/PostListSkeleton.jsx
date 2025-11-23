import React from "react";
import classes from "./PostList.module.css";

const PostListSkeleton = () => {
  return (
    <div className={classes.skeletonContainer}>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className={classes.skeletonCard}>
          <div className={classes.skeletonHead}>
            <div className={classes.skeletonAvatar} />
            <div className={classes.skeletonUserInfo}>
              <div className={classes.skeletonUsername} />
              <div className={classes.skeletonTimestamp} />
            </div>
          </div>
          <div className={classes.skeletonBody}>
            <div className={classes.skeletonText} />
            <div className={classes.skeletonText} style={{ width: "80%" }} />
            <div className={classes.skeletonImage} />
          </div>
          <div className={classes.skeletonFooter}>
            <div className={classes.skeletonButton} />
            <div className={classes.skeletonButton} />
            <div className={classes.skeletonButton} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostListSkeleton;
