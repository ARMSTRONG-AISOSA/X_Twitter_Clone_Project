// src/data/fakeTweets.ts

export interface Post {
  id: number;
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  comments: number;
  image?: string;
}

export const posts: Post[] = [
  {
    id: 1,
    user: {
      name: "John Doe",
      handle: "@johndoe",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    content: "Just setting up my Twitter clone 🚀 #react #typescript",
    timestamp: "2m",
    likes: 12,
    retweets: 2,
    comments: 3,
  },
  {
    id: 2,
    user: {
      name: "Sarah Parker",
      handle: "@sarahp",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    content: "Coffee + code = happiness ☕💻",
    timestamp: "10m",
    likes: 55,
    retweets: 12,
    comments: 9,
    image: "https://picsum.photos/400/200"
  },
  {
    id: 3,
    user: {
      name: "Tech Insider",
      handle: "@techinsider",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "Breaking: React 19 has officially dropped. ⚛️🔥",
    timestamp: "25m",
    likes: 302,
    retweets: 88,
    comments: 47,
  },
  {
    id: 4,
    user: {
      name: "Jane Smith",
      handle: "@janesmith",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    content: "Weekend vibes 🌴✨",
    timestamp: "1h",
    likes: 120,
    retweets: 20,
    comments: 15,
    image: "https://picsum.photos/400/250"
  },
  {
    id: 5,
    user: {
      name: "Elon Musk",
      handle: "@elonmusk",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    content: "AI is going to change everything. 🤖",
    timestamp: "2h",
    likes: 1543,
    retweets: 329,
    comments: 198,
  },
  {
    id: 6,
    user: {
      name: "Code Wizard",
      handle: "@codewizard",
      avatar: "https://i.pravatar.cc/150?img=6"
    },
    content: "Fun fact: You can center a div with 3 lines of CSS 😉",
    timestamp: "3h",
    likes: 98,
    retweets: 33,
    comments: 12,
    image: "https://picsum.photos/400/280"
  },
  {
    id: 7,
    user: {
      name: "Music Lover",
      handle: "@beatsdaily",
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    content: "Drake just dropped another hit 🔥🎶 #NowPlaying",
    timestamp: "5h",
    likes: 210,
    retweets: 45,
    comments: 33,
  },
  {
    id: 8,
    user: {
      name: "Alex Johnson",
      handle: "@alexj",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    content: "Building my first full-stack app! Wish me luck 🍀",
    timestamp: "7h",
    likes: 77,
    retweets: 14,
    comments: 19,
  },
  {
    id: 9,
    user: {
      name: "Crypto News",
      handle: "@cryptonews",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    content: "Bitcoin just hit $100,000! 🚀🌕",
    timestamp: "10h",
    likes: 1800,
    retweets: 560,
    comments: 243,
    image: "https://picsum.photos/400/230"
  },
  {
    id: 10,
    user: {
      name: "Random Guy",
      handle: "@randomguy",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    content: "Pineapple on pizza? Yes or no? 🍍🍕",
    timestamp: "12h",
    likes: 430,
    retweets: 61,
    comments: 99,
  },
  // 👇 You can duplicate and vary these to generate 30–50 tweets quickly
  {
    id: 11,
    user: {
      name: "Emma Wilson",
      handle: "@emmawilson",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    content: "React + Vite is such a smooth dev experience ⚡",
    timestamp: "14h",
    likes: 270,
    retweets: 58,
    comments: 42,
  },
  {
    id: 12,
    user: {
      name: "Football Fan",
      handle: "@footiefan",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    content: "Messi or Ronaldo? ⚽🐐",
    timestamp: "16h",
    likes: 890,
    retweets: 203,
    comments: 315,
  },
];
