'use client'

import { Box, Drawer, DrawerContent, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideBar from './components/SideBar'
import TopNavbar from './components/TopNavbar';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
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
        <TopNavbar onOpen={onOpen} />
        <Box as="main" p={10}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default DashboardLayout