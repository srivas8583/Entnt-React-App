import { useContext } from 'react';
import { CompanyContext } from '../context/CompanyContext';

export function useCompanyContext() {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error('useCompanyContext must be used within a CompanyProvider');
  }
  return context;
}