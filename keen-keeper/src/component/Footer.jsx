const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-10 text-center">
      <h2 className="text-6xl font-bold mb-2">KeenKeeper</h2>
      <p className="text-shadow-white text-sm mb-6">Your personal shelf of meaningful connections.</p>
      
      <div className="flex justify-center gap-4 mb-8">
        <img src="/assets/instagram.png" alt="Instagram" className="w-10 h-10" />
        <img src="/assets/facebook.png" alt="Facebook" className="w-10 h-10" />
        <img src="/assets/twitter.png" alt="Twitter" className="w-10 h-10" />
      </div>

      <div className="text-xs text-shadow-white">
        © 2026 KeenKeeper. All rights reserved. | Privacy Policy | Terms of Service | Cookies
      </div>
    </footer>
  );
};
export default Footer;