
'use client';

import { DictionaryProvider } from '@/contexts/DictionaryContext';

export function Providers({
  dictionary,
  children,
}: {
  dictionary: any;
  children: React.ReactNode;
}) {
  return (
    <DictionaryProvider dictionary={dictionary}>{children}</DictionaryProvider>
  );
}
