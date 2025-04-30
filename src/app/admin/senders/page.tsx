'use client'

import React from 'react'
import DashboardLayout from '../DashboardLayout'
import SendersTable from './components/SendersTable'

const AdminSenders = () => {
  return (
    <DashboardLayout>
        <SendersTable />
    </DashboardLayout>
  )
}

export default AdminSenders