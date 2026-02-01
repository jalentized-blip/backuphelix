'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isEditMode: boolean;
  setIsEditMode: (value: boolean) => void;
  isAdmin: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // For this implementation, we'll check for a special query param or localStorage
    // In a real app, this would check a secure session/cookie
    const checkAdmin = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const adminToken = urlParams.get('admin');
      if (adminToken === 'true' || localStorage.getItem('helivex_admin') === 'true') {
        setIsAdmin(true);
        if (adminToken === 'true') localStorage.setItem('helivex_admin', 'true');
      }
    };

    checkAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ isEditMode, setIsEditMode, isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
