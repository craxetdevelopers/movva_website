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
import { TripItem } from "@/types/tripTypes";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

interface ViewDetailsProps {
  delivery: TripItem;
  onClose: () => void;
}

const ViewDetails = ({ delivery, onClose }: ViewDetailsProps) => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  const router = useRouter()
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
              <Text mb={"8px"}>Delivery ID: DR{delivery?.id}</Text>
              <Flex gap={"8px"}>
                <Text>Status: </Text>
                <Text
                  textTransform={"capitalize"}
                  color={
                    delivery?.status == "confirmed" ? "#065F46" : "#92400E"
                  }
                >
                  {delivery?.status}
                </Text>
              </Flex>
              <Divider my={"30px"} w={"100%"} />
              <VStack alignItems={"start"} w={"100%"} maxW={"300px"}>
                <Text fontWeight={"700"}>Delivery Info</Text>
                <Text fontSize={"14px"}>
                  Pickup Location: {delivery?.pickup_address}
                </Text>
                <Text fontSize={"14px"}>
                  Dropoff Location: {delivery?.dropoff_address}
                </Text>
                <Text fontSize={"14px"}>
                  Delivery Date:{" "}
                  {delivery?.accepted_at
                    ? dayjs(delivery.accepted_at).format("MMM D, YYYY h:mma")
                    : "N/A"}
                </Text>
              </VStack>
              <Divider my={"30px"} w={"100%"} />
              <VStack alignItems={"start"}>
                <Text fontWeight={"700"}>Movva Info</Text>
                <Flex gap={"10px"}>
                  <Avatar size="sm" name={`${delivery?.mover?.first_name} ${delivery?.mover?.last_name}`} />
                  <VStack alignItems={"start"} gap={"0px"}>
                    <Text>{delivery?.mover?.first_name} {delivery?.mover?.last_name}</Text>
                    <Text>{delivery?.mover?.phone_number}</Text>
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
          onClick={() => router.push(`/admin/movvas/${delivery?.mover_id}/movva_details/`)}
        >
          View profile
        </Button>
        <VStack alignItems={"start"} w={"100%"} maxW={"300px"}>
          <Text fontWeight={"700"}>Sender Info</Text>
          <Text fontSize={"14px"}>Name: {delivery?.sender?.first_name} {delivery?.sender?.last_name}</Text>
          <Text fontSize={"14px"}>Phone no: {delivery?.sender?.phone_number}</Text>
          <Text fontSize={"14px"}>Address: {delivery?.sender?.residential_address}</Text>
        </VStack>
        <Button my={"20px"} w={"100%"} bg={"none"} border={"1px solid #E4E7EC"} onClick={onClose}>
          close
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ViewDetails;
