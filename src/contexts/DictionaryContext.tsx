
"use client";

import { createContext, useContext } from 'react';

const DictionaryContext = createContext<any>(null);

export const DictionaryProvider = ({ children, dictionary }: { children: React.ReactNode, dictionary: any }) => {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (context === null) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
};
