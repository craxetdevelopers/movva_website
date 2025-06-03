"use client";

import { useAuth } from "@/contexts/AuthContext";
import StatCardSkeleton from "@/loader/StatCardSkeleton";
import { TripStat } from "@/types/tripTypes";
import {
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const TripStatistics = () => {
  const bg = useColorModeValue("#fff", "grey.400");
  const { token } = useAuth();

  const { data, isError, isLoading, refetch } = useQuery<TripStat>({
    queryKey: ["delivery_stats"],
    enabled: !!token,
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/deliveries-analytics`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res?.data;
    },
  });

  return (
    <Flex justifyContent={"space-between"} mt={"60px"} gap={"10px"}>
      {isLoading ? (
        <>
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </>
      ) : isError ? (
        <VStack h={"50vh"} justifyContent={"center"} textAlign="center" py={10}>
          <Text fontSize="md" mb={4}>
            Something went wrong. Please try again.
          </Text>
          <Button onClick={() => refetch()}>Retry</Button>
        </VStack>
      ) : (
        <>
          <VStack
            border={"0.5px solid #E4E7EC"}
            borderRadius={"12px"}
            bg={bg}
            w={"100%"}
            maxW={{ base: "150px", lg: "298px", "2xl": "320px" }}
            p={"30px"}
            gap={"5px"}
            alignItems={"start"}
          >
            <Heading>{data?.totalDeliveries}</Heading>
            <Text>Total Deliveries</Text>
          </VStack>
          <VStack
            border={"0.5px solid #E4E7EC"}
            borderRadius={"12px"}
            bg={bg}
            w={"100%"}
            maxW={{ base: "150px", lg: "298px", "2xl": "320px" }}
            p={"30px"}
            gap={"5px"}
            alignItems={"start"}
          >
            <Heading>{data?.ongoingDeliveries}</Heading>
            <Text>Ongoing Deliveries</Text>
          </VStack>
          <VStack
            border={"0.5px solid #E4E7EC"}
            borderRadius={"12px"}
            bg={bg}
            w={"100%"}
            maxW={{ base: "150px", lg: "298px", "2xl": "320px" }}
            p={"30px"}
            gap={"5px"}
            alignItems={"start"}
          >
            <Heading>{data?.cancelledDeliveries}</Heading>
            <Text>Cancelled Deliveries</Text>
          </VStack>
          <VStack
            border={"0.5px solid #E4E7EC"}
            borderRadius={"12px"}
            bg={bg}
            w={"100%"}
            maxW={{ base: "150px", lg: "298px", "2xl": "320px" }}
            p={"30px"}
            gap={"5px"}
            alignItems={"start"}
          >
            <Heading>{data?.deliveryRequests}</Heading>
            <Text>Delivery Requests</Text>
          </VStack>
        </>
      )}
    </Flex>
  );
};

export default TripStatistics;
