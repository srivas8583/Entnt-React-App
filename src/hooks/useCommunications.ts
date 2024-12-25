import { useState, useEffect } from 'react';
import type { Communication } from '../types';

export function useCommunications() {
  const [communications, setCommunications] = useState<Communication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockCommunications: Communication[] = [
      {
        id: '1',
        companyId: '1',
        type: 'LinkedIn Post',
        date: new Date().toISOString(),
        notes: 'Posted about their new product launch'
      }
    ];

    setCommunications(mockCommunications);
    setIsLoading(false);
  }, []);

  return { communications, isLoading };
}