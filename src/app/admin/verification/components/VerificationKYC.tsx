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
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const VerificationKYC = () => {
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
          Verify
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} maxW="400px" w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize={"20px"} fontWeight={"700"} border={"none"}>
          Verify KYC Documents
        </PopoverHeader>
        <PopoverBody fontSize="14px" w={"100%"}>
          <Text my={"10px"}>
            Are you sure want to verify the KYC documents?
          </Text>
          <Text color={"#AD3307"} whiteSpace="normal" wordBreak="break-word">
            *Please ensure that all necessary documents have been uploaded and
            reviewed.
          </Text>
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

export default VerificationKYC;
