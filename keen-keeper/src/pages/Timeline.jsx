import React, { useContext, useState } from 'react';
import { KeenContext } from '../context/KeenContext';

const Timeline = () => {
  const { timeline } = useContext(KeenContext);
  const [filter, setFilter] = useState('All');

  const getIcon = (title) => {
    if (title.includes('Call')) return '/assets/call.png';
    if (title.includes('Text')) return '/assets/text.png';
    if (title.includes('Video')) return '/assets/video.png';
    return '/assets/logo.png';
  };

  const filteredTimeline = timeline.filter((entry) => {
    if (filter === 'All') return true;
    return entry.title.includes(filter);
  });

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Timeline</h1>

        <div className="mb-4 mr-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-48 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {filteredTimeline.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-500 font-medium">No activities yet</p>
            <p className="text-sm text-gray-400 mt-2">
              Go to any friend's profile and click Call, Text, or Video
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTimeline.map((entry) => (
              <div key={entry.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <img
                      src={getIcon(entry.title)}
                      alt="icon"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{entry.title}</p>
                    <p className="text-xs text-gray-400">{entry.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;