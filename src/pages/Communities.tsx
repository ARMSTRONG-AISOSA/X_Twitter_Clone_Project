import { Link } from "react-router-dom";
import { useCommunities } from "../context/CommunityContext";
import { useState } from "react";

const Communities = () => {
  const { communities, joinedCommunities, joinCommunity, leaveCommunity, addCommunity } = useCommunities();
  const [showJoined, setShowJoined] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newBanner, setNewBanner] = useState("");

  const visibleCommunities = showJoined
    ? communities.filter((c) => joinedCommunities.includes(c.id))
    : communities;

  const handleCreateCommunity = () => {
    if (!newName.trim()) return;
    addCommunity({
      name: newName,
      description: newDesc || "A new community",
      banner: newBanner || "https://picsum.photos/600/200",
    });
    setNewName("");
    setNewDesc("");
    setNewBanner("");
    (window as any).bootstrap?.Modal.getInstance(document.getElementById("createCommunityModal"))?.hide();
  };

  return (
    <div className="h-100 overflow-auto">
      {/* Header */}
      <div className="border-bottom p-3 d-flex justify-content-between align-items-center fw-bold fs-5 bg-white sticky-top">
        <span>Communities</span>
        <button
          className="btn btn-primary btn-sm rounded-pill"
          data-bs-toggle="modal"
          data-bs-target="#createCommunityModal"
        >
          Create
        </button>
      </div>

      {/* Tabs */}
      <div className="d-flex border-bottom">
        <button
          className={`flex-fill btn ${!showJoined ? "btn-primary" : "btn-light"}`}
          onClick={() => setShowJoined(false)}
        >
          All
        </button>
        <button
          className={`flex-fill btn ${showJoined ? "btn-primary" : "btn-light"}`}
          onClick={() => setShowJoined(true)}
        >
          Joined
        </button>
      </div>

      {/* Community List */}
      {visibleCommunities.length > 0 ? (
        visibleCommunities.map((community) => (
          <div key={community.id} className="border-bottom p-3">
            <Link
              to={`/communities/${community.id}`}
              className="text-decoration-none text-dark"
            >
              <img
                src={community.banner}
                alt={community.name}
                className="img-fluid rounded mb-2"
              />
              <h5>{community.name}</h5>
            </Link>

            <p className="text-muted">{community.description}</p>
            <p className="small text-muted">{community.members} members</p>

            {joinedCommunities.includes(community.id) ? (
              <button
                className="btn btn-outline-danger btn-sm rounded-pill"
                onClick={() => leaveCommunity(community.id)}
              >
                Leave
              </button>
            ) : (
              <button
                className="btn btn-outline-primary btn-sm rounded-pill"
                onClick={() => joinCommunity(community.id)}
              >
                Join
              </button>
            )}
          </div>
        ))
      ) : (
        <p className="p-3 text-muted">No communities found</p>
      )}

      {/* Create Community Modal */}
      <div className="modal fade" id="createCommunityModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Community</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Community name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Description"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Banner image URL"
                value={newBanner}
                onChange={(e) => setNewBanner(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleCreateCommunity}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
