import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { KeenContext } from '../context/KeenContext';
import friendsData from '../data/friends.json';

const FriendDetails = () => {
  const { id } = useParams();
  const { addTimelineEntry, addInteraction } = useContext(KeenContext);

  const friend = friendsData.find((f) => f.id === Number(id));

  const handleInteraction = (type) => {
    const newEntry = {
      title: `${type} with ${friend.name}`,
    };

    addTimelineEntry(newEntry);
    addInteraction(type);

    toast.success(`${type} with ${friend.name}`);
  };

  return (
    <div className="p-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-24 h-24 rounded-full object-cover mb-4" 
            />
            <h1 className="text-xl font-bold text-gray-800">{friend.name}</h1>

            <div className="flex gap-2 my-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                friend.status === 'overdue' ? 'bg-red-100 text-red-600' : 
                friend.status === 'almost due' ? 'bg-orange-100 text-orange-600' :
                'bg-green-100 text-green-600'
              }`}>
                {friend.status}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600 capitalize">
                {friend.tags[0]}
              </span>
            </div>

            <p className="text-sm text-gray-500 italic mb-4">"{friend.bio}"</p>
            <p className="text-xs text-gray-400 mb-6">Preferred: email</p>

            <div className="w-full space-y-2">
              <button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                Snooze 2 Weeks
              </button>
              <button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                Archive
              </button>
              <button className="w-full py-2 border border-gray-200 text-red-500 text-sm font-medium hover:bg-red-50 rounded-lg transition">
                Delete
              </button>
            </div>
          </div>

    
          <div className="md:col-span-2 space-y-6">

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h2 className="text-2xl font-bold text-emerald-900">
                  {friend.days_since_contact}
                </h2>
                <p className="text-xs text-gray-500">Days Since Contact</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h2 className="text-2xl font-bold text-emerald-900">30</h2>
                <p className="text-xs text-gray-500">Interactions This Month</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h2 className="text-sm font-bold text-emerald-900">
                  {(() => {
                    const daysLeft = 30 - friend.days_since_contact;
                    const nextDate = new Date();
                    nextDate.setDate(nextDate.getDate() + daysLeft);
                    return nextDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  })()}
                </h2>
                <p className="text-xs text-gray-500">Next Due</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-4">

                <button 
                  onClick={() => handleInteraction('Call')}
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                >
                  <img src="/assets/call.png" alt="" className='w-7 h-7' />
                  <span className="text-sm font-medium">Call</span>
                </button>

                <button 
                  onClick={() => handleInteraction('Text')}
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                >
                  <img src="/assets/text.png" alt="" className='w-7 h-7'/>
                  <span className="text-sm font-medium">Text</span>
                </button>

                <button 
                  onClick={() => handleInteraction('Video')}
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                >
                  <img src="/assets/video.png" alt="" className='w-7 h-7'/>
                  <span className="text-sm font-medium">Video</span>
                </button>

              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Relationship Goal</span>
                <span className="text-gray-800 text-sm">
                  Connect every <span className="font-bold">30 days</span>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;