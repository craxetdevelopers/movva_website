"use client";

import {
  Box,
  Stack,
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
import TripDetails from "./TripDetails";

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  Completed: { bg: "#D1FAE5", color: "#065F46" },
  Cancelled: { bg: "#FEE2E2", color: "#991B1B" },
  'In transit': { bg: "#E0F2FE", color: "#2563EB" },
};

const TripTable = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  return (
    <Stack mt={'70px'}>
      <TableContainer
        borderRadius={"12px 12px 0px 0px"}
        border={"0.5px solid #E4E7EC"}
        mt={"10px"}
      >
        <Table variant="simple">
          <Thead bg={"#E5E7EB"}>
            <Tr>
              <Th py={"24px"} color={useColorModeValue("grey.400", "#000")}>
                Delivery ID
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Movva</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Sender</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Pickup Location
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Drop off Location
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Status</Th>
              <Th w={'150px'} color={useColorModeValue("grey.400", "#000")}></Th>
            </Tr>
          </Thead>
          <Tbody bg={backgroundColor}>
            {tripDelivery.map((tripTab, idx) => {
              const status = tripTab.status;
              const { bg: statusBg, color: statusColor } =
                onboardingStatusColors[status] || {
                  bg: "#E5E7EB",
                  color: "#111827",
                };
              return (
                <Tr key={idx} fontSize={"14px"}>
                  <Td>{tripTab.delievryId}</Td>
                  <Td>{tripTab.movva}</Td>
                  <Td>{tripTab.movva}</Td>
                  <Td>
                    <Box
                      fontWeight="medium"
                      fontSize="sm"
                      borderRadius="12px"
                      w="100%"
                      maxW="200px"
                      whiteSpace="normal"
                      wordBreak="break-word"
                    >
                      {tripTab.pickupLocation}
                    </Box>
                  </Td>

                  <Td>
                    <Box
                      fontWeight="medium"
                      fontSize="sm"
                      borderRadius="12px"
                      w="100%"
                      maxW="200px"
                      whiteSpace="normal"
                      wordBreak="break-word"
                    >
                      {" "}
                      {tripTab.dropoffLocation}
                    </Box>
                  </Td>
                  <Td>
                    <Box
                      bg={statusBg}
                      color={statusColor}
                      px="2"
                      py="0.5"
                      fontWeight="medium"
                      fontSize="sm"
                      borderRadius="12px"
                       w="100%"
                      maxW="200px"
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      {tripTab.status}
                    </Box>
                  </Td>
                  <Td>
                    <VStack
                      fontWeight="medium"
                      fontSize="sm"
                      borderRadius="12px"
                      w="100%"
                      maxW="200px"
                      whiteSpace="normal"
                      cursor={'pointer'}
                      wordBreak="break-word"
                    >
                      {/* <Icon as={BsThreeDots} fontSize="lg" /> */}
                      <TripDetails delivery={tripTab}/>
                    </VStack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default TripTable;

export interface TripDelivHistory {
  delievryId: string;
  movva: string;
  pickupLocation: string;
  dropoffLocation: string;
  status: string;
  
}

const tripDelivery: TripDelivHistory[] = [
  {
    delievryId: "DR002119",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Completed",
   
  },
  {
    delievryId: "DR002111",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "In transit",
   
  },
  {
    delievryId: "DR002112",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Cancelled",
    
  },
  {
    delievryId: "DR002113",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Completed",
    
  },
  {
    delievryId: "DR002114",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Cancelled",
    
  },
  {
    delievryId: "DR002115",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "In transit",
    
  },
];
