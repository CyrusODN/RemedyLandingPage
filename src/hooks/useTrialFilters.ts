import { useState, useCallback } from 'react';
import type { TrialCategory, TrialStatus } from '../types/trial';

interface TrialFilters {
  search: string;
  category: TrialCategory | '';
  status: TrialStatus | '';
  location?: string;
}

export function useTrialFilters() {
  const [filters, setFilters] = useState<TrialFilters>({
    search: '',
    category: '',
    status: '',
  });

  const updateFilter = useCallback((key: keyof TrialFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      search: '',
      category: '',
      status: '',
    });
  }, []);

  return {
    filters,
    updateFilter,
    resetFilters,
  };
}