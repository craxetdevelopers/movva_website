"use client";

import React from "react";
import { VerificationTables } from "./VerificationTable";
import {
  Box,
  Button,
  Divider,
  Image,
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
  VStack,
} from "@chakra-ui/react";

interface VerifyDetailsProps {
  verification: VerificationTables;
}

const VerifyActions = ({ verification }: VerifyDetailsProps) => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover placement="bottom-end" closeOnBlur={false} size={"2xl"}>
      <PopoverTrigger>
        <Text alignItems={"start"}>View</Text>
      </PopoverTrigger>
      <PopoverContent
        bg={backgroundColor}
        p={5}
        w={"100%"}
        maxW="1000px"
        minW="500px"
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize={"20px"} fontWeight={"700"} border={"none"}>
          Documents {verification.id}
        </PopoverHeader>
        <PopoverBody
          display={"flex"}
          alignItems={"start"}
          gap={"20px"}
          flexDirection={"column"}
        >
          <Divider />
          <VStack w={"100%"}>
            <Box>
              <Image src="/admin/id_card.svg" alt="" />
            </Box>
            <Text fontSize={"14px"}>Identification (JPEG)</Text>
          </VStack>
        </PopoverBody>
        <PopoverFooter
          display="flex"
          justifyContent="flex-end"
          mt={"20px"}
          pt={"20px"}
          gap={2}
        >
          <Button bg={"#22244E"} color={"#fff"}>
            Download
          </Button>
          <Button bg={"none"} border={"1px solid grey"}>
            Cancel
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default VerifyActions;
