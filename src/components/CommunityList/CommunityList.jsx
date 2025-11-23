import React, { useMemo } from "react";
import classes from "./CommunityList.module.css";
import CommunityCard from "../CommunityCard/CommunityCard";

const CommunityList = ({ searchQuery = "" }) => {
  const communities = [
    {
      id: 1,
      name: "Tech Enthusiasts",
      description: "A community for all things technology and innovation",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech",
      members: 5432,
    },
    {
      id: 2,
      name: "Design Lovers",
      description: "Share and discuss UI/UX design trends and inspiration",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=design",
      members: 3201,
    },
    {
      id: 3,
      name: "Digital Marketing",
      description: "Learn and share digital marketing strategies and tips",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=marketing",
      members: 2876,
    },
    {
      id: 4,
      name: "Web Development",
      description: "Everything about web development and modern frameworks",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=webdev",
      members: 6543,
    },
    {
      id: 5,
      name: "Creative Writing",
      description: "A space for writers to share stories and get feedback",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=writing",
      members: 1987,
    },
    {
      id: 6,
      name: "Photography",
      description: "Photography tips, techniques, and stunning photo sharing",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=photo",
      members: 4156,
    },
    {
      id: 7,
      name: "Business & Startups",
      description: "Entrepreneurs sharing insights and building ventures",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=business",
      members: 3421,
    },
    {
      id: 8,
      name: "Fitness & Health",
      description: "Wellness tips, fitness routines, and health discussions",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=fitness",
      members: 7234,
    },
  ];

  const filteredCommunities = useMemo(() => {
    if (!searchQuery.trim()) return communities;

    return communities.filter(
      (community) =>
        community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className={classes.container}>
      {filteredCommunities.length > 0 ? (
        filteredCommunities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))
      ) : (
        <div className={classes.empty}>
          <p>No communities found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default CommunityList;
