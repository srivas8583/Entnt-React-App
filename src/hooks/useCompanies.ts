import { useState, useEffect } from 'react';
import type { Company } from '../types';

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockCompanies: Company[] = [
      {
        id: '1',
        name: 'Example Corp',
        location: 'New York, NY',
        linkedinProfile: 'https://linkedin.com/company/example-corp',
        emails: ['contact@example.com'],
        phoneNumbers: ['+1 (555) 123-4567'],
        comments: 'Key tech company in NY area',
        communicationPeriodicity: 14
      }
    ];

    setCompanies(mockCompanies);
    setIsLoading(false);
  }, []);

  const addCompany = (data: Partial<Company>) => {
    const newCompany: Company = {
      id: Date.now().toString(),
      name: data.name!,
      location: data.location!,
      linkedinProfile: data.linkedinProfile!,
      emails: data.emails || [],
      phoneNumbers: data.phoneNumbers || [],
      comments: data.comments || '',
      communicationPeriodicity: data.communicationPeriodicity || 14
    };
    setCompanies(prev => [...prev, newCompany]);
  };

  const updateCompany = (id: string, data: Partial<Company>) => {
    setCompanies(prev => prev.map(company => 
      company.id === id ? { ...company, ...data } : company
    ));
  };

  return { companies, isLoading, addCompany, updateCompany };
}