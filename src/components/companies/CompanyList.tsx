import React from 'react';
import { Plus } from 'lucide-react';
import CompanyRow from './CompanyRow';
import CompanyForm from './CompanyForm';
import { useCompanies } from '../../hooks/useCompanies';
import type { Company } from '../../types';

export default function CompanyList() {
  const { companies, isLoading, addCompany, updateCompany } = useCompanies();
  const [showForm, setShowForm] = React.useState(false);
  const [editingCompany, setEditingCompany] = React.useState<Company | null>(null);

  const handleAddCompany = (data: Partial<Company>) => {
    addCompany(data);
    setShowForm(false);
  };

  const handleEditCompany = (data: Partial<Company>) => {
    if (editingCompany) {
      updateCompany(editingCompany.id, data);
      setEditingCompany(null);
    }
  };

  if (isLoading) {
    return <div className="text-center py-4">Loading companies...</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Companies</h2>
        <button 
          onClick={() => setShowForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Company
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periodicity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies?.map((company) => (
              <CompanyRow 
                key={company.id} 
                company={company} 
                onEdit={() => setEditingCompany(company)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {(showForm || editingCompany) && (
        <CompanyForm
          company={editingCompany || undefined}
          onSubmit={editingCompany ? handleEditCompany : handleAddCompany}
          onClose={() => {
            setShowForm(false);
            setEditingCompany(null);
          }}
        />
      )}
    </div>
  );
}