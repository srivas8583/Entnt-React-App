import React, { createContext, useState, useEffect } from 'react';
import type { Company, Communication } from '../types';

interface CompanyContextType {
  companies: Company[];
  communications: Communication[];
  addCompany: (data: Partial<Company>) => void;
  updateCompany: (id: string, data: Partial<Company>) => void;
  addCommunication: (data: Partial<Communication>) => void;
  isLoading: boolean;
}

export const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [communications, setCommunications] = useState<Communication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load initial data
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

    const mockCommunications: Communication[] = [
      {
        id: '1',
        companyId: '1',
        type: 'LinkedIn Post',
        date: new Date().toISOString(),
        notes: 'Posted about their new product launch'
      }
    ];

    setCompanies(mockCompanies);
    setCommunications(mockCommunications);
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

  const addCommunication = (data: Partial<Communication>) => {
    const newCommunication: Communication = {
      id: Date.now().toString(),
      companyId: data.companyId!,
      type: data.type!,
      date: data.date || new Date().toISOString(),
      notes: data.notes || ''
    };
    setCommunications(prev => [...prev, newCommunication]);
  };

  return (
    <CompanyContext.Provider value={{
      companies,
      communications,
      addCompany,
      updateCompany,
      addCommunication,
      isLoading
    }}>
      {children}
    </CompanyContext.Provider>
  );
}