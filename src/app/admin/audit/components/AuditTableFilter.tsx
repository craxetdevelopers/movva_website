"use client";

import { Button, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverTrigger, Select, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CiCalendar, CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const AuditTableFilter = () => {
  const initialRef = React.useRef(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover
      placement="bottom-end"
      initialFocusRef={initialRef}
      closeOnBlur={false}
      size={"2xl"}
    >
      <PopoverTrigger>
        <Button bg={"#2C2F66"} color={"#fff"}>
          <Icon as={CiFilter} color={"#17D1C6"} fontSize="lg" mr={"10px"} />
          Filter
          <Icon as={IoIosArrowDown} fontSize="lg" ml={"10px"} />
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} maxW="400px" w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <FormControl mt={4}>
            <FormLabel>Status</FormLabel>
            <Select
            //   value={filter}
            //   onChange={handleChange}
            >
              <option value="This month">Approved</option>
              <option value="Quarterly">Pending</option>
              <option value="Quarterly">Rejected</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Joined Date</FormLabel>
            <Flex gap={"20px"} w={"100%"}>
              <InputGroup zIndex={1000}>
                <DatePicker
                  // showIcon
                  toggleCalendarOnIconClick
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  placeholderText="Today"
                  customInput={
                    <Input
                      py="15px"
                      placeholder="Select date"
                      // border="none"
                      _placeholder={{ color: "#5E5E5E" }}
                      _focus={{
                        border: "2px solid #2057C2",
                        outline: "none",
                      }}
                    />
                  }
                />
                <InputRightElement>
                  <Icon as={CiCalendar} fontSize="lg" />
                </InputRightElement>
              </InputGroup>
              <InputGroup zIndex={1000}>
                <DatePicker
                  // showIcon
                  toggleCalendarOnIconClick
                  selected={endDate}
                  onChange={(date: Date | null) => setEndDate(date)}
                  placeholderText="Today"
                  customInput={
                    <Input
                      py="15px"
                      placeholder="Select date"
                      // border="none"
                      _placeholder={{ color: "#5E5E5E" }}
                      _focus={{
                        border: "2px solid #2057C2",
                        outline: "none",
                      }}
                    />
                  }
                />
                <InputRightElement>
                  <Icon as={CiCalendar} fontSize="lg" />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </FormControl>
        </PopoverBody>
        <PopoverFooter
          display="flex"
          justifyContent="flex-end"
          mt={"20px"}
          pt={"20px"}
          gap={2}
          w={"100%"}
        >
          <Button bg={"#22244E"} color={"#fff"} w={"100%"}>
            Apply
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default AuditTableFilter;
