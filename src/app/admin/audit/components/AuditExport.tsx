import { Box, Button, FormControl, FormLabel, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverTrigger, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsDownload } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

const exportFormats = ["PDF", "CSV", "XLSX", "JSON"];

const AuditExport = () => {
    const [selectedReason, setSelectedReason] = useState("");
      const [showDropdown, setShowDropdown] = useState(false);
      const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover placement="bottom-end" closeOnBlur={false} size={"2xl"}>
          <PopoverTrigger>
            <Button bg={"#2C2F66"} color={"#fff"}>
              <Icon as={BsDownload} color={"#17D1C6"} fontSize="lg" mr={"10px"} />
              Exports
              <Icon as={IoIosArrowDown} fontSize="lg" ml={"10px"} />
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
  )
}

export default AuditExport