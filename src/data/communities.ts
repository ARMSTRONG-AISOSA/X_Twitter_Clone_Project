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
// export const communities: Community[] = [
//   {
//     id: 1,
//     name: "React Developers",
//     description: "A place for React enthusiasts ⚛️",
//     banner: "https://picsum.photos/800/200?random=1",
//     members: 2400,
//     posts: [
//       {
//         id: 1,
//         user: {
//           id: 1,
//           name: "Alice",
//           handle: "@alice",
//           avatar: "https://i.pravatar.cc/150?img=15",
//         },
//         content: "Hooks made my life easier 😍 #React",
//         timestamp: "5m",
//         likes: 45,
//         comments: 8,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "TypeScript Nation",
//     description: "For everyone who loves TypeScript 🦕",
//     banner: "https://picsum.photos/800/200?random=2",
//     members: 1800,
//     posts: [
//       {
//         id: 1,
//         user: {
//           id: 2,
//           name: "Bob",
//           handle: "@bob",
//           avatar: "https://i.pravatar.cc/150?img=16",
//         },
//         content: "Types > Bugs ✅",
//         timestamp: "20m",
//         likes: 72,
//         comments: 14,
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "UI/UX Designers",
//     description: "Design is not just how it looks, but how it works 🎨",
//     banner: "https://picsum.photos/800/200?random=3",
//     members: 3200,
//     posts: [
//       {
//         id: 1,
//         user: {
//           id: 3,
//           name: "Charlie",
//           handle: "@charlie",
//           avatar: "https://i.pravatar.cc/150?img=17",
//         },
//         content: "Figma or Sketch? 🤔",
//         timestamp: "1h",
//         likes: 30,
//         comments: 6,
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Node.js Ninjas",
//     description: "All about backend with Node.js 🚀",
//     banner: "https://picsum.photos/800/200?random=4",
//     members: 2100,
//     posts: [
//       {
//         id: 1,
//         user: {
//           id: 4,
//           name: "Diana",
//           handle: "@diana",
//           avatar: "https://i.pravatar.cc/150?img=18",
//         },
//         content: "Express.js middleware is so powerful!",
//         timestamp: "45m",
//         likes: 64,
//         comments: 10,
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "AI & Machine Learning",
//     description: "Exploring the future with AI 🤖",
//     banner: "https://picsum.photos/800/200?random=5",
//     members: 4100,
//     posts: [
//       {
//         id: 1,
//         user: {
//           id: 5,
//           name: "Ethan",
//           handle: "@ethan",
//           avatar: "https://i.pravatar.cc/150?img=19",
//         },
//         content: "Just trained my first model on TensorFlow!",
//         timestamp: "2h",
//         likes: 128,
//         comments: 23,
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "Open Source Hub",
//     description: "Collaborating and contributing together 🌍",
//     banner: "https://picsum.photos/800/200?random=6",
//     members: 1500,
//     posts: [
//       {
//         id: 1,
//         user: {
//           id: 6,
//           name: "Fiona",
//           handle: "@fiona",
//           avatar: "https://i.pravatar.cc/150?img=20",
//         },
//         content: "Just submitted a PR to an open-source project 🎉",
//         timestamp: "3h",
//         likes: 200,
//         comments: 35,
//       },
//     ],
//   },
// ];

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
        user: { id: 1, name: "Alice", handle: "@alice", avatar: "https://i.pravatar.cc/150?img=15" },
        content: "Hooks made my life easier 😍 #React",
        timestamp: "5m",
        likes: 45,
        comments: 8,
      },
      {
        id: 2,
        user: { id: 2, name: "Mike", handle: "@mike", avatar: "https://i.pravatar.cc/150?img=21" },
        content: "React 19 feels super fast! 🚀",
        timestamp: "20m",
        likes: 70,
        comments: 15,
      },
      {
        id: 3,
        user: { id: 3, name: "Sophia", handle: "@sophia", avatar: "https://i.pravatar.cc/150?img=22" },
        content: "Anyone tried Suspense for data fetching?",
        timestamp: "1h",
        likes: 32,
        comments: 6,
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
        user: { id: 4, name: "Bob", handle: "@bob", avatar: "https://i.pravatar.cc/150?img=16" },
        content: "Types > Bugs ✅",
        timestamp: "20m",
        likes: 72,
        comments: 14,
      },
      {
        id: 2,
        user: { id: 5, name: "Laura", handle: "@laura", avatar: "https://i.pravatar.cc/150?img=23" },
        content: "Enums or Union Types — what do you prefer?",
        timestamp: "45m",
        likes: 54,
        comments: 10,
      },
      {
        id: 3,
        user: { id: 6, name: "Tom", handle: "@tom", avatar: "https://i.pravatar.cc/150?img=24" },
        content: "Migrated my project from JS to TS today 🎉",
        timestamp: "2h",
        likes: 110,
        comments: 19,
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
        user: { id: 7, name: "Charlie", handle: "@charlie", avatar: "https://i.pravatar.cc/150?img=17" },
        content: "Figma or Sketch? 🤔",
        timestamp: "1h",
        likes: 30,
        comments: 6,
      },
      {
        id: 2,
        user: { id: 8, name: "Maya", handle: "@maya", avatar: "https://i.pravatar.cc/150?img=25" },
        content: "Dark mode is not just a trend 🌙",
        timestamp: "3h",
        likes: 65,
        comments: 12,
      },
      {
        id: 3,
        user: { id: 9, name: "Leo", handle: "@leo", avatar: "https://i.pravatar.cc/150?img=26" },
        content: "Accessibility first, always ✅",
        timestamp: "5h",
        likes: 42,
        comments: 9,
      },
    ],
  },
  {
    id: 4,
    name: "Node.js Ninjas",
    description: "All about backend with Node.js 🚀",
    banner: "https://picsum.photos/800/200?random=4",
    members: 2100,
    posts: [
      {
        id: 1,
        user: { id: 10, name: "Diana", handle: "@diana", avatar: "https://i.pravatar.cc/150?img=18" },
        content: "Express.js middleware is so powerful!",
        timestamp: "45m",
        likes: 64,
        comments: 10,
      },
      {
        id: 2,
        user: { id: 11, name: "Ken", handle: "@ken", avatar: "https://i.pravatar.cc/150?img=27" },
        content: "Async/await makes life so much easier 😎",
        timestamp: "1h",
        likes: 53,
        comments: 11,
      },
      {
        id: 3,
        user: { id: 12, name: "Zara", handle: "@zara", avatar: "https://i.pravatar.cc/150?img=28" },
        content: "NestJS is 🔥 for enterprise apps",
        timestamp: "4h",
        likes: 101,
        comments: 20,
      },
    ],
  },
  {
    id: 5,
    name: "AI & Machine Learning",
    description: "Exploring the future with AI 🤖",
    banner: "https://picsum.photos/800/200?random=5",
    members: 4100,
    posts: [
      {
        id: 1,
        user: { id: 13, name: "Ethan", handle: "@ethan", avatar: "https://i.pravatar.cc/150?img=19" },
        content: "Just trained my first model on TensorFlow!",
        timestamp: "2h",
        likes: 128,
        comments: 23,
      },
      {
        id: 2,
        user: { id: 14, name: "Nina", handle: "@nina", avatar: "https://i.pravatar.cc/150?img=29" },
        content: "AI ethics is just as important as AI accuracy.",
        timestamp: "6h",
        likes: 88,
        comments: 17,
      },
      {
        id: 3,
        user: { id: 15, name: "Oscar", handle: "@oscar", avatar: "https://i.pravatar.cc/150?img=30" },
        content: "Stable Diffusion outputs some crazy images 🎨",
        timestamp: "10h",
        likes: 142,
        comments: 26,
      },
    ],
  },
  {
    id: 6,
    name: "Open Source Hub",
    description: "Collaborating and contributing together 🌍",
    banner: "https://picsum.photos/800/200?random=6",
    members: 1500,
    posts: [
      {
        id: 1,
        user: { id: 16, name: "Fiona", handle: "@fiona", avatar: "https://i.pravatar.cc/150?img=20" },
        content: "Just submitted a PR to an open-source project 🎉",
        timestamp: "3h",
        likes: 200,
        comments: 35,
      },
      {
        id: 2,
        user: { id: 17, name: "George", handle: "@george", avatar: "https://i.pravatar.cc/150?img=31" },
        content: "First time contributing to OSS — exciting! 🙌",
        timestamp: "8h",
        likes: 95,
        comments: 14,
      },
      {
        id: 3,
        user: { id: 18, name: "Hannah", handle: "@hannah", avatar: "https://i.pravatar.cc/150?img=32" },
        content: "Documentation is as valuable as code 📚",
        timestamp: "12h",
        likes: 76,
        comments: 9,
      },
    ],
  },
];