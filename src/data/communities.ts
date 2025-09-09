export interface CommunityUser {
  id: number;
  name: string;
  handle: string;
  avatar: string;
}

// Post type for community
export interface CommunityPost {
  id: number;
  user: CommunityUser;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

// Community type
export interface Community {
  id: number;
  name: string;
  description: string;
  banner: string;
  members: number;
  posts: CommunityPost[];
}


// Fake data
export const communities: Community[] = [
  {
    id: 1,
    name: "React Developers",
    description: "A place for React enthusiasts ⚛️",
    banner: "https://picsum.photos/800/200?random=1",
    members: 2400,
    posts: [
      {
        id: 1,
        user: {
          id: 1,
          name: "Alice",
          handle: "@alice",
          avatar: "https://i.pravatar.cc/150?img=15",
        },
        content: "Hooks made my life easier 😍 #React",
        timestamp: "5m",
        likes: 45,
        comments: 8,
      },
    ],
  },
  {
    id: 2,
    name: "TypeScript Nation",
    description: "For everyone who loves TypeScript 🦕",
    banner: "https://picsum.photos/800/200?random=2",
    members: 1800,
    posts: [
      {
        id: 1,
        user: {
          id: 2,
          name: "Bob",
          handle: "@bob",
          avatar: "https://i.pravatar.cc/150?img=16",
        },
        content: "Types > Bugs ✅",
        timestamp: "20m",
        likes: 72,
        comments: 14,
      },
    ],
  },
  {
    id: 3,
    name: "UI/UX Designers",
    description: "Design is not just how it looks, but how it works 🎨",
    banner: "https://picsum.photos/800/200?random=3",
    members: 3200,
    posts: [
      {
        id: 1,
        user: {
          id: 3,
          name: "Charlie",
          handle: "@charlie",
          avatar: "https://i.pravatar.cc/150?img=17",
        },
        content: "Figma or Sketch? 🤔",
        timestamp: "1h",
        likes: 30,
        comments: 6,
      },
    ],
  },
];