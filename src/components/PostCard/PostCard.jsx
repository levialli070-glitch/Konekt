import React, { useState } from "react";
import classes from "./PostCard.module.css";
import cn from "classnames";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import LazyImage from "../LazyImage/LazyImage";

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardhead}>
        <LazyImage
          src={post.profilePic}
          alt="profilepic"
          className={classes.avatar}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
        <div className={classes.userInfo}>
          <p className={classes.username}>{post.username}</p>
          <p className={classes.timestamp}>{post.timestamp}</p>
        </div>
        <button className={classes.followBtn}>Follow</button>
      </div>
      <div className={classes.cardbody}>
        <p className={classes.postText}>{post.content}</p>
        {post.image && (
          <LazyImage
            src={post.image}
            alt="post"
            className={classes.postImage}
          />
        )}
      </div>
      <div className={classes.cardfooter}>
        <div className={classes.left}>
          <button
            className={cn(classes.iconBtn, { [classes.liked]: isLiked })}
            onClick={handleLike}
          >
            {isLiked ? <AiFillLike /> : <AiOutlineLike />}
            <span>{likeCount}</span>
          </button>
          <button className={classes.iconBtn}>
            <FaRegComment />
            <span>{post.comments}</span>
          </button>
          <button className={classes.iconBtn}>
            <CiBookmark />
            <span>{post.bookmarks}</span>
          </button>
        </div>
        <div className={classes.right}>
          <button className={classes.iconBtn}>
            <BsShare />
            <span>{post.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
