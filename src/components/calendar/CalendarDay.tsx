import React from 'react';
import { format } from 'date-fns';
import type { Communication } from '../../types';

interface CalendarDayProps {
  date: Date;
  communications?: Communication[];
}

export default function CalendarDay({ date, communications }: CalendarDayProps) {
  return (
    <div className="min-h-[100px] bg-white p-2">
      <div className="text-sm text-gray-500">{format(date, 'd')}</div>
      <div className="mt-1 space-y-1">
        {communications?.map((comm) => (
          <div
            key={comm.id}
            className="text-xs p-1 rounded truncate"
            style={{
              backgroundColor: getTypeColor(comm.type).bg,
              color: getTypeColor(comm.type).text
            }}
          >
            {comm.type}
          </div>
        ))}
      </div>
    </div>
  );
}

function getTypeColor(type: string) {
  const colors = {
    'LinkedIn Post': { bg: '#E8F5E9', text: '#2E7D32' },
    'LinkedIn Message': { bg: '#E3F2FD', text: '#1565C0' },
    'Email': { bg: '#FFF3E0', text: '#E65100' },
    'Phone Call': { bg: '#F3E5F5', text: '#7B1FA2' },
    'Other': { bg: '#ECEFF1', text: '#455A64' }
  };
  return colors[type as keyof typeof colors] || colors.Other;
}