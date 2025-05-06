"use client";

import {
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
  PopoverHeader,
  PopoverTrigger,
  Select,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FiPlus } from "react-icons/fi";

const AddClaims = () => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover
      placement="bottom-end"
      closeOnBlur={false}
      size={"2xl"}
      modifiers={[
        { name: "flip", enabled: true },
        { name: "preventOverflow", enabled: true },
      ]}
    >
      <PopoverTrigger>
        <Button _hover={{ background: "gray" }} bg={"#2C2F66"} color={"#fff"}>
          Add Claim
          <Icon as={FiPlus} fontSize="lg" ml={"10px"} />
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
        <PopoverHeader fontSize={"20px"} fontWeight={"700"} border={"none"}>
          Add Claim
        </PopoverHeader>
        <PopoverBody fontSize={"14px"}>
          <FormControl mt={4}>
            <FormLabel fontSize={"14px"}>Claim Type</FormLabel>
            <Select
              //   value={filter}
              //   onChange={handleChange}
              fontSize={"14px"}
            >
              <option value="This month">Item lost</option>
              <option value="Quarterly">Damaged</option>
              <option value="Quarterly">Wrong package</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel fontSize={"14px"}>Delivery ID</FormLabel>
            <Input placeholder="DR213456" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Claim Description</FormLabel>
            <Textarea placeholder="Enter description" />
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
            Submit
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default AddClaims;
