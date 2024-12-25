import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useCommunications } from '../../hooks/useCommunications';
import CalendarDay from './CalendarDay';

export default function CalendarView() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const { communications } = useCommunications();
  
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  });

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
            className="px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            Today
          </button>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
            className="px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <CalendarDay 
            key={day.toISOString()} 
            date={day} 
            communications={communications?.filter(comm => 
              format(new Date(comm.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
            )}
          />
        ))}
      </div>
    </div>
  );
}