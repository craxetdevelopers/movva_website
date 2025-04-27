// /app/admin/movvas/[id]/movva_details/page.tsx

import DashboardLayout from '@/app/admin/DashboardLayout'
import React from 'react'
import AdminMovvaDetails from './components/AdminMovvaDetails'

// Ensure params is handled correctly as per Next.js v15 changes
export const dynamicParams = false;

// No changes needed here for static generation
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ];
}

// Awaiting params to handle the new structure in Next.js v15
export default async function MovvaDetails({ params }: { params: { id: string } }) {
  // Await the params here
  const { id } = await params;

  return (
    <DashboardLayout>
      <AdminMovvaDetails id={id} />
    </DashboardLayout>
  );
}
