const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img 
          src="/assets/logo.png" 
          alt="logo" 
          className="object-contain"
        />
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-8">
        
        <li className="bg-emerald-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-emerald-800 transition">
          <img src="/assets/home.png" alt="home" className="w-5 h-5 object-contain" />
          Home
        </li>

        <li className="text-slate-600 cursor-pointer hover:text-emerald-900 flex items-center gap-2 transition">
          <a href=""><img src="/assets/clock.png" alt="timeline" className="w-5 h-5 object-contain" />
          Timeline</a>
        </li>

        <li className="text-slate-600 cursor-pointer hover:text-emerald-900 flex items-center gap-2 transition">
          <a href=""><img src="/assets/graph.png" alt="stats" className="w-5 h-5 object-contain" />
          Stats</a>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;