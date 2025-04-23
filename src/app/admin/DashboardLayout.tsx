'use client'

import { Box, Drawer, DrawerContent, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideBar from './components/SideBar'
import TopNavbar from './components/TopNavbar';
import { usePathname } from 'next/navigation';

const getTitleFromPath = (path: string): string => {
    if (path === '/admin') return 'Dashboard';
    if (path.includes('/admin/movvas')) return 'Movvas';
    if (path.includes('/admin/trips')) return 'Trips';
    if (path.includes('/admin/payouts')) return 'Payouts';
    if (path.includes('/admin/insurance')) return 'Insurance & Claims';
    if (path.includes('/admin/kyc')) return 'KYC Verification';
    if (path.includes('/admin/audit')) return 'Audit Log';
    if (path.includes('/admin/settings')) return 'Settings';
    return 'Dashboard'; // fallback
  };


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    const pageTitle = getTitleFromPath(pathname)
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex minH={'100vh'} bg={useColorModeValue('#f3f3f3', 'grey 900')}>
        <SideBar display={{ base: 'none', md: 'block' }} onClose={onClose}/>

        {/* Drawer sidebar for mobile */}
      <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <SideBar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Main content */}
      <Box flex="1" ml={{ base: 0, md: 60 }} >
        <TopNavbar onOpen={onOpen} title={pageTitle}/>
        <Box as="main" p={10}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default DashboardLayout