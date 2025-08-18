export interface Post {
    id: number
    user: {
        name: string
        handle: string
        avatar: string
    }
    content: string
    timestamp: string
    comments: number
    retweets: number
    likes: number
}

export const posts: Post[] = [
    {
        id: 1,
        user: {
            name: "Ben Tony",
            handle: "@bentony",
            avatar: "https://i.pravatar.cc/50?img=1",
        },
        content: "Just setting up my Twitter clone 🚀 #React #TypeScript",
        timestamp: "2h",
        comments: 12,
        retweets: 5,
        likes: 23,
    },
    {
        id: 2,
        user: {
            name: "Jane Doe",
            handle: "@janedoe",
            avatar: "https://i.pravatar.cc/50?img=2",
        },
        content: "Bootstrap + React + Vite is 🔥",
        timestamp: "4h",
        comments: 8,
        retweets: 3,
        likes: 19,
    },
    {
        id: 3,
        user: {
            name: "John Smith",
            handle: "@johnsmith",
            avatar: "https://i.pravatar.cc/50?img=3",
        },
        content: "Working on a Twitter UI clone. Loving the progress so far!",
        timestamp: "1d",
        comments: 20,
        retweets: 10,
        likes: 40,
    },
]