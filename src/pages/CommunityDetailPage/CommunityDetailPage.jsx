import React, { useState } from "react";
import classes from "./CommunityDetailPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import LazyImage from "../../components/LazyImage/LazyImage";

const CommunityDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);

  const communities = [
    {
      id: 1,
      name: "Tech Enthusiasts",
      category: "Technology",
      icon: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=120&h=120&fit=crop",
      members: 2543,
      description:
        "A vibrant community for tech lovers, developers, and innovators. Share your projects, learn from others, and stay updated with the latest in technology.",
      founded: "2022",
      posts: 1240,
      membersList: [
        {
          name: "Alice Johnson",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
        },
        {
          name: "Bob Smith",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
        },
        {
          name: "Carol White",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop",
        },
        {
          name: "David Brown",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop",
        },
        {
          name: "Emma Davis",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53a8c7c4c7b3?w=64&h=64&fit=crop",
        },
        {
          name: "Frank Miller",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
        },
      ],
    },
    {
      id: 2,
      name: "Design Lovers",
      category: "Design",
      icon: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
      members: 1892,
      description:
        "Creative minds unite! Share your designs, get feedback, discuss design trends, and collaborate with other talented designers.",
      founded: "2023",
      posts: 856,
      membersList: [
        {
          name: "Grace Lee",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop",
        },
        {
          name: "Henry Chen",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop",
        },
        {
          name: "Iris Martinez",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53a8c7c4c7b3?w=64&h=64&fit=crop",
        },
        {
          name: "Jack Wilson",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
        },
        {
          name: "Kate Taylor",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
        },
        {
          name: "Leo Anderson",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop",
        },
      ],
    },
  ];

  const community = communities.find((c) => c.id === parseInt(id));

  if (!community) {
    return (
      <div className={classes.container}>
        <p>Community not found</p>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <button className={classes.backBtn} onClick={() => navigate(-1)}>
        <MdArrowBack />
      </button>

      <div className={classes.header}>
        <div className={classes.iconContainer}>
          <LazyImage
            src={community.icon}
            alt={community.name}
            className={classes.communityIcon}
          />
        </div>
        <div className={classes.headerInfo}>
          <h1 className={classes.title}>{community.name}</h1>
          <p className={classes.category}>{community.category}</p>
          <p className={classes.memberCount}>{community.members} members</p>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.mainContent}>
          <section className={classes.section}>
            <h2>About</h2>
            <p>{community.description}</p>
          </section>

          <section className={classes.section}>
            <h2>Members</h2>
            <div className={classes.membersList}>
              {community.membersList.map((member, index) => (
                <div key={index} className={classes.memberCard}>
                  <LazyImage
                    src={member.avatar}
                    alt={member.name}
                    className={classes.memberAvatar}
                  />
                  <p className={classes.memberName}>{member.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className={classes.sidebar}>
          <div className={classes.sidebarCard}>
            <h3>Community Info</h3>
            <div className={classes.infoItem}>
              <span className={classes.label}>Founded</span>
              <span className={classes.value}>{community.founded}</span>
            </div>
            <div className={classes.infoItem}>
              <span className={classes.label}>Members</span>
              <span className={classes.value}>{community.members}</span>
            </div>
            <div className={classes.infoItem}>
              <span className={classes.label}>Posts</span>
              <span className={classes.value}>{community.posts}</span>
            </div>
            <button
              className={cn(classes.joinBtn, { [classes.joined]: isJoined })}
              onClick={() => setIsJoined(!isJoined)}
            >
              {isJoined ? "Joined" : "Join Community"}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CommunityDetailPage;
