import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaPlus, FaBookmark, FaUsers, FaUser, FaEllipsisH } from "react-icons/fa";

const NavbarMobile = () => {
  const [showFabMenu, setShowFabMenu] = useState(false);

  const mainNavItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/explore", icon: <FaSearch />, label: "Explore" },
    { path: "/notifications", icon: <FaBell />, label: "Notifications" },
    { path: "/messages", icon: <FaEnvelope />, label: "Messages" },
  ];

  const fabNavItems = [
    { path: "/bookmarks", icon: <FaBookmark />, label: "Bookmarks" },
    { path: "/communities", icon: <FaUsers />, label: "Communities" },
    { path: "/profile", icon: <FaUser />, label: "Profile" },
    { path: "/more", icon: <FaEllipsisH />, label: "More" },
  ];

  return (
    <>
      {/* Bottom Navbar */}
      <nav className="d-flex justify-content-around align-items-center py-2 bg-white border-top">
        {mainNavItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="text-decoration-none text-dark fs-4"
          >
            {item.icon}
          </Link>
        ))}
      </nav>

      {/* Floating Action Button */}
      <button
        className="btn btn-primary rounded-circle position-fixed"
        style={{
          bottom: "70px",
          right: "20px",
          width: "55px",
          height: "55px",
          zIndex: 1050,
        }}
        onClick={() => setShowFabMenu(!showFabMenu)}
      >
        <FaPlus className="fs-4" />
      </button>

      {/* FAB Menu */}
      {showFabMenu && (
        <div
          className="position-fixed bg-white shadow rounded p-2"
          style={{
            bottom: "130px",
            right: "20px",
            zIndex: 1049,
          }}
        >
          {fabNavItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="d-flex align-items-center text-decoration-none text-dark py-2 px-2"
              onClick={() => setShowFabMenu(false)}
            >
              <span className="me-2">{item.icon}</span> {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
