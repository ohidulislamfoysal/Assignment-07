const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-slate-500 max-w-lg mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      <button className="bg-emerald-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-800 transition">
        + Add a Friend
      </button>
    </section>
  );
};

export default HeroSection;