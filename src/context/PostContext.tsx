import React, { createContext, useContext, useState, type ReactNode } from "react";
import { posts as initialPosts, type Post } from "../data/posts";
// note to self: renaming as later in the context, we’ll have a posts state

interface PostContextType {
    posts: Post[];
    addPost: (newPost: Post) => void;
    //   delete post
    // Update post
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);

    const addPost = (newPost: Post) => {
        setPosts((prev) => [newPost, ...prev]); // new tweet appears first
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
};

// Custom hook for consuming context
export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
};