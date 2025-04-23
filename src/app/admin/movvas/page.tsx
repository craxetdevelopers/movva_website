'use client'

import React from 'react'
import DashboardLayout from '../DashboardLayout'
import MovvasTable from './components/MovvasTable'

const AdminMovvas = () => {
  return (
    <DashboardLayout>
        <MovvasTable />
    </DashboardLayout>
  )
}

export default AdminMovvas