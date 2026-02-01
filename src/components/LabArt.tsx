import React from 'react';

export const LabIcons = {
  Vial: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 2h10" />
      <path d="M10 2v18a2 2 0 0 0 4 0V2" />
      <path d="M10 11h4" />
      <path d="M10 16h4" />
    </svg>
  ),
  Microscope: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 1 1-4 0V7a2 2 0 1 1 4 0v5Z" />
      <path d="M12 7V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4" />
    </svg>
  ),
  Structure: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 7v10" />
      <path d="m5.8 17.2 4.9-4.2" />
      <path d="m18.2 17.2-4.9-4.2" />
    </svg>
  ),
  DNA: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 8 18" />
      <path d="m16 3-8 18" />
      <path d="M12 3v18" />
      <path d="M10 6h4" />
      <path d="M9 9h6" />
      <path d="M8 12h8" />
      <path d="M9 15h6" />
      <path d="M10 18h4" />
    </svg>
  )
};

export const MoleculePattern = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="2" fill="currentColor" fillOpacity="0.2" />
    <path d="M50 50L70 30M50 50L30 30M50 50L50 80" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
    <circle cx="70" cy="30" r="1.5" fill="currentColor" fillOpacity="0.1" />
    <circle cx="30" cy="30" r="1.5" fill="currentColor" fillOpacity="0.1" />
    <circle cx="50" cy="80" r="1.5" fill="currentColor" fillOpacity="0.1" />
  </svg>
);
