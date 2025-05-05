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
import PayoutDetails from "./PayoutDetails";

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  Approved: { bg: "#D1FAE5", color: "#065F46" },
  Rejected: { bg: "#FEE2E2", color: "#991B1B" },
  Pending: { bg: "#FEF3C7", color: "#92400E" },
};

const PayoutTable = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  return (
    <Stack mt={"70px"} w={"100%"} maxW={"1150px"}>
      <TableContainer
        borderRadius={"12px 12px 0px 0px"}
        border={"0.5px solid #E4E7EC"}
        mt={"10px"}
      >
        <Table variant="simple">
          <Thead bg={"#E5E7EB"}>
            <Tr>
              <Th py={"24px"} color={useColorModeValue("grey.400", "#000")}>
                Name
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Amount</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Status</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Payment method
              </Th>

              <Th color={useColorModeValue("grey.400", "#000")}>
                Withdrawal date
              </Th>
              <Th
                w={"150px"}
                color={useColorModeValue("grey.400", "#000")}
              ></Th>
            </Tr>
          </Thead>
          <Tbody bg={backgroundColor}>
            {payoutTables.map((payoutTab, idx) => {
              const status = payoutTab.status;
              const { bg: statusBg, color: statusColor } =
                onboardingStatusColors[status] || {
                  bg: "#E5E7EB",
                  color: "#111827",
                };
              return (
                <Tr key={idx} fontSize={"14px"}>
                  <Td>{payoutTab.name}</Td>
                  <Td>{payoutTab.amount}</Td>
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
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      {payoutTab.status}
                    </Box>
                  </Td>
                  <Td>{payoutTab.paymentMethod}</Td>

                  <Td>{payoutTab.withdrawalDate}</Td>

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
                      <PayoutDetails />
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

export default PayoutTable;

export interface PayoutTables {
  name: string;
  amount: string;
  status: string;
  paymentMethod: string;
  withdrawalDate: string;
}

const payoutTables: PayoutTables[] = [
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Approved",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Rejected",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Approved",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Pending",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Approved",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Rejected",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Approved",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Approved",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Pending",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    amount: "$98,000",
    status: "Approved",
    paymentMethod: "Bank Transfer",
    withdrawalDate: "19-02-2025",
  },
];
