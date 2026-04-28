import React, { createContext, useState } from 'react';

export const KeenContext = createContext();

export const KeenProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  // ✅ NEW: interaction tracking for PieChart
  const [interactions, setInteractions] = useState({
    Call: 0,
    Text: 0,
    Video: 0,
  });

  const addTimelineEntry = (entry) => {
    const newEntry = {
      ...entry,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setTimeline((prev) => [newEntry, ...prev]);
  };

  // ✅ NEW FUNCTION: update stats
  const addInteraction = (type) => {
    setInteractions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  return (
    <KeenContext.Provider
      value={{
        timeline,
        addTimelineEntry,
        interactions,
        addInteraction,
      }}
    >
      {children}
    </KeenContext.Provider>
  );
};