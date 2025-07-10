import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { to: "/", label: "🏠 Home" },
    { to: "/log-mood", label: "😐 Vibe Check" },
    { to: "/admin", label: "💀 Emotional Damage" },
  ];

  const linkClass = (to) =>
    `text-lg transition ${
      isActive(to)
        ? "text-blue-600 dark:text-yellow-400 font-semibold"
        : "text-gray-700 dark:text-gray-300"
    } hover:text-blue-500 dark:hover:text-yellow-500`;

  return (
    <header className="sticky top-0 z-50 bg-slate-100 dark:bg-zinc-900 shadow-md">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-wide text-blue-600 dark:text-yellow-300">
          🐝 UniHive
        </h1>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to} className={linkClass(to)}>
              {label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:scale-110"
            title="Toggle Dark Mode"
          >
            🌓
          </button>
          <button className="ml-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
            🔐 Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-start gap-4 p-4 lg:hidden bg-slate-200 dark:bg-zinc-800">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={linkClass(to)}
              onClick={() => setMenuOpen(false)} // close menu after click
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:scale-110"
            title="Toggle Dark Mode"
          >
            🌓
          </button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
            🔐 Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
