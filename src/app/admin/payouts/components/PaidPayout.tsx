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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const PaidPayout = ({
  mutate,
  isLoading,
}: {
  mutate: (data: { status: string; comment: string }) => void;
  isLoading: boolean;
}) => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  const [comment, setComment] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

//   handle the submit paid payment details
  const handlePay = () => {
    mutate({ status: "paid", comment });
  };


  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      placement="left-start"
      closeOnBlur={false}
      size={"2xl"}
      
    >
      <PopoverTrigger>
        <Button _hover={{ background: "none" }} bg={"none"}>
          Paid
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} maxW="400px" w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton onClick={onClose}/>
        <PopoverHeader fontSize={"20px"} fontWeight={"700"} border={"none"}>
          Paid Payment
        </PopoverHeader>
        <PopoverBody fontSize="14px">
          <Text mb={"30px"}>Are you sure you want to approve this payment</Text>
          <Textarea
            placeholder="Additional comments (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </PopoverBody>
        <PopoverFooter
          display="flex"
          justifyContent="flex-end"
          mt={"20px"}
          pt={"20px"}
          gap={2}
        >
          <Button bg={"none"} border={"1px solid grey"} onClick={onClose}>
            Cancel
          </Button>
          <Button bg={"green"} color={"#fff"} onClick={handlePay} isLoading={isLoading}>
            Pay
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default PaidPayout;
