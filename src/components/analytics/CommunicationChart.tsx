import React from 'react';
import { useCommunications } from '../../hooks/useCommunications';
import { CommunicationType } from '../../types';

export default function CommunicationChart() {
  const { communications } = useCommunications();
  
  const methodCounts = Object.values(CommunicationType).map(type => ({
    type,
    count: communications.filter(c => c.type === type).length
  }));

  const maxCount = Math.max(...methodCounts.map(m => m.count));

  return (
    <div className="space-y-4">
      {methodCounts.map(({ type, count }) => (
        <div key={type} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{type}</span>
            <span className="font-medium">{count}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${(count / maxCount) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}