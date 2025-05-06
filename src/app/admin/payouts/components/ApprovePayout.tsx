"use client";

import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ApprovePayout = () => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover
      placement="left-start"
      closeOnBlur={false}
      size={"2xl"}
      trigger="hover"
    >
      <PopoverTrigger>
        <Button _hover={{ background: "none" }} bg={"none"}>
          Approved
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} maxW="400px" w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize={"20px"} fontWeight={"700"} border={"none"}>
          Approve Payment
        </PopoverHeader>
        <PopoverBody fontSize="14px">
          <Text mb={"30px"}>Are you sure you want to approve this payment</Text>
          <Textarea placeholder="Additional comments (optional)" />
        </PopoverBody>
        <PopoverFooter
          display="flex"
          justifyContent="flex-end"
          mt={"20px"}
          pt={"20px"}
          gap={2}
        >
          <Button bg={"none"} border={"1px solid grey"}>
            Cancel
          </Button>
          <Button bg={"#22244E"} color={"#fff"}>
            Approve
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ApprovePayout;
