import React from 'react';
import { Link } from 'react-router-dom';
import friendsData from '../data/friends.json';

const Home = () => {
  const total = friendsData.length;
  const onTrack = friendsData.filter(f => f.status === "on-track").length;
  const overdue = friendsData.filter(f => f.status === "overdue").length;

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* হিরো সেকশন - এটাই যোগ করলাম */}
      <div className='flex flex-col items-center justify-center py-20 px-4 text-center bg-white'>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 max-w-lg mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-emerald-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-800 transition">
          + Add a Friend
        </button>
      </div>

      {/* বাকি কন্টেন্ট */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-emerald-900">{total}</h2>
            <p className="text-gray-500 text-sm">Total Friends</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-emerald-600">{onTrack}</h2>
            <p className="text-gray-500 text-sm">On Track</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-orange-500">{overdue}</h2>
            <p className="text-gray-500 text-sm">Need Attention</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-emerald-900">30</h2>
            <p className="text-gray-500 text-sm">Interactions This Month</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Your Friends</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <Link 
              key={friend.id} 
              to={`/friend/${friend.id}`}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <img 
                src={friend.picture} 
                className="w-20 h-20 rounded-full mb-4 object-cover" 
                alt={friend.name} 
              />
              <h3 className="font-bold text-gray-800">{friend.name}</h3>
              <p className="text-xs text-gray-400 mb-2">{friend.days_since_contact} days ago</p>
              
              <div className="flex gap-2 mb-4">
                {friend.tags.slice(0, 2).map((t, i) => (
                  <span key={i} className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              
              <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold ${
                friend.status === 'overdue' ? 'bg-red-100 text-red-600' :
                friend.status === 'almost due' ? 'bg-orange-100 text-orange-600' :
                'bg-emerald-100 text-emerald-600'
              }`}>
                {friend.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;