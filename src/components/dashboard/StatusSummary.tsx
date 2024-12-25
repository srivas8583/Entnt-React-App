import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import type { Communication, Company } from '../../types';
import { getNextCommunicationDate, getCommunicationStatus, formatDate } from '../../utils/dateUtils';

interface StatusSummaryProps {
  companies: Company[];
  communications: Communication[];
}

export default function StatusSummary({ companies, communications }: StatusSummaryProps) {
  const getCompanyStatus = (company: Company) => {
    const nextDate = getNextCommunicationDate(company, communications);
    return getCommunicationStatus(nextDate);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Overdue Communications</h3>
          <AlertCircle className="h-5 w-5 text-red-500" />
        </div>
        {companies
          .filter(company => getCompanyStatus(company) === 'overdue')
          .map(company => (
            <div key={company.id} className="mb-2 text-sm text-gray-600">
              {company.name} - {formatDate(getNextCommunicationDate(company, communications))}
            </div>
          ))}
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Due Today</h3>
          <Clock className="h-5 w-5 text-yellow-500" />
        </div>
        {companies
          .filter(company => getCompanyStatus(company) === 'due')
          .map(company => (
            <div key={company.id} className="mb-2 text-sm text-gray-600">
              {company.name}
            </div>
          ))}
      </div>
    </div>
  );
}