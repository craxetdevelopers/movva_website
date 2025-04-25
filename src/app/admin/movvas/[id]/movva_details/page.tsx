

import DashboardLayout from '@/app/admin/DashboardLayout'
import React from 'react'
import AdminMovvaDetails from './components/AdminMovvaDetails';
// import { useParams } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

const MovvaDetails = ({ params }: { params: { id: string } }) => {
  // const params = useParams(); // ✅ use the hook here
  //     const id = params?.id;
  const id = Number(params.id);
  return (
    <DashboardLayout>
     <AdminMovvaDetails id={id}/>
     
    </DashboardLayout>
  )
}

export default MovvaDetails