"use client";

import {
  Avatar,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineStop } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import ProfileSkeleton from "@/loader/ProfileSkeleton";
import { MovvaProfileDetails } from "@/types/movvaTypes";
import dayjs from "dayjs";
import { MdOutlinePending } from "react-icons/md";

const MovvaProfile = ({
  data,
  isError,
  isLoading,
  refetch,
}: {
  data?: MovvaProfileDetails;
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
}) => {
  const bg = useColorModeValue("#fff", "grey.400");
  const bg2 = useColorModeValue("#22244E", "#fff");
  const color = useColorModeValue("#344054", "white.900");
  const color2 = useColorModeValue("#fff", "#22244E");

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (isError) {
    return (
      <VStack h={"50vh"} justifyContent={"center"} textAlign="center" py={10}>
        <Text fontSize="md" mb={4}>
          Something went wrong. Please try again.
        </Text>
        <Button onClick={() => refetch()}>Retry</Button>
      </VStack>
    );
  }
  return (
    <VStack
      h={"550px"}
      borderRadius={"8px"}
      bg={bg}
      alignItems={"start"}
      border={"0.5px solid grey"}
      w={"100%"}
    >
      <Flex
        p={"40px"}
        alignItems={"start"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <HStack gap={"20px"}>
          <Avatar size="2xl" name={`${data?.first_name} ${data?.last_name}`} />
          <VStack alignItems={"start"}>
            <Heading fontSize={"24px"}>
              {data?.first_name} {data?.last_name}
            </Heading>
            <Text color={color}>{data?.phone_number}</Text>
            <Text color={color}>{data?.email}</Text>
          </VStack>
        </HStack>
        <HStack>
          <Button border={"0.5px solid grey"} bg={bg}>
            <Icon mr={"10px"} as={CiEdit} fontSize="lg" /> Edit
          </Button>
          <Button color={color2} border={"0.5px solid grey"} bg={bg2}>
            <Icon mr={"10px"} as={AiOutlineStop} fontSize="lg" /> Disable
          </Button>
        </HStack>
      </Flex>
      <Divider />
      <Grid
        mt={"20px"}
        justifyContent={"space-between"}
        p={"40px"}
        templateColumns="repeat(4, 1fr)"
        gap={16}
        w={"100%"}
      >
        <GridItem w="100%">
          <Text fontSize={"14px"} color={color}>
            Movva ID
          </Text>
          <Heading fontSize={"16px"}>MOV{data?.id}</Heading>
        </GridItem>
        <GridItem>
          <Text fontSize={"14px"} color={color}>
            Status
          </Text>
          <Heading
            color={data?.admin_confirmed == 1 ? "#065F46" : "#92400E"}
            fontSize={"16px"}
          >
            {data?.admin_confirmed == 1 ? "Confirmed" : "Pending"}
          </Heading>
        </GridItem>
        <GridItem>
          <Text fontSize={"14px"} color={color}>
            Joined Date
          </Text>
          <Heading fontSize={"16px"}>
            {dayjs(data?.created_at).format("D-MMM-YYYY")}
          </Heading>
        </GridItem>
        <GridItem>
          <Text fontSize={"14px"} color={color}>
            Assigned Region
          </Text>
          <Heading fontSize={"16px"}>
            {data?.city} {data?.country}
          </Heading>
        </GridItem>
        <GridItem>
          <Text fontSize={"14px"} color={color}>
            Total Deliveries
          </Text>
          <Heading fontSize={"16px"}>0</Heading>
        </GridItem>
        <GridItem>
          <Text fontSize={"14px"} color={color}>
            Verification
          </Text>
          <Heading
            color={data?.status == "pending" ? "#92400E" : "#1C84FF"}
            display={"flex"}
            alignItems={"center"}
            fontSize={"16px"}
            mt={'2px'}
          >
            {" "}
            {data?.status == "pending" ? (
              <Icon
                color={"#92400E"}
                mr={"10px"}
                as={MdOutlinePending}
                fontSize="lg"
              />
            ) : (
              <Icon
                color={"#1C84FF"}
                mr={"10px"}
                as={MdVerified}
                fontSize="lg"
              />
            )}
            {data?.status}
          </Heading>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default MovvaProfile;
