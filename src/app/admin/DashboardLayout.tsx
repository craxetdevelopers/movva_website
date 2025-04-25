'use client'

import { Box, Drawer, DrawerContent, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideBar from './components/SideBar'
import TopNavbar from './components/TopNavbar';
import { useParams, usePathname } from 'next/navigation';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const pathname = usePathname();
    const params = useParams(); // ✅ use the hook here
    const id = params?.id;

    const pageTitle = React.useMemo(() => {
        const normalizedPath = pathname?.replace(/\/$/, '');
        if (pathname === '/admin') return 'Dashboard';
        if (normalizedPath === `/admin/movvas/${id}/movva_details`) return 'Movvas Details';
        
        if (pathname.includes('/admin/movvas')) return 'Movvas';
        if (pathname.includes('/admin/trips')) return 'Trips';
        if (pathname.includes('/admin/payouts')) return 'Payouts';
        if (pathname.includes('/admin/insurance')) return 'Insurance & Claims';
        if (pathname.includes('/admin/kyc')) return 'KYC Verification';
        if (pathname.includes('/admin/audit')) return 'Audit Log';
        
        if (pathname.includes('/admin/settings')) return 'Settings';
        return 'Dashboard';
      }, [pathname, id]);

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