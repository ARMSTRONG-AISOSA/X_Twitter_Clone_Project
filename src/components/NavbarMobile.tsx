import { Link } from "react-router-dom"
import { FaHome, FaSearch, FaBell, FaEnvelope } from "react-icons/fa"

const NavbarMobile = () => {

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/explore", icon: <FaSearch />, label: "Explore" },
    { path: "/notifications", icon: <FaBell />, label: "Notifications" },
    { path: "/messages", icon: <FaEnvelope />, label: "Messages" },
  ]


  return (
    <nav className="d-flex justify-content-around align-items-center py-2 bg-white border-top">
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          to={item.path}
          className="text-decoration-none text-dark fs-4 text-primary"
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  )
}

export default NavbarMobile