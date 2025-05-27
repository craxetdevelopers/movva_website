"use client";

import {
  Box,
  Button,
  Stack,
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
import TripDetails from "./TripDetails";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import { TripItem } from "@/types/tripTypes";
import MovvaTableSkeleton from "@/loader/MovvaTableSkeleton";

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  confirmed: { bg: "#D1FAE5", color: "#065F46" },
  Rejected: { bg: "#FEE2E2", color: "#991B1B" },
  "In transit": { bg: "#E0F2FE", color: "#2563EB" },
};

const TripTable = () => {
  const { token } = useAuth();
  const bg = useColorModeValue("#ffffff", "grey.800");
  const color = useColorModeValue("grey.400", "#000")

  const { data, isError, isLoading, refetch } = useQuery<TripItem[]>({
    queryKey: ["movvas_table"],
    enabled: !!token,
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/deliveries?page=1&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res?.data?.data);
      return res?.data?.data;
    },
  });

  return (
    <Stack mt={"70px"}>
      {isLoading ? (
        <MovvaTableSkeleton />
      ) : isError ? (
        <VStack h={"50vh"} justifyContent={"center"} textAlign="center" py={10}>
          <Text fontSize="md" mb={4}>
            Something went wrong. Please try again.
          </Text>
          <Button onClick={() => refetch()}>Retry</Button>
        </VStack>
      ) : (
        <TableContainer
          borderRadius={"12px 12px 0px 0px"}
          border={"0.5px solid #E4E7EC"}
          mt={"10px"}
        >
          <Table variant="simple">
            <Thead bg={"#E5E7EB"}>
              <Tr>
                <Th py={"24px"} color={color}>
                  Delivery ID
                </Th>
                <Th color={color}>Movva</Th>
                <Th color={color}>Sender</Th>
                <Th color={color}>
                  Pickup Location
                </Th>
                <Th color={color}>
                  Drop off Location
                </Th>
                <Th color={color}>Status</Th>
                <Th
                  w={"150px"}
                  color={color}
                ></Th>
              </Tr>
            </Thead>
            <Tbody bg={bg}>
              {data?.map((tripTab, idx) => {
                const status = tripTab.status;
                const { bg: statusBg, color: statusColor } =
                  onboardingStatusColors[status] || {
                    bg: "#E5E7EB",
                    color: "#111827",
                  };
                return (
                  <Tr key={idx} fontSize={"14px"}>
                    <Td w={'100px'}>{tripTab?.id}</Td>
                    <Td>{tripTab?.mover?.first_name} {tripTab?.mover?.last_name}</Td>
                    <Td>{tripTab?.sender?.first_name} {tripTab?.sender?.last_name}</Td>
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
                        {tripTab?.pickup_address}
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
                        {tripTab?.dropoff_address}
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
                        textTransform={'capitalize'}
                        maxW="200px"
                        display={"flex"}
                        justifyContent={"center"}
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
                        cursor={"pointer"}
                        wordBreak="break-word"
                      >
                        {/* <Icon as={BsThreeDots} fontSize="lg" /> */}
                        <TripDetails delivery={tripTab} />
                      </VStack>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Stack>
  );
};

export default TripTable;

// export interface TripDelivHistory {
//   delievryId: string;
//   movva: string;
//   pickupLocation: string;
//   dropoffLocation: string;
//   status: string;
// }

// const tripDelivery: TripDelivHistory[] = [
//   {
//     delievryId: "DR002119",
//     movva: "John Adenuga P.",
//     pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
//     dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
//     status: "Completed",
//   },
//   {
//     delievryId: "DR002111",
//     movva: "John Adenuga P.",
//     pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
//     dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
//     status: "In transit",
//   },
//   {
//     delievryId: "DR002112",
//     movva: "John Adenuga P.",
//     pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
//     dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
//     status: "Cancelled",
//   },
//   {
//     delievryId: "DR002113",
//     movva: "John Adenuga P.",
//     pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
//     dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
//     status: "Completed",
//   },
//   {
//     delievryId: "DR002114",
//     movva: "John Adenuga P.",
//     pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
//     dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
//     status: "Cancelled",
//   },
//   {
//     delievryId: "DR002115",
//     movva: "John Adenuga P.",
//     pickupLocation: "29 Herbert Macaulay Avenue, Ikeja, Lagos.",
//     dropoffLocation: "64 Obafemi Awolowo road, Ikeja, Lagos.",
//     status: "In transit",
//   },
// ];
