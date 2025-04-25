import React from 'react'
import DashboardLayout from './DashboardLayout'
import { Flex} from '@chakra-ui/react'
import Statistics from './components/Statistics'
import Deliveries from './components/Deliveries'
import Payouts from './components/Payouts'
import OngoingDeliveries from './components/OngoingDeliveries'
import CancelledDeliveries from './components/CancelledDeliveries'

const AdminDashboard = () => {
  return (
    <DashboardLayout>  
      <Statistics />
      <Flex gap={'20px'} justifyContent={'space-between'}>
        <Deliveries />
        <Payouts />
      </Flex>
      <Flex gap={'20px'} justifyContent={'space-between'}>
        <OngoingDeliveries />
        <CancelledDeliveries />
      </Flex>
    </DashboardLayout>
  )
}

export default AdminDashboard