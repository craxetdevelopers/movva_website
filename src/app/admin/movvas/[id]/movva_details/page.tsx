// /app/admin/movvas/[id]/movva_details/page.tsx

import DashboardLayout from "@/app/admin/DashboardLayout";
import React from "react";
import AdminMovvaDetails from "./components/AdminMovvaDetails";
import axios from "axios";

// Ensure params is handled correctly as per Next.js v15 changes
// export const dynamicParams = true;

// No changes needed here for static generation
export async function generateStaticParams() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/users?page=1&limit=10&type=mover`
    );
    return res?.data?.data.map((movva: { id: number }) => ({
      id: movva.id.toString(),
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

// type tParams = Promise<{ id: string }>;

// Awaiting params to handle the new structure in Next.js v15
export default async function MovvaDetails({ params }: { params: { id: string } }) {
  // Await the params here
  const { id } = params;
  // const { id }: { id: string } = await params;

  return (
    <DashboardLayout>
      <AdminMovvaDetails id={id} />
    </DashboardLayout>
  );
}
