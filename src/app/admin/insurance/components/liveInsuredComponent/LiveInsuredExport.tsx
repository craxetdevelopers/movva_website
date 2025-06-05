"use client";

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { BsDownload } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const LiveInsuredExport = () => {
  const initialRef = React.useRef(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  const bg = useColorModeValue("#22244E", "#ffffff");
  return (
    <Popover
      placement="right-end"
      initialFocusRef={initialRef}
      closeOnBlur={false}
      size={"2xl"}
    >
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
        <PopoverHeader>
          <Heading fontSize={"20px"}>Exports Records </Heading>
        </PopoverHeader>
        <PopoverBody fontSize={"14px"}>
          <FormControl mt={4}>
            <RadioGroup>
              <Stack>
                <Radio value="1">All records</Radio>
                <Radio value="2">Filtered view</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Format</FormLabel>
            <Select
            //   value={filter}
            //   onChange={handleChange}
            >
              <option value="This month">PDF</option>
              <option value="Quarterly">CSV</option>
              <option value="Quarterly">XLSX</option>
              <option value="Quarterly">JSON</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Date range</FormLabel>
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
          <FormControl mt={6} fontSize={'14px'}>
            <Stack spacing={5}>
              <Checkbox
              size={'md'}
                sx={{
                  ".chakra-checkbox__control": {
                    _checked: {
                      bg: bg,
                      borderColor: "#22244E",
                    },
                  },
                }}
              >
                Include delivery items
              </Checkbox>
              <Checkbox
              size={'md'}
                sx={{
                  ".chakra-checkbox__control": {
                    _checked: {
                      bg: bg,
                      borderColor: "#22244E",
                    },
                  },
                }}
              >
                Include insurance breakdown
              </Checkbox>
            </Stack>
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
          <Button
            bg={"#22244E"}
            color={"#fff"}
            // onClick={handleApproved}
            // isLoading={isLoading}
          >
            Export
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default LiveInsuredExport;
