"use client";

import {
  Box,
  Button,
  Flex,
  Icon,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const verificationColors: Record<string, { bg: string; color: string }> = {
  Paid: { bg: "#D1FAE5", color: "#065F46" }, // green
  Declined: { bg: "#FEE2E2", color: "#991B1B" }, // red
  Pending: { bg: "#FEF3C7", color: "#92400E" }, // yellow
};
const MovvaPayoutHistory = () => {
  return (
    <Stack w={"100%"}>
      <Flex justifyContent={"space-between"} w={"100%"}>
        <TableContainer
          w={"100%"}
          borderRadius={"12px 12px 0px 0px"}
          border={"0.5px solid #E4E7EC"}
          maxW={"840px"}
        >
          <Table variant="simple" w={"100%"}>
            <Thead bg={"#E5E7EB"}>
              <Tr>
                <Th py={"24px"} color={useColorModeValue("grey.400", "#000")}>
                  Date
                </Th>
                <Th color={useColorModeValue("grey.400", "#000")}>Payout ID</Th>
                <Th color={useColorModeValue("grey.400", "#000")}>
                  Reference No
                </Th>
                <Th color={useColorModeValue("grey.400", "#000")}>Amount</Th>
                <Th color={useColorModeValue("grey.400", "#000")}>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {movvaPayout.map((movTab, idx) => {
                const verification = movTab.status;
                const { bg: verificationBg, color: verificationColor } =
                  verificationColors[verification] || {
                    bg: "#E5E7EB",
                    color: "#111827",
                  };
                return (
                  <Tr key={idx} fontSize={"14px"}>
                    <Td>{movTab.date}</Td>
                    <Td>{movTab.payoutId}</Td>
                    <Td>{movTab.referenceNumber}</Td>

                    <Td>{movTab.Amount}</Td>
                    <Td>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        bg={verificationBg}
                        color={verificationColor}
                        px="2"
                        py="0.5"
                        w={"80px"}
                        fontWeight="medium"
                        fontSize="sm"
                        borderRadius="12px"
                        // display="inline-block"
                      >
                        {movTab.status}
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Button
          color={useColorModeValue("#fff", "#22244E")}
          border={"0.5px solid grey"}
          bg={useColorModeValue("#22244E", "#fff")}
        >
          Export CSV <Icon ml={"10px"} as={IoIosArrowDown} fontSize="lg" />
        </Button>
      </Flex>
    </Stack>
  );
};

export default MovvaPayoutHistory;

interface MovvaPayoutHistory {
  date: string;
  payoutId: string;
  referenceNumber: string;
  Amount: string;
  status: string;
}

const movvaPayout: MovvaPayoutHistory[] = [
  {
    date: "Apr 3, 2024",
    payoutId: "P123456",
    referenceNumber: "PAY8975673473",
    Amount: "N6500",
    status: "Paid",
  },
  {
    date: "Apr 3, 2024",
    payoutId: "P123456",
    referenceNumber: "PAY8975673473",
    Amount: "N6500",
    status: "Paid",
  },
  {
    date: "Apr 3, 2024",
    payoutId: "P123456",
    referenceNumber: "PAY8975673473",
    Amount: "N6500",
    status: "Declined",
  },
  {
    date: "Apr 3, 2024",
    payoutId: "P123456",
    referenceNumber: "PAY8975673473",
    Amount: "N6500",
    status: "Paid",
  },
  {
    date: "Apr 3, 2024",
    payoutId: "P123456",
    referenceNumber: "PAY8975673473",
    Amount: "N6500",
    status: "Paid",
  },
  {
    date: "Apr 3, 2024",
    payoutId: "P123456",
    referenceNumber: "PAY8975673473",
    Amount: "N6500",
    status: "Pending",
  },
  {
    date: "Apr 3, 2024",
    payoutId: "P123456",
    referenceNumber: "PAY8975673473",
    Amount: "N6500",
    status: "Paid",
  },
  {
    date: "Apr 3, 2024",
    payoutId: "P123456",
    referenceNumber: "PAY8975673473",
    Amount: "N6500",
    status: "Declined",
  },
];
