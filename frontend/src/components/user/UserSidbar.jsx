import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaPlusCircle, FaHistory } from "react-icons/fa";

const UserSidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${
      location.pathname === path
        ? "bg-indigo-500 text-white shadow-md"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-5 hidden md:flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-indigo-600">My Space</h2>

      <nav className="flex flex-col gap-2">
        <Link to="/" className={linkClass("/")}>
          <FaHome /> Home
        </Link>

        <Link to="/profile" className={linkClass("/profile")}>
          <FaUser /> Profile
        </Link>

        <Link to="/create-article" className={linkClass("/create-article")}>
          <FaPlusCircle /> Create
        </Link>

        <Link to="/history" className={linkClass("/history")}>
          <FaHistory /> History
        </Link>
      </nav>

      <div className="mt-auto text-xs text-gray-400 pt-10">© 2026 Blog App</div>
    </aside>
  );
};

export default UserSidebar;
