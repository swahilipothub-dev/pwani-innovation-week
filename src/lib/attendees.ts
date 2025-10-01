export const SUBCOUNTIES = [
  'nyali',
  'mvita',
  'likoni',
  'changamwe',
  'jomvu',
  'kisauni',
  'other',
] as const;

export const MANAGEMENT_DEPARTMENTS = [
  'tech',
  'creatives',
  'communications',
  'hr and admin',
  'case management',
  'swahilipotfm',
  'heritage',
  'hospitality',
  'health',
  'youth engagement',
  'campus ambassadors',
  'finance and procurement',
  'internal volunteers',
  'entrepreneurship',
] as const;

export type Subcounty = (typeof SUBCOUNTIES)[number];
export type ManagementDepartment = (typeof MANAGEMENT_DEPARTMENTS)[number];
