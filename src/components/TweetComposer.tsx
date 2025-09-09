import { useState } from "react";
import { usePosts } from "../context/PostContext";
import { useUser } from "../context/UserContext";

const TweetComposer = () => {

    const [tweet, setTweet] = useState("");
    const { addPost, posts } = usePosts(); // get post from context
    const { user } = useUser(); // get user from context

    const handlePost = () => {
        if (!tweet.trim()) return;

        // Post & User info
        const newPost = {
            id: posts.length + 1,
            user, // passed in user info
            content: tweet,
            timestamp: "Just now",
            likes: 0,
            retweets: 0,
            comments: 0,
        };

        addPost(newPost);
        // console.log("New Tweet:", tweet); // log tweet out
        // console.log("Post details:", newPost); // log post out
        setTweet("");
    };

    return (
        <div className="border-bottom p-3 d-flex">
            {/* Avatar */}
            <img
                src="https://i.pravatar.cc/50?img=5"
                alt="You"
                className="rounded-circle me-3"
                style={{ width: "48px", height: "48px" }}
            />

            {/* Input + Button */}
            <div className="flex-grow-1">
                <textarea
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                    className="form-control border-0 p-0"
                    placeholder="What is happening?!"
                    rows={2}
                />
                <div className="d-flex justify-content-end mt-2">
                    <button
                        onClick={handlePost}
                        className="btn btn-primary rounded-pill px-3"
                        disabled={!tweet.trim()}
                    // tweet.trim() → ensures we’re working with meaningful text.
                    // !tweet.trim() → lets us block empty/whitespace-only tweets.
                    >
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TweetComposer