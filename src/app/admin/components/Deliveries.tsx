"use client";

import {
  Flex,
  Heading,
  Select,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
    { name: 'Sun', deliveries: 10000 },
    { name: 'Mon', deliveries: 20000 },
    { name: 'Tue', deliveries: 10000 },
    { name: 'Wed', deliveries: 40000 },
    { name: 'Thu', deliveries: 20000 },
    { name: 'Fri', deliveries: 60000 },
    { name: 'Sat', deliveries: 70000 },
    
];

const Deliveries = () => {
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
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
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
    </VStack>
  );
};

export default Deliveries;
