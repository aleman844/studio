import { redirect } from 'next/navigation';

export default function RootPage() {
  // This page only redirects to the localized homepage
  redirect('/es');
}
