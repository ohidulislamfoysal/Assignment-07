import React, { createContext, useState } from 'react';

export const KeenContext = createContext();

export const KeenProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const [interactions, setInteractions] = useState({
    Text: 0,
    Call: 0,
    Video: 0,
  });

  const addTimelineEntry = (entry) => {
    const newEntry = {
      ...entry,
      id: Date.now(),
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setTimeline((prev) => [newEntry, ...prev]);
  };

  const addInteraction = (type) => {
    setInteractions((prev) => ({
      ...prev,
      [type]: (prev[type] || 0) + 1,
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