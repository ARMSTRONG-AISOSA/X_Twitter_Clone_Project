import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa"
import type { Post } from "../data/posts"

interface TweetCardProps {
  post: Post
}

export default function TweetCard({ post }: TweetCardProps) {
  return (
    <div className="border-bottom p-3 d-flex">
      {/* Avatar */}
      <img
        src={post.user.avatar}
        alt={post.user.name}
        className="rounded-circle me-3"
        style={{ width: "48px", height: "48px" }}
      />

      {/* Tweet Content */}
      <div className="flex-grow-1">
        <div className="d-flex align-items-center">
          <strong>{post.user.name}</strong>
          <span className="text-muted ms-2">
            {post.user.handle} · {post.timestamp}
          </span>
        </div>
        <p className="mb-2">{post.content}</p>

        {/* Actions */}
        <div className="d-flex justify-content-between text-muted" style={{ maxWidth: "400px" }}>
          <span><FaRegComment /> {post.comments}</span>
          <span><FaRetweet /> {post.retweets}</span>
          <span><FaRegHeart /> {post.likes}</span>
        </div>
      </div>
    </div>
  )
}
