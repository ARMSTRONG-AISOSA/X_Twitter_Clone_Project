import { useState } from "react"

const TweetComposer = () => {

    const [tweet, setTweet] = useState("");

    const handlePost = () => {
        if (!tweet.trim()) return
        console.log("New Tweet:", tweet) // Later, we can push to posts[]
        setTweet("")
    }

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