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
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

const EditTripInfo = () => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
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
        <Button
          _hover={{ background: "none" }}
          bg={"none"}
          color={useColorModeValue("#000", "#fff")}
        >
          <Icon as={FaRegEdit} fontSize="lg" mr={"20px"} />
          Edit Trip Info
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
          Edit Trip Info
        </PopoverHeader>
        <PopoverBody fontSize={'14px'}>
          <FormControl mt={4}>
            <FormLabel fontSize={'14px'}>Delivery Status</FormLabel>
            <Select
            //   value={filter}
            //   onChange={handleChange}
            fontSize={'14px'}
            >
              <option value="This month">Completed</option>
              <option value="Quarterly">Pending</option>
              <option value="Quarterly">In transit</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel fontSize={'14px'}>Assigned Movva</FormLabel>
            <Input placeholder="Segun Alu" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Comment</FormLabel>
            <Input placeholder="Enter comments" />
          </FormControl>
        </PopoverBody>
        <PopoverFooter
          display="flex"
          justifyContent="flex-end"
          mt={"20px"}
          pt={"20px"}
          gap={2}
        >
          <Button bg={"none"} border={'1px solid grey'}>
            Cancel
          </Button>
          <Button bg={"#22244E"} color={"#fff"} >
            Save
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default EditTripInfo;
