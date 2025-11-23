import React, { useMemo } from "react";
import classes from "./PostList.module.css";
import cn from "classnames";
import PostCard from "../PostCard/PostCard";

const PostList = ({ filters = { sort: "latest", location: "all" } }) => {
  const filteredAndSortedPosts = useMemo(() => {
    const posts = [
      {
        id: 1,
        username: "Alli Levi Irika",
        profilePic:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        timestamp: "10 mins ago",
        content:
          "This is my first post on Konekt! Excited to connect with everyone here.",
        image: "/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
        likes: 150,
        comments: 23,
        bookmarks: 45,
        shares: 12,
        location: "n_america",
      },
      {
        id: 2,
        username: "Okoi Judith Avivi",
        profilePic:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        timestamp: "2 hours ago",
        content:
          "Just finished an amazing project with my team. Collaboration at its finest! 🚀",
        image: "/images/land-o-lakes-inc-5KSXpLJRw8o-unsplash.jpg",
        likes: 320,
        comments: 56,
        bookmarks: 89,
        shares: 34,
        location: "africa",
      },
      {
        id: 3,
        username: "Marcus Shawn",
        profilePic:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        timestamp: "5 hours ago",
        content:
          "The weather is perfect today. Time to go for a hike and clear the mind.",
        image: "/images/karl-fredrickson-JRsZWmRd_Ws-unsplash.jpg",
        likes: 87,
        comments: 12,
        bookmarks: 23,
        shares: 5,
        location: "europe",
      },
      {
        id: 4,
        username: "Emma Wilson",
        profilePic:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        timestamp: "8 hours ago",
        content:
          "Sharing my thoughts on web development best practices. Check out my blog for more details!",
        image: "/images/edward-cisneros-QSa-uv4WJ0k-unsplash.jpg",
        likes: 245,
        comments: 67,
        bookmarks: 102,
        shares: 41,
        location: "asia",
      },
      {
        id: 5,
        username: "Alex Rodriguez",
        profilePic:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        timestamp: "12 hours ago",
        content:
          "Learning React has been a game-changer for my development workflow. Loving every minute of it!",
        image: null,
        likes: 198,
        comments: 44,
        bookmarks: 67,
        shares: 28,
        location: "s_america",
      },
    ];

    let result = [...posts];

    // Apply location filter
    if (filters.location !== "all") {
      result = result.filter((post) => post.location === filters.location);
    }

    // Apply sorting
    switch (filters.sort) {
      case "oldest":
        result.reverse();
        break;
      case "mostLiked":
        result.sort((a, b) => b.likes - a.likes);
        break;
      case "mostCommented":
        result.sort((a, b) => b.comments - a.comments);
        break;
      case "latest":
      default:
        // Already in latest order
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className={cn(classes.container)}>
      {filteredAndSortedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
