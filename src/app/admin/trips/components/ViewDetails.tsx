"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiEye } from "react-icons/fi";
import { TripDelivHistory } from "./TripTable";

interface ViewDetailsProps {
  delivery: TripDelivHistory;
}

const ViewDetails = ({ delivery }: ViewDetailsProps) => {
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
          <Icon as={FiEye} fontSize="lg" mr={"20px"} />
          View details
        </Button>
      </PopoverTrigger>
      <PopoverContent
        bg={backgroundColor}
        p={5}
        maxW="1000px"
        minW="600px"
        w={"100%"}
        mb={"60px"}
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <Flex
          w={"100%"}
          gap={"30px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <VStack w={"100%"} alignItems={"start"}>
            <PopoverHeader fontSize={"20px"} fontWeight={"700"} border={"none"}>
              Delivery Details
            </PopoverHeader>
            <PopoverBody>
              <Text>Delivery ID: {delivery?.delievryId}</Text>
              <Divider my={"30px"} w={"100%"} />
              <VStack alignItems={"start"} w={"100%"} maxW={"300px"}>
                <Text fontWeight={"700"}>Delivery Info</Text>
                <Text fontSize={"14px"}>
                  Pickup Location: {delivery?.pickupLocation}
                </Text>
                <Text fontSize={"14px"}>
                  Dropoff Location: {delivery?.dropoffLocation}
                </Text>
                <Text fontSize={"14px"}>Delivery Date: October 1, 2025</Text>
              </VStack>
              <Divider my={"30px"} w={"100%"} />
              <VStack alignItems={"start"}>
                <Text fontWeight={"700"}>Movva Info</Text>
                <Flex gap={"10px"}>
                  <Avatar size="sm" name={`${delivery?.movva}`} />
                  <VStack alignItems={"start"} gap={"0px"}>
                    <Text>{delivery?.movva}</Text>
                    <Text>+234 810 231 5643</Text>
                  </VStack>
                </Flex>
              </VStack>
            </PopoverBody>
          </VStack>
          <Box w={"100%"}>
            <Image src="/admin/map.png" alt="" />
          </Box>
        </Flex>
        <Button
          my={"20px"}
          w={"100%"}
          bg={"none"}
          border={"1px solid #E4E7EC"}
          color={"#3366FF"}
        >
          View profile
        </Button>
        <VStack alignItems={"start"} w={"100%"} maxW={"300px"}>
          <Text fontWeight={"700"}>Sender Info</Text>
          <Text fontSize={"14px"}>Name: {delivery?.movva}</Text>
          <Text fontSize={"14px"}>Phone no: +234 810 987 6543</Text>
          <Text fontSize={"14px"}>Address: 31, Allen Avenue, Lagos</Text>
        </VStack>
        <Button my={"20px"} w={"100%"} bg={"none"} border={"1px solid #E4E7EC"}>
          close
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ViewDetails;
