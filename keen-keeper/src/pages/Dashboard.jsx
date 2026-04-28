import React from 'react';
import { Link } from 'react-router-dom';
import friendsData from '../data/friends.json';

const Dashboard = () => {
  const total = friendsData.length;
  const onTrack = friendsData.filter(f => f.status === "on-track").length;
  const overdue = friendsData.filter(f => f.status === "overdue").length;

  return (
    <div>
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
        {friendsData.map((friend) => (
          <Link 
            key={friend.id} 
            to={`/friend/${friend.id}`} // এখানে Link যোগ করা হয়েছে
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
          >
            <img 
              src={friend.picture} 
              className="w-20 h-20 rounded-full mb-4" 
              alt={friend.name} 
            />
            <h3 className="font-bold text-gray-800">{friend.name}</h3>
            <p className="text-xs text-gray-400 mb-2">{friend.days_since_contact}d ago</p>
            
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
    </div>
  );
};

export default Dashboard;