import { useParams, Link } from "react-router-dom";
import { useCommunities } from "../context/CommunityContext";
import { useState } from "react";
import { useUser } from "../context/UserContext";

const CommunityFeed = () => {

  const { user } = useUser(); // get user from context

  const { id } = useParams();
  const { communities, addCommunityPost } = useCommunities();
  const community = communities.find((c) => c.id === Number(id)); // find cummunity matching :"id"

  const [newPost, setNewPost] = useState("");

  if (!community) {
    return <p className="p-3">Community not found 😢</p>;
  }

  const handlePost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      user,
      content: newPost,
      timestamp: "now",
      likes: 0,
      comments: 0,
    };

    addCommunityPost(community.id, post);
    setNewPost("");
  };

  return (
    <div className="h-100 overflow-auto">
      {/* Header */}
      <div className="border-bottom p-3 fw-bold fs-5 bg-white sticky-top d-flex align-items-center">
        <Link to="/communities" className="me-3 text-decoration-none">
          ⬅ Back
        </Link>
        {community.name}
      </div>

      {/* Banner */}
      <img
        src={community.banner}
        alt={community.name}
        className="img-fluid w-100"
      />

      {/* Description */}
      <div className="p-3 border-bottom">
        <h5>{community.name}</h5>
        <p className="text-muted">{community.description}</p>
        <p className="small text-muted">{community.members} members</p>
      </div>

      {/* Post Composer */}
      <div className="p-3 border-bottom d-flex">
        <img
          src="https://i.pravatar.cc/150?img=21"
          alt="me"
          className="rounded-circle me-2"
          width={40}
          height={40}
        />
        <input
          type="text"
          className="form-control rounded-pill"
          placeholder="Write something..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={handlePost}>
          Post
        </button>
      </div>

      {/* Posts */}
      {community.posts.map((post) => (
        <div key={post.id} className="p-3 border-bottom">
          <div className="d-flex align-items-center mb-2">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="rounded-circle me-2"
              width={40}
              height={40}
            />
            <div>
              <strong>{post.user.name}</strong>{" "}
              <span className="text-muted">{post.user.handle}</span>
              <div className="small text-muted">{post.timestamp}</div>
            </div>
          </div>
          <p>{post.content}</p>
          <div className="text-muted small">
            ❤️ {post.likes} · 💬 {post.comments}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityFeed;
