import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive
        ? 'bg-emerald-900 text-white'
        : 'text-slate-600 hover:text-emerald-900 hover:bg-gray-50'
    }`;

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <ul className="flex items-center gap-8">
        <li>
          <NavLink to="/" end className={linkClass}>
            <img src="/assets/home.png" className="w-5 h-5" alt="home" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className={linkClass}>
            <img src="/assets/clock.png" className="w-5 h-5" alt="timeline" />
            Timeline
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" className={linkClass}>
            <img src="/assets/graph.png" className="w-5 h-5" alt="stats" />
            Stats
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;