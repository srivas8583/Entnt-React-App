import { format, addDays, isAfter, isBefore, isToday } from 'date-fns';
import type { Company, Communication } from '../types';

export function getNextCommunicationDate(company: Company, communications: Communication[]) {
  const lastComm = communications
    .filter(comm => comm.companyId === company.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  if (!lastComm) return new Date();
  
  return addDays(new Date(lastComm.date), company.communicationPeriodicity);
}

export function getCommunicationStatus(nextDate: Date) {
  if (isBefore(nextDate, new Date())) return 'overdue';
  if (isToday(nextDate)) return 'due';
  return 'upcoming';
}

export function formatDate(date: Date, formatString: string = 'MMM d, yyyy') {
  return format(date, formatString);
}