"use client"

import { useState, useEffect } from 'react';

export default function ProgressBar ({ progress = 45, color = 1 }) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const colors = {
    0: "bg-rose-500",
    1: "bg-amber-500",
    2: "bg-cyan-500",
    3: "bg-lime-500",
    4: "bg-indigo-500",
    5: "bg-teal-500"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress(prev => {
        if (prev < progress) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return progress;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <div
        className={`${colors[color]} h-full rounded-full transition-all duration-300 ease-in-out`}
        style={{ width: `${Math.min(Math.max(currentProgress, 0), 100)}%` }}
      />
    </div>
  );
};


