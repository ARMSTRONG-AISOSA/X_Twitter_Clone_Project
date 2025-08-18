import { posts } from "../data/posts"
import TweetCard from "../components/TweetCard"
import TweetComposer from "../components/TweetComposer"

const Home = () => {
  return (
    <div className="h-100 overflow-auto">
      {/* Top Feed Header */}
      <div className="border-bottom p-3 fw-bold fs-5 bg-white sticky-top">
        Home
      </div>

      {/* Composer */}
      <TweetComposer />

      {/* Map Posts */}
      {posts.map((post) => (
        <TweetCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home