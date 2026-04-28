import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { KeenContext } from '../context/KeenContext';

const Stats = () => {
  const { interactions = {} } = useContext(KeenContext);

  const data = [
    { name: 'Text', value: interactions.Text || 0, color: '#8b5cf6' },
    { name: 'Call', value: interactions.Call || 0, color: '#14532d' },
    { name: 'Video', value: interactions.Video || 0, color: '#10b981' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Friendship Analytics
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg text-gray-500 mb-6">
            By Interaction Type
          </h2>

          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={6}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>


          <div className="flex justify-center gap-8 mt-6 flex-wrap">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-600 text-sm">
                  {item.name} ({item.value})
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;