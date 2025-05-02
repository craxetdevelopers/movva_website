'use client'

import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
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
import SenderDeliveryHistoryFilter from "./SenderDeliveryHistoryFilter";

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  Completed: { bg: "#D1FAE5", color: "#065F46" },
  Cancelled: { bg: "#FEE2E2", color: "#991B1B" },
};

const SenderDeliveryHistory = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  return (
    <Stack mt={'20px'}>
      <Flex w={"100%"} gap={"10px"} justifyContent={"end"}>
        <VStack alignItems={"flex-end"}>
          <VStack alignItems={"end"} w={"430px"} borderRadius={"9px"}>
            <InputGroup bg={backgroundColor} borderRadius={"9px"}>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.400" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search..."
                w={"100%"}
                maxW={"530px"}
              />
            </InputGroup>
          </VStack>
        </VStack>
        <SenderDeliveryHistoryFilter />
        <Button bg={"none"}> Clear all</Button>
      </Flex>

      <TableContainer
        borderRadius={"12px 12px 0px 0px"}
        border={"0.5px solid #E4E7EC"}
        mt={'10px'}
      >
        <Table variant="simple">
          <Thead bg={"#E5E7EB"}>
            <Tr>
              <Th py={"24px"} color={useColorModeValue("grey.400", "#000")}>
                Delivery ID
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Movva</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Pickup Location
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Drop off Location
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Status</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {movvaDelivery.map((movTab, idx) => {
              const status = movTab.status;
              const { bg: statusBg, color: statusColor } =
                onboardingStatusColors[status] || {
                  bg: "#E5E7EB",
                  color: "#111827",
                };
              return (
                <Tr key={idx} fontSize={"14px"}>
                  <Td>{movTab.delievryId}</Td>
                  <Td>{movTab.movva}</Td>
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
                      {movTab.pickupLocation}
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
                      {movTab.dropoffLocation}
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
                      display="inline-block"
                    >
                      {movTab.status}
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
                      {movTab.date}
                    </Box>
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

export default SenderDeliveryHistory;

interface MovvaDelivHistory {
  delievryId: string;
  movva: string;
  pickupLocation: string;
  dropoffLocation: string;
  status: string;
  date: string;
}

const movvaDelivery: MovvaDelivHistory[] = [
  {
    delievryId: "DR002119",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Completed",
    date: "Apr 3rd, 2024 11:12 AM",
  },
  {
    delievryId: "DR002119",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Completed",
    date: "Apr 3rd, 2024 11:12 AM",
  },
  {
    delievryId: "DR002119",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Cancelled",
    date: "Apr 3rd, 2024 11:12 AM",
  },
  {
    delievryId: "DR002119",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Completed",
    date: "Apr 3rd, 2024 11:12 AM",
  },
  {
    delievryId: "DR002119",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Cancelled",
    date: "Apr 3rd, 2024 11:12 AM",
  },
  {
    delievryId: "DR002119",
    movva: "John Adenuga P.",
    pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
    dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
    status: "Completed",
    date: "Apr 3rd, 2024 11:12 AM",
  },
];
