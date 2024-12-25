import React from 'react';
import { useCommunications } from '../../hooks/useCommunications';
import { CommunicationType } from '../../types';

export default function EffectivenessMetrics() {
  useCommunications();

  const metrics = [
    {
      type: CommunicationType.LINKEDIN_POST,
      effectiveness: 85,
      label: 'LinkedIn Posts',
    },
    {
      type: CommunicationType.EMAIL,
      effectiveness: 72,
      label: 'Emails',
    },
    {
      type: CommunicationType.PHONE_CALL,
      effectiveness: 95,
      label: 'Phone Calls',
    },
  ];

  return (
    <div className="space-y-4">
      {metrics.map(({ label, effectiveness }) => (
        <div key={label} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{label}</span>
            <span className="font-medium">{effectiveness}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${effectiveness}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}