'use client'

import { Button, Divider, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import RejectKYC from './RejectKYC'
import VerificationKYC from './VerificationKYC'


const VerifyDetails = () => {
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
              <VerificationKYC />
              <Divider />
              <RejectKYC />
            </PopoverBody>
          </PopoverContent>
        </Popover>
  )
}

export default VerifyDetails