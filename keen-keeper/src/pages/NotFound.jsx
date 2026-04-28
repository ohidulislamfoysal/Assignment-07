import React from "react";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdOutlineSearchOff } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4">
      
      <div className="text-center bg-white p-10 rounded-2xl shadow-md border border-gray-100 max-w-md w-full relative overflow-hidden">

        {/* decorative blur circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>

        <FiAlertTriangle className="text-emerald-900 text-5xl mx-auto mb-4" />

        <h1 className="text-7xl font-extrabold text-emerald-900 mb-2">
          404
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2 mb-2">
          <MdOutlineSearchOff />
          Page Not Found
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-900 text-white px-6 py-2 rounded-lg hover:bg-emerald-800 transition shadow-sm"
        >
          <FaHome />
          Go Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;