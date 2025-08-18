import React from "react";
import Trends from "./Trends";
import WhoToFollow from "./WhoToFollow";

const Rightbar: React.FC = () => {
  return (
    <div className="p-3">
      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded-pill bg-white border-0"
          placeholder="Search Twitter"
          // style={{ border: "1px solid white" }}
        />
      </div>

      {/* Trends */}
      <Trends />

      {/* Who to Follow */}
       <WhoToFollow />
    </div>
  );
};

export default Rightbar;
