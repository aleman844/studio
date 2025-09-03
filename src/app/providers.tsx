"use client";

import { createContext, ReactNode } from 'react';

export type DictionaryContextType = any;

export const DictionaryContext = createContext<DictionaryContextType>(null);

export default function Providers({ children, dictionary }: { children: ReactNode, dictionary: any }) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}
