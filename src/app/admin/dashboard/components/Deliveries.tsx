"use client";

import { useAuth } from "@/contexts/AuthContext";
import LineChartSkeleton from "@/loader/LineChartSkeleton";
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
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Deliveries = () => {
  const { token } = useAuth();

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["deliveries_chart"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/deliveries-over-time`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res?.data ?? [];
    },
  });

  const charData =
    data?.map((item: { day: string; total: number }) => ({
      name: item?.day,
      deliveries: item?.total,
    })) ?? [];

  //   const bgColor = useColorModeValue("#fff", "gray.700");
  const areaStroke = useColorModeValue("#03C95A", "#03C95A");
  const areaFill = useColorModeValue(
    "rgba(30, 226, 131, 0.2)",
    "rgba(30, 226, 131, 0.2)"
  );
  return (
    <VStack
      my={"50px"}
      w={"100%"}
      h={"380px"}
      borderRadius={"12px"}
      maxW={"650px"}
      p={"30px"}
      alignItems={"start"}
      border={"0.5px solid #E4E7EC"}
      bg={useColorModeValue("#fff", "grey.400")}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
        <Heading fontSize={"16px"}>Deliveries over time</Heading>
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
      </Flex>
      {isLoading ? (
        <LineChartSkeleton />
      ) : isError ? (
        <VStack h={"50vh"} justifyContent={"center"} textAlign="center" py={10}>
          <Text fontSize="md" mb={4}>
            Something went wrong. Please try again.
          </Text>
          <Button onClick={() => refetch()}>Retry</Button>
        </VStack>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={charData}>
            <defs>
              <linearGradient id="colorDeliveries" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={areaStroke} stopOpacity={0.4} />
                <stop offset="95%" stopColor={areaStroke} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={(value) => `${value}k`}
              tick={{ fontSize: 12 }}
              stroke="#A0AEC0"
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="deliveries"
              stroke={areaStroke}
              fillOpacity={1}
              fill={areaFill}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </VStack>
  );
};

export default Deliveries;
