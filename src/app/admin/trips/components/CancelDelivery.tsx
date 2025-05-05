"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const groupedReasons = {
  "Sender-Initiated": [
    "Sender requested cancellation",
    "Receiver not available for pickup",
    "Sender changed delivery destination",
  ],
  "Movva-Initiated": ["Movva refused trip"],
  Other: ["Excessive delay in assignment", "Custom reason"],
};

const CancelDelivery = () => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Popover
      placement="left-start"
      closeOnBlur={false}
      size={"2xl"}
      trigger="hover"
      modifiers={[
        { name: "flip", enabled: true },
        { name: "preventOverflow", enabled: true },
      ]}
    >
      <PopoverTrigger>
        <Button _hover={{ background: "none" }} bg={"none"} color={"#AD3307"}>
          <Icon as={MdOutlineCancel} fontSize="lg" mr={"20px"} />
          Cancel Delivery
        </Button>
      </PopoverTrigger>
      <PopoverContent
        bg={backgroundColor}
        p={5}
        maxW="1000px"
        minW="400px"
        w={"100%"}
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody fontSize="14px">
          <FormControl mt={4}>
            <FormLabel fontSize="14px">Cancellation Reason</FormLabel>

            {/* Dropdown Trigger Box */}
            <Box
              border="1px solid #E2E8F0"
              borderRadius="md"
              p={3}
              cursor="pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="14px">{selectedReason || "Select reason"}</Text>
              <Icon as={IoIosArrowDown} fontSize="lg" mr={"20px"} />
            </Box>

            {/* Dropdown List */}
            {showDropdown && (
              <Box
                mt={2}
                border="1px solid #E2E8F0"
                borderRadius="md"
                maxH="200px"
                overflowY="auto"
                zIndex={10}
                bg={backgroundColor}
              >
                {Object.entries(groupedReasons).map(([group, reasons]) => (
                  <Box key={group} mb={3} px={3} pt={2}>
                    <Text fontWeight="bold" mb={1}>
                      {group}
                    </Text>
                    {reasons.map((reason) => (
                      <Text
                        key={reason}
                        ml={4}
                        py={1}
                        px={2}
                        _hover={{ bg: "gray" }}
                        borderRadius="md"
                        bg={
                          selectedReason === reason ? "gray" : "transparent"
                        }
                        cursor="pointer"
                        onClick={() => {
                          setSelectedReason(reason);
                          setShowDropdown(false);
                        }}
                      >
                        — {reason}
                      </Text>
                    ))}
                  </Box>
                ))}
              </Box>
            )}

            {/* Show input for custom reason */}
            {selectedReason === "Custom reason" && (
              <Input
                mt={3}
                placeholder="Enter custom reason"
                fontSize="14px"
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
              />
            )}
          </FormControl>
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
            Cancel Delivery
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default CancelDelivery;
