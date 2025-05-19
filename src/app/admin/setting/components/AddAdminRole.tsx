"use client";

import { Button, FormControl, FormLabel, Icon, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverTrigger, Select, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

import { FaPlus } from "react-icons/fa6";

const AddAdminRole = () => {
  const initialRef = React.useRef(null);
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover
      placement="bottom-end"
      initialFocusRef={initialRef}
      closeOnBlur={false}
      size={"2xl"}
    >
      <PopoverTrigger>
        <VStack >
        <Button bg={"#2C2F66"} color={"#fff"}>
          Add Role
          <Icon as={FaPlus} fontSize="lg" ml={"10px"} />
        </Button>
        </VStack>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} maxW="400px" w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <FormControl mt={4}>
            <FormLabel>Movva</FormLabel>
            <Input placeholder="John Adenuga" />
          </FormControl>
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

export default AddAdminRole;
