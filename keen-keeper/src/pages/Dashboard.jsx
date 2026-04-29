import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import friendsData from '../data/friends.json';

const Dashboard = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

  const total = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const overdue = friends.filter(f => f.status === "overdue").length;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-900 rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm">Loading friends...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Friends", val: total },
          { label: "On Track", val: onTrack },
          { label: "Need Attention", val: overdue },
          { label: "Interactions", val: 12 }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
            <h2 className="text-2xl font-bold">{item.val}</h2>
            <p className="text-gray-500 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link 
            key={friend.id} 
            to={`/friend/${friend.id}`}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
          >
            <img 
              src={friend.picture} 
              className="w-20 h-20 rounded-full mb-4" 
              alt={friend.name} 
            />
            <h3 className="font-bold text-gray-800">{friend.name}</h3>
            <p className="text-xs text-gray-400 mb-2">
              {friend.days_since_contact}d ago
            </p>
            <div className="flex gap-2 mb-4">
              {friend.tags.map((t, i) => (
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
  );
};

export default Dashboard;