"use client";

import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useClipboard,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiEye } from "react-icons/fi";
import { TripItem } from "@/types/tripTypes";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { CiShare2 } from "react-icons/ci";

interface ViewDetailsProps {
  delivery: TripItem;
  onClose: () => void;
}

const verificationColors: Record<string, { bg: string}> = {
  confirmed: { bg: "#065F46" },
  in_transit: { bg: "blue" },
  pending: { bg: "#92400E" },
  accepted: { bg: "#800080" },
};

const ViewDetails = ({ delivery}: ViewDetailsProps) => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  const router = useRouter();

  const verification = delivery?.status;
  const { bg: verificationBg } = verificationColors[
    verification
  ] || {
    bg: "#000",
  };

  const shareUrl =
    typeof window != "undefined"
      ? `${window.location.origin}/track?code=${delivery?.delivery_code}`
      : "";
  const { onCopy } = useClipboard(shareUrl);
  const toast = useToast();

  const handleShare = () => {
    onCopy();
    toast({
      title: "Link copied!",
      description: "Tracking link copied to clipboard.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
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

        <VStack w={"100%"} alignItems={"start"}>
          <PopoverHeader
            fontSize={"20px"}
            fontWeight={"700"}
            mt={"20px"}
            border={"none"}
          >
            Delivery Details
          </PopoverHeader>
          <Divider my={"20px"} w={"100%"} />
          <PopoverBody w={"100%"}>
            <VStack w={"100%"} fontSize={'14px'}>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'10px'}>
                <Text>Pickup Date </Text>
                <Text>
                  {dayjs(delivery?.accepted_at).format("MMMM D, YYYY, hh:mm A")}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'5px'}>
                <Text px={'10px'} py={'4px'} borderRadius={'8px'} bg={verificationBg}>{delivery?.status}</Text>
                <Text>
                  {delivery?.delivery_code}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'10px'}>
                <Text>Sender</Text>
                <Text>
                  {delivery?.sender?.first_name} {delivery?.sender?.last_name}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'10px'}>
                <Text>Receipiant</Text>
                <Text>
                  How am i suppose to know
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'10px'}>
                <Text>Pickup Address</Text>
                <Text>
                  {delivery?.pickup_address}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'10px'}>
                <Text>Dropoff Address</Text>
                <Text>
                  {delivery?.dropoff_address}
                </Text>
              </Flex>
            </VStack>
            <Divider my={"30px"} w={"100%"} />
            <VStack w={'100%'} fontSize={'14px'} alignItems={'start'}>
              <Heading fontSize={'16px'}>Price Breakdown </Heading>
              <Flex justifyContent={"space-between"} w={"100%"} my={'10px'}>
                <Text>Total Delivery Fee</Text>
                <Text>
                  {delivery?.price}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'10px'}>
                <Text>Movva Earnings</Text>
                <Text>
                  {delivery?.price}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'10px'}>
                <Text>Insurance Fee</Text>
                <Text>
                  {delivery?.price}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} w={"100%"} mb={'10px'}>
                <Text>Platform Fee</Text>
                <Text>
                  {delivery?.price}
                </Text>
              </Flex>
            </VStack>
            <Divider my={"30px"} w={"100%"} />
            <VStack alignItems={"start"} fontSize={'14px'}>
              <Heading fontWeight={"700"} fontSize={'16px'}>Movva Info</Heading>
              <Flex gap={"10px"}>
                <Avatar
                  size="sm"
                  name={`${delivery?.mover?.first_name} ${delivery?.mover?.last_name}`}
                />
                <VStack alignItems={"start"} gap={"0px"}>
                  <Text>
                    {delivery?.mover?.first_name} {delivery?.mover?.last_name}
                  </Text>
                  <Text>{delivery?.mover?.phone_number}</Text>
                </VStack>
              </Flex>
            </VStack>
          </PopoverBody>
        </VStack>

        <Button
          my={"20px"}
          w={"100%"}
          bg={"none"}
          border={"1px solid #E4E7EC"}
          color={"#3366FF"}
          onClick={() =>
            router.push(`/admin/movvas/${delivery?.mover_id}/movva_details/`)
          }
        >
          View profile
        </Button>
        <Button
          leftIcon={<Icon as={CiShare2} />}
          variant="outline"
          // size="sm"
          color={"#17D1C6"}
          borderColor={"#17D1C6"}
          // mt={4}
          onClick={handleShare}
        >
          Share Tracking Link
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ViewDetails;
