import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaUser, FaEllipsisH, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Sidebar = () => {

  const { user } = useUser(); // get user

  // Define menu items
  const menuItems = [
    { label: "Home", icon: <FaHome className="me-3 fs-4" />, path: "/" },
    { label: "Explore", icon: <FaHashtag className="me-3 fs-4" />, path: "/explore" },
    { label: "Notifications", icon: <FaBell className="me-3 fs-4" />, path: "/notifications" },
    { label: "Messages", icon: <FaEnvelope className="me-3 fs-4" />, path: "/messages" },
    { label: "Bookmarks", icon: <FaBookmark className="me-3 fs-4" />, path: "/bookmarks" },
    { label: "Communities", icon: <FaUser className="me-3 fs-4" />, path: "/communities" },
    { label: "Profile", icon: <FaUser className="me-3 fs-4" />, path: "/profile" },
    { label: "More", icon: <FaEllipsisH className="me-3 fs-4" />, path: "/more" },
  ]


  return (
    <div className="d-flex justify-content-between flex-column align-items-start p-3 sticky-top" style={{ height: "100vh" }}>
      {/* Logo */}
      <Link to="/" className="d-flex align-items-center mb-4 text-decoration-none text-primary fs-2">
        <FaTwitter />
      </Link>

      {/* Navigation Links */}
      <ul className="nav nav-pills flex-column w-100">
        {menuItems.map((item, idx) => (
          <li key={idx} className="nav-item">
            <Link to={item.path} className="nav-link d-flex align-items-center mb-2 fs-5">
              {item.icon}
              <span className="d-none d-xl-inline">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Tweet Button (full width on desktop, icon only on tablet) */}
      <button className="btn btn-primary rounded-pill mt-3 w-100 d-none d-xl-block">
        Tweet
      </button>
      <button className="btn btn-primary rounded-circle mt-3 d-xl-none">
        <FaTwitter />
      </button>

      {/* Profile Section */}
      <div className="d-flex align-items-center mt-auto p-2 rounded hover-bg w-100">
        <img
          src="https://i.pravatar.cc/120"
          alt="profile"
          className="rounded-circle me-2"
          width={40}
          height={40}
        />
        <div className="d-none d-xl-flex flex-column">
          <span className="fw-bold">{user.name}</span>
          <span className="text-muted">{user.handle}</span>
        </div>
        <FaEllipsisH className="ms-auto fs-5" />
      </div>
    </div>
  )
}

export default Sidebar