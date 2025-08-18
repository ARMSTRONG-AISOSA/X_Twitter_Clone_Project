import { NavLink, Routes, Route } from "react-router-dom"
import { posts } from "../data/posts"
import TweetCard from "../components/TweetCard"
import TweetComposer from "../components/TweetComposer"

// Fake filtered feeds (in real app you’d filter posts by category or source)
const forYouPosts = posts
const followingPosts = posts.filter((_, i) => i % 2 === 0)
const buildInPublicPosts = posts.filter((_, i) => i % 2 !== 0)

const Home = () => {
  return (
    <div className="h-100 overflow-auto">
      {/* Top Feed Header */}
      <div className="border-bottom bg-white sticky-top">
        <div className="d-flex justify-content-around fw-bold">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex-fill text-center py-3 text-decoration-none ${
                isActive ? "border-bottom border-primary text-dark" : "text-muted"
              }`
            }
          >
            For you
          </NavLink>

          <NavLink
            to="/following"
            className={({ isActive }) =>
              `flex-fill text-center py-3 text-decoration-none ${
                isActive ? "border-bottom border-primary text-dark" : "text-muted"
              }`
            }
          >
            Following
          </NavLink>

          <NavLink
            to="/build"
            className={({ isActive }) =>
              `flex-fill text-center py-3 text-decoration-none ${
                isActive ? "border-bottom border-primary text-dark" : "text-muted"
              }`
            }
          >
            Build in Public
          </NavLink>
        </div>
      </div>

      {/* Composer (always visible) */}
      <TweetComposer />

      {/* Feed Routes */}
      <Routes>
        <Route
          path="/"
          element={forYouPosts.map((post) => (
            <TweetCard key={post.id} post={post} />
          ))}
        />
        <Route
          path="/following"
          element={followingPosts.map((post) => (
            <TweetCard key={post.id} post={post} />
          ))}
        />
        <Route
          path="/build"
          element={buildInPublicPosts.map((post) => (
            <TweetCard key={post.id} post={post} />
          ))}
        />
      </Routes>
    </div>
  )
}

export default Home
