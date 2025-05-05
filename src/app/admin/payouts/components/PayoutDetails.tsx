'use client'

import React from 'react'
import { Button, Divider, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, useColorModeValue } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import ApprovePayout from './ApprovePayout'
import RejectPayout from './RejectPayout'


// interface PayoutProps {
//   payout: PayoutTables
// }


const PayoutDetails = () => {
    const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover placement="bottom-end" closeOnBlur={false} size={"2xl"}>
      <PopoverTrigger>
        <Button
          _hover={{ background: "none" }}
          bg={"none"}
          color={useColorModeValue("#000", "#fff")}
        >
          <Icon as={BsThreeDots} fontSize="lg" />
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          display={"flex"}
          alignItems={"start"}
          gap={"20px"}
          flexDirection={"column"}
        >
          <ApprovePayout />
          <Divider />
          <RejectPayout />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default PayoutDetails