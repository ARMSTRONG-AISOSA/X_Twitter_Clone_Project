import React from "react";
import Trends from "./Trends";
import WhoToFollow from "./WhoToFollow";
import { useCommunities } from "../context/CommunityContext";
import { Link } from "react-router-dom";

const Rightbar: React.FC = () => {
  const { communities, joinedCommunities } = useCommunities();

  const userCommunities = communities.filter((c) =>
    joinedCommunities.includes(c.id)
  );

  return (
    <div className="p-3">
      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded-pill bg-white border-0"
          placeholder="Search Twitter"
        />
      </div>

      {/* Your Communities */}
      {userCommunities.length > 0 && (
        <div className="mb-4">
          <h6 className="fw-bold mb-2">Your Communities</h6>
          <ul className="list-unstyled">
            {userCommunities.map((c) => (
              <li key={c.id} className="mb-2">
                <Link
                  to={`/communities/${c.id}`}
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <img
                    src={c.banner}
                    alt={c.name}
                    className="me-2 rounded"
                    style={{ width: "36px", height: "36px", objectFit: "cover" }}
                  />
                  <span>{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Trends */}
      <Trends />

      {/* Who to Follow */}
      <WhoToFollow />
    </div>
  );
};

export default Rightbar;