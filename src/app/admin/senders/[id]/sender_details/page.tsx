import DashboardLayout from '@/app/admin/DashboardLayout';
import React from 'react'
import AdminSenderDetails from './components/AdminSenderDetails';


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

type tParams = Promise<{ id: string }>;

export default async function SenderDetails({ params }: { params:  tParams }) {
    // Await the params here
    const { id }: {id: string} = await params;
  
    return (
      <DashboardLayout>
        <AdminSenderDetails id={id} />
      </DashboardLayout>
    );
  }