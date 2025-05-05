"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
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
import { IoIosArrowDown } from "react-icons/io";
import { TiExportOutline } from "react-icons/ti";

const exportFormats = ["PDF", "CSV", "XLSX", "JSON"];

const ExportReceipt = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover
       placement="left-start"
      closeOnBlur={false}
      size={"2xl"}
      trigger="hover"
    >
      <PopoverTrigger>
        <Button _hover={{ background: "none" }} bg={"none"} color={"#AD3307"}>
          <Icon as={TiExportOutline} fontSize="lg" mr={"20px"} />
          Export Receipt
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} maxW="400px" w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody fontSize="14px">
          <FormControl mt={4}>
            <FormLabel fontSize="14px">Export Format</FormLabel>

            {/* Dropdown Trigger */}
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
              <Text fontSize="14px">{selectedReason || "Select format"}</Text>
              <Icon as={IoIosArrowDown} fontSize="lg" />
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
                {exportFormats.map((format) => (
                  <Text
                    key={format}
                    ml={4}
                    py={1}
                    px={2}
                    _hover={{ bg: "gray" }}
                    borderRadius="md"
                    bg={selectedReason === format ? "gray" : "transparent"}
                    cursor="pointer"
                    onClick={() => {
                      setSelectedReason(format);
                      setShowDropdown(false);
                    }}
                  >
                    — {format}
                  </Text>
                ))}
              </Box>
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
            Export
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ExportReceipt;
