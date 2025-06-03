// /app/admin/movvas/[id]/movva_details/page.tsx

import DashboardLayout from "@/app/admin/DashboardLayout";
import React from "react";
import AdminMovvaDetails from "./components/AdminMovvaDetails";
import axios from "axios";


// No changes needed here for static generation
export async function generateStaticParams() {
   
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/users?page=1&limit=10&type=mover`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return res?.data?.data.map((movva: { id: string }) => ({
      id: movva.id,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

// Awaiting params to handle the new structure in Next.js v15
export default async function MovvaDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params here

  const { id } = await params;

  return (
    <DashboardLayout>
      <AdminMovvaDetails id={id} />
    </DashboardLayout>
  );
}
