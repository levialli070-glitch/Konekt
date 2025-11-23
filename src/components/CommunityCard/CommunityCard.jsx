import React, { useState } from "react";
import classes from "./CommunityCard.module.css";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import LazyImage from "../LazyImage/LazyImage";

const CommunityCard = ({ community }) => {
  const [isJoined, setIsJoined] = useState(false);
  const navigate = useNavigate();

  const handleJoin = () => {
    setIsJoined(!isJoined);
  };

  const handleView = () => {
    navigate(`/community/${community.id}`);
  };

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <LazyImage
          src={community.icon}
          alt={community.name}
          className={classes.icon}
          style={{ width: "60px", height: "60px", borderRadius: "12px" }}
        />
      </div>
      <div className={classes.body}>
        <p className={classes.name}>{community.name}</p>
        <p className={classes.description}>{community.description}</p>
        <p className={classes.members}>{community.members} members</p>
      </div>
      <div className={classes.footer}>
        <button
          className={cn(classes.btn, classes.viewBtn)}
          onClick={handleView}
        >
          View
        </button>
        <button
          className={cn(classes.btn, classes.joinBtn, {
            [classes.joined]: isJoined,
          })}
          onClick={handleJoin}
        >
          {isJoined ? "Joined" : "Join"}
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
