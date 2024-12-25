import React from 'react';
import { Pencil, Trash2, ExternalLink } from 'lucide-react';
import type { Company } from '../../types';

interface CompanyRowProps {
  company: Company;
  onEdit: () => void;
}

export default function CompanyRow({ company, onEdit }: CompanyRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{company.name}</div>
        <a 
          href={company.linkedinProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-600 hover:text-indigo-900 inline-flex items-center"
        >
          LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{company.location}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">{company.emails[0]}</div>
        {company.phoneNumbers[0] && (
          <div className="text-sm text-gray-500">{company.phoneNumbers[0]}</div>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Every {company.communicationPeriodicity} days</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button 
          onClick={onEdit}
          className="text-indigo-600 hover:text-indigo-900 mr-4"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button className="text-red-600 hover:text-red-900">
          <Trash2 className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}