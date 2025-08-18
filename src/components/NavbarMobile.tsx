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

    // <ul className="nav nav-pills flex-column w-100">
    //     {menuItems.map((item, idx) => (
    //       <li key={idx} className="nav-item">
    //         <Link to={item.path} className="nav-link d-flex align-items-center mb-2 fs-5">
    //           {item.icon}
    //           <span className="d-none d-xl-inline">{item.label}</span>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
  )
}

export default NavbarMobile