import React from 'react';
import { format } from 'date-fns';
import type { Company, Communication } from '../../types';
import { getNextCommunicationDate, getCommunicationStatus } from '../../utils/dateUtils';

interface CommunicationTableProps {
  companies: Company[];
  communications: Communication[];
}

export default function CommunicationTable({ companies, communications }: CommunicationTableProps) {
  const getCompanyCommunications = (companyId: string) => {
    return communications
      .filter(comm => comm.companyId === companyId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Communications
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Next Scheduled
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company) => {
            const nextDate = getNextCommunicationDate(company, communications);
            const status = getCommunicationStatus(nextDate);
            const lastComms = getCompanyCommunications(company.id);

            return (
              <tr key={company.id} className={`
                ${status === 'overdue' ? 'bg-red-50' : ''}
                ${status === 'due' ? 'bg-yellow-50' : ''}
                hover:bg-gray-50
              `}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{company.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {lastComms.map((comm) => (
                      <span key={comm.id} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {comm.type} • {format(new Date(comm.date), 'MMM d')}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {format(nextDate, 'MMM d, yyyy')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${status === 'overdue' ? 'bg-red-100 text-red-800' : ''}
                    ${status === 'due' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${status === 'upcoming' ? 'bg-green-100 text-green-800' : ''}
                  `}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}