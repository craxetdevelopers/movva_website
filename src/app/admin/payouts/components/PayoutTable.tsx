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
import PayoutDetails from "./PayoutDetails";
import { Withdrawal } from "@/types/payoutTypes";
import MovvaTableSkeleton from "@/loader/MovvaTableSkeleton";
import dayjs from "dayjs";

interface PayoutDetailsProps {
  data: Withdrawal[];
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
}

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  paid: { bg: "#D1FAE5", color: "#065F46" },
  rejected: { bg: "#FEE2E2", color: "#991B1B" },
  pending: { bg: "#FEF3C7", color: "#92400E" },
  approved: { bg: "#800080", color: "" },
};

const PayoutTable = ({
  data,
  isError,
  isLoading,
  refetch,
}: PayoutDetailsProps) => {
  // const bg = useColorModeValue("#ffffff", "grey.800");
  const color = useColorModeValue("grey.400", "#000");
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");

  return (
    <Stack mt={"70px"} w={"100%"} maxW={"1150px"}>
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <Button
        border={'1px solid grey'}
          onClick={() => {
            refetch();
          }}
          
        >
          Refresh Table
        </Button>
      </Box>
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
                  Name
                </Th>
                <Th color={color}>Amount</Th>
                <Th color={color}>Status</Th>
                <Th color={color}>Payment method</Th>

                <Th color={color}>Withdrawal date</Th>
                <Th w={"150px"} color={color}></Th>
              </Tr>
            </Thead>
            <Tbody bg={backgroundColor}>
              {data?.map((payoutTab, idx) => {
                const status = payoutTab.status;
                const { bg: statusBg, color: statusColor } =
                  onboardingStatusColors[status] || {
                    bg: "#E5E7EB",
                    color: "#111827",
                  };
                return (
                  <Tr key={idx} fontSize={"14px"}>
                    <Td>
                      {payoutTab?.user?.first_name} {payoutTab?.user?.last_name}
                    </Td>
                    <Td>N{payoutTab?.amount}</Td>
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
                        textTransform={"capitalize"}
                      >
                        {payoutTab?.status}
                      </Box>
                    </Td>
                    <Td>{payoutTab?.method}</Td>

                    <Td>
                      {payoutTab?.status == "paid"
                        ? dayjs(payoutTab.withdrawal_date).format(
                            "MMMM D, YYYY h:mmA"
                          )
                        : "Awaiting..."}
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
                        {payoutTab?.status != "paid" && (
                          <PayoutDetails
                            payoutId={payoutTab?.id}
                            payoutStatus={payoutTab?.status}
                          />
                        )}
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

export default PayoutTable;

// export interface PayoutTables {
//   name: string;
//   amount: string;
//   status: string;
//   paymentMethod: string;
//   withdrawalDate: string;
// }

// const payoutTables: PayoutTables[] = [
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Approved",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Rejected",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Approved",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Pending",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Approved",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Rejected",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Approved",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Approved",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Pending",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
//   {
//     name: "John Adegboyega",
//     amount: "$98,000",
//     status: "Approved",
//     paymentMethod: "Bank Transfer",
//     withdrawalDate: "19-02-2025",
//   },
// ];
