"use client";

import {
  Avatar,
  Flex,
  Heading,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const OngoingDeliveries = () => {
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
        <Heading fontSize={"16px"}>Ongoing Deliveries</Heading>
      </Flex>
      <TableContainer w={"100%"} my={"30px"}>
        <Table variant="simple">
          <Thead bg={"#E5E7EB"} fontSize={"34px"}>
            <Tr>
              <Th
                fontSize={"14px"}
                color={useColorModeValue("grey.400", "#000")}
              >
                Movva
              </Th>
              <Th
                fontSize={"14px"}
                color={useColorModeValue("grey.400", "#000")}
              >
                Delivery Location
              </Th>
              <Th
                fontSize={"14px"}
                color={useColorModeValue("grey.400", "#000")}
              >
                ETA
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {ongoingDeliv.map((deliver, idx) => (
              <Tr key={idx}>
                <Td fontSize={"12px"}>
                  <HStack alignItems={"center"}>
                    <Avatar size="sm" name="Admin User" />
                    <Text>{deliver.name}</Text>
                  </HStack>
                </Td>
                <Td fontSize={"12px"}>{deliver.delivery}</Td>
                <Td fontSize={"12px"}>{deliver.eta}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default OngoingDeliveries;

interface OngoingDeliv {
  name: string;
  delivery: string;
  eta: string;
}

const ongoingDeliv: OngoingDeliv[] = [
  {
    name: "Anthony Lewis",
    delivery: "12, Oluwole street",
    eta: "12:45pm",
  },
  {
    name: "Anthony Lewis",
    delivery: "12, Oluwole street",
    eta: "12:45pm",
  },
  {
    name: "Anthony Lewis",
    delivery: "12, Oluwole street",
    eta: "12:45pm",
  },
  
];
