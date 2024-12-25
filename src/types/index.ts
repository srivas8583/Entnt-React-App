export interface Company {
  id: string;
  name: string;
  location: string;
  linkedinProfile: string;
  emails: string[];
  phoneNumbers: string[];
  comments: string;
  communicationPeriodicity: number; // in days
}

export interface Communication {
  id: string;
  companyId: string;
  type: CommunicationType;
  date: string;
  notes: string;
}

export enum CommunicationType {
  LINKEDIN_POST = 'LinkedIn Post',
  LINKEDIN_MESSAGE = 'LinkedIn Message',
  EMAIL = 'Email',
  PHONE_CALL = 'Phone Call',
  OTHER = 'Other'
}

export interface CommunicationMethod {
  name: CommunicationType;
  description: string;
  sequence: number;
  mandatory: boolean;
}