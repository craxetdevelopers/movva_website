"use client";

import {
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#FBBF24", "#60A5FA", "#10B981", "#EF4444"];

const CancelledDeliveries = () => {
  return (
    <VStack
      mb={"50px"}
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
        <Heading fontSize={"16px"}>Cancelled Deliveries</Heading>
      </Flex>
      <Flex>
        <TableContainer
          w={"100%"}
          my={"30px"}
          borderRadius={"12px"}
          border={"0.5px solid #E4E7EC"}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th
                  fontSize={"14px"}
                  color={useColorModeValue("#344054", "#fff")}
                >
                  Cancelled Reason
                </Th>
                <Th
                  fontSize={"14px"}
                  color={useColorModeValue("#344054", "#fff")}
                >
                  Total
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {cancelledDeliv.map((cancel, idx) => (
                <Tr key={idx}>
                  <Td
                    fontWeight="bold"
                    fontSize="14px"
                    //
                  >
                    {cancel.name}
                  </Td>
                  <Td fontSize="12px">{cancel.value}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        {/* Pie Chart */}
        {/* <Flex w={{ base: "100%", md: "40%" }} h="300px"> */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={cancelledDeliv}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {cancelledDeliv.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        {/* </Flex> */}
      </Flex>
    </VStack>
  );
};

export default CancelledDeliveries;

interface CancelledDeliv {
  name: string;
  value: number;
}

const cancelledDeliv: CancelledDeliv[] = [
  {
    name: "Delivery-Delays",
    value: 8,
  },
  {
    name: "Movva-Initiated",
    value: 14,
  },
  {
    name: "Payment Issues",
    value: 18,
  },
  {
    name: "Sender-Initiated",
    value: 8,
  },
];
