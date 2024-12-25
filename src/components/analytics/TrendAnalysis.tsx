import React from 'react';
import { useCommunications } from '../../hooks/useCommunications';

export default function TrendAnalysis() {
  useCommunications();

  const trends = [
    { month: 'Jan', count: 24 },
    { month: 'Feb', count: 28 },
    { month: 'Mar', count: 32 },
    { month: 'Apr', count: 38 },
    { month: 'May', count: 42 },
  ];

  const maxCount = Math.max(...trends.map(t => t.count));

  return (
    <div className="space-y-4">
      {trends.map(({ month, count }) => (
        <div key={month} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{month}</span>
            <span className="font-medium">{count}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: `${(count / maxCount) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}