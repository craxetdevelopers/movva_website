"use client";

import { useAuth } from "@/contexts/AuthContext";
import StatCardSkeleton from "@/loader/StatCardSkeleton";
import { DashboardStat } from "@/types/dashboardTypes";

import {
  Button,
  Flex,
  Heading,
  Select,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Statistics = () => {
  const bg = useColorModeValue("#fff", "grey.400");
  const bg2 = useColorModeValue("#22244E", "grey")
  const color = useColorModeValue("#fff", "#000");
  const { token } = useAuth();

  const { data, isError, isLoading, refetch } = useQuery<DashboardStat>({
    queryKey: ["dashboard_stats"],
    enabled: !!token,
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/dashboard-analytics?period=month`,
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
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      gap={"10px"}
      textAlign={"center"}
    >
      {isLoading ? (
        <>
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
            maxW={{ base: "200px", lg: "350px", "2xl": "420px" }}
            py={"30px"}
            gap={"15px"}
          >
            <Text>Total Deliveries completed</Text>
            <Heading fontSize={"32px"}>{data?.totalDeliveries}</Heading>
            <Select
              //   value={filter}
              //   onChange={handleChange}
              maxW="fit-content"
              size="sm"
              borderRadius={"8px"}
            >
              <option value="This week">This week</option>
              <option value="This month">This month</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </Select>
            <Button
              color={color}
              bg={bg2}
            >
              View trips
            </Button>
          </VStack>

          {/* Pending KYC Verifications */}
          <VStack
            border={"0.5px solid #E4E7EC"}
            borderRadius={"12px"}
            bg={bg}
            w={"100%"}
            maxW={{ base: "200px", lg: "350px", "2xl": "420px" }}
            py={"30px"}
            gap={"15px"}
          >
            <Text>Pending KYC Verifications</Text>
            <Heading fontSize={"32px"}>{data?.pendingKYC}</Heading>
            <Select
              //   value={filter}
              //   onChange={handleChange}
              maxW="fit-content"
              size="sm"
              borderRadius={"8px"}
            >
              <option value="This week">This week</option>
              <option value="This month">This month</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </Select>
            <Button
              color={color}
              bg={bg2}
            >
              Show details
            </Button>
          </VStack>

          {/* Total Revenue */}
          <VStack
            border={"0.5px solid #E4E7EC"}
            borderRadius={"12px"}
            bg={bg}
            w={"100%"}
            maxW={{ base: "200px", lg: "350px", "2xl": "420px" }}
            py={"30px"}
            gap={"15px"}
          >
            <Text>Total Revenue</Text>
            <Heading fontSize={"32px"}>{data?.revenue}</Heading>
            <Select
              //   value={filter}
              //   onChange={handleChange}
              maxW="fit-content"
              size="sm"
              borderRadius={"8px"}
            >
              <option value="This week">This week</option>
              <option value="This month">This month</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </Select>
            <Button
              color={color}
              bg={bg2}
            >
              Show details
            </Button>
          </VStack>
        </>
      )}
      {/* Total Deliveries completed */}
    </Flex>
  );
};

export default Statistics;
