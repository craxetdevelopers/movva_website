import DashboardLayout from "@/app/admin/DashboardLayout";
import React from "react";
import AdminSenderDetails from "./components/AdminSenderDetails";
import axios from "axios";

// Ensure params is handled correctly as per Next.js v15 changes
// export const dynamicParams = false;

// No changes needed here for static generation
export async function generateStaticParams() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/users?page=1&limit=10&type=user`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
type tParams = Promise<{ id: string }>;

export default async function SenderDetails({ params }: { params: tParams }) {
  // Await the params here
  const { id }: { id: string } = await params;

  return (
    <DashboardLayout>
      <AdminSenderDetails id={id} />
    </DashboardLayout>
  );
}
