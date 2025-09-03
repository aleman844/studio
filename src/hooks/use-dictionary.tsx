"use client";

import { useContext } from 'react';
import { DictionaryContext, DictionaryContextType } from '@/app/providers';

export const useDictionary = (): DictionaryContextType => {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
};
