import React, { createContext, useContext, useState, type ReactNode } from "react";
import { communities as initialCommunities, type Community } from "../data/communities";

interface CommunityContextType {
  communities: Community[];
  joinedCommunities: number[];
  joinCommunity: (id: number) => void;
  leaveCommunity: (id: number) => void;
  addCommunityPost: (communityId: number, post: any) => void;
  addCommunity: (community: Omit<Community, "id" | "members" | "posts">) => void;
}

const CommunityContext = createContext<CommunityContextType | undefined>(undefined);

export const CommunityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [communities, setCommunities] = useState<Community[]>(initialCommunities);
  const [joinedCommunities, setJoinedCommunities] = useState<number[]>([]);

  const joinCommunity = (id: number) => {
    setCommunities((prev) =>
      prev.map((c) => (c.id === id ? { ...c, members: c.members + 1 } : c))
    );
    setJoinedCommunities((prev) => [...new Set([...prev, id])]);
  };

  const leaveCommunity = (id: number) => {
    setCommunities((prev) =>
      prev.map((c) => (c.id === id ? { ...c, members: Math.max(0, c.members - 1) } : c))
    );
    setJoinedCommunities((prev) => prev.filter((cid) => cid !== id));
  };

  const addCommunityPost = (communityId: number, post: any) => {
    setCommunities((prev) =>
      prev.map((c) =>
        c.id === communityId ? { ...c, posts: [post, ...c.posts] } : c
      )
    );
  };

  const addCommunity = (community: Omit<Community, "id" | "members" | "posts">) => {
    const newCommunity: Community = {
      id: communities.length + 1,
      members: 1, // creator auto-joins
      posts: [],
      ...community,
    };
    setCommunities((prev) => [newCommunity, ...prev]);
    setJoinedCommunities((prev) => [...prev, newCommunity.id]);
  };

  return (
    <CommunityContext.Provider
      value={{ communities, joinedCommunities, joinCommunity, leaveCommunity, addCommunityPost, addCommunity }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunities = () => {
  const context = useContext(CommunityContext);
  if (!context) throw new Error("useCommunities must be used within a CommunityProvider");
  return context;
};
