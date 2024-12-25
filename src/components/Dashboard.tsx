import React from 'react';
import { useCompanyContext } from '../hooks/useCompanyContext';
import CommunicationTable from './dashboard/CommunicationTable';
import StatusSummary from './dashboard/StatusSummary';

export default function Dashboard() {
  const { companies, communications } = useCompanyContext();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Company Communications</h2>
        </div>
        <CommunicationTable companies={companies} communications={communications} />
      </div>
      <StatusSummary companies={companies} communications={communications} />
    </div>
  );
}