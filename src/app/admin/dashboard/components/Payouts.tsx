'use client'

import { Flex, Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  { name: "Pending", deliveries: 10000 },
  { name: "Approved", deliveries: 50000 },
  { name: "Rejected", deliveries: 30000 },
  
];
const Payouts = () => {
//   const areaStroke = useColorModeValue("#4C6FFF", "#90CDF4");
  const areaFill = useColorModeValue(
    "#165BAA",
    "#165BAA"
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
        <Heading fontSize={"16px"}>Payout Requests by Status</Heading>
      </Flex>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            dataKey="deliveries"
            fill={areaFill}
            radius={[4, 4, 0, 0]}
            barSize={80}
          />
        </BarChart>
      </ResponsiveContainer>
    </VStack>
  );
};

export default Payouts;
