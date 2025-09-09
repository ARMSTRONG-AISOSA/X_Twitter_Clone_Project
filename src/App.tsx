import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import NavbarMobile from "./components/NavbarMobile";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";
import More from "./pages/More";
import Communities from "./pages/Communities";
import CommunityFeed from "./pages/CommunityFeed";

function App() {


  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar (hidden on <md) */}
        <aside className="col-md-3 col-lg-2 d-none d-md-block border-end p-0 top-0 position-sticky overflow-auto">
          <Sidebar />
        </aside>

        {/* Feed (full width on mobile, centered on desktop) */}
        <main className="col-12 col-md-9 col-lg-6 border-end p-0 vh-100 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/communities/:id" element={<CommunityFeed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </main>

        {/* Rightbar (hidden on <lg) */}
        <aside className="col-lg-4 d-none d-lg-block p-0 position-sticky top-0 vh-100 overflow-auto">
          <Rightbar />
        </aside>
      </div>

      {/* Bottom Navbar (only on mobile) */}
      <div className="d-md-none fixed-bottom bg-white border-top">
        <NavbarMobile />
      </div>
    </div>
  )
}

export default App
