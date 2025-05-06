"use client";

import {
  Box,
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

const insuranceColors: Record<string, { bg: string; color: string }> = {
  Accepted: { bg: "#D1FAE5", color: "#065F46" }, // green
  Rejected: { bg: "#FEE2E2", color: "#991B1B" }, // red
  Pending: { bg: "#FEF3C7", color: "#92400E" }, // yellow
};

const refundStatusColors: Record<string, { bg: string; color: string }> = {
  Refunded: { bg: "#D1FAE5", color: "#065F46" },
  "No refund": { bg: "#E5E7EB", color: "#374151" },
};

const InsuranceTable = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  return (
    <TableContainer
      borderRadius={"12px 12px 0px 0px"}
      border={"1px solid #E4E7EC"}
      mt={"60px"}
    >
      <Table variant="simple">
        <Thead bg={"#E5E7EB"}>
          <Tr>
            <Th py={"24px"} color={useColorModeValue("grey.400", "#000")}>
              Sender
            </Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Date</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Calim Type</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Description</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>
              Insurance Status
            </Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Refund Status</Th>
          </Tr>
        </Thead>
        <Tbody bg={backgroundColor}>
          {insureTable.map((insureTab, idx) => {
            const verification = insureTab.insuranceStatus;
            const status = insureTab.refundStatus;
            const { bg: verificationBg, color: verificationColor } =
              insuranceColors[verification] || {
                bg: "#E5E7EB",
                color: "#111827",
              };

            const { bg: statusBg, color: statusColor } = refundStatusColors[
              status
            ] || {
              bg: "#E5E7EB",
              color: "#111827",
            };
            return (
              <Tr key={idx}>
                <Td>{insureTab.sender}</Td>
                <Td>
                  <Box
                    fontWeight="medium"
                    fontSize="sm"
                    borderRadius="12px"
                    w="100%"
                    maxW="100px"
                    whiteSpace="normal"
                    wordBreak="break-word"
                  >
                    {insureTab.date}
                  </Box>
                </Td>
                <Td>{insureTab.claimType}</Td>
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
                    {insureTab.description}
                  </Box>
                </Td>
                <Td>
                  <Box
                    bg={verificationBg}
                    color={verificationColor}
                    px="2"
                    py="0.5"
                    fontWeight="medium"
                    fontSize="sm"
                    borderRadius="12px"
                    w="100%"
                    maxW="100px"
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    {insureTab.insuranceStatus}
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
                    maxW="100px"
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    {insureTab.refundStatus}
                  </Box>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default InsuranceTable;

interface InsureTable {
  sender: string;
  date: string;
  claimType: string;
  description: string;
  insuranceStatus: string;
  refundStatus: string;
}

const insureTable: InsureTable[] = [
  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Item Loss",
    description: "Package not delivered to recipient",
    insuranceStatus: "Accepted",
    refundStatus: "Refunded",
  },

  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Item Loss",
    description: "Package not delivered to recipient",
    insuranceStatus: "Pending",
    refundStatus: "Refunded",
  },

  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Damaged",
    description: "Package not delivered to recipient",
    insuranceStatus: "Accepted",
    refundStatus: "No refund",
  },
  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Item Loss",
    description: "Package not delivered to recipient",
    insuranceStatus: "Accepted",
    refundStatus: "Refunded",
  },
  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Item Loss",
    description: "Package not delivered to recipient",
    insuranceStatus: "Rejected",
    refundStatus: "No refund",
  },
  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Item Loss",
    description: "Wrong Package",
    insuranceStatus: "Accepted",
    refundStatus: "Refunded",
  },
  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Item Loss",
    description: "Package not delivered to recipient",
    insuranceStatus: "Pending",
    refundStatus: "Refunded",
  },
  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Item Loss",
    description: "Package not delivered to recipient",
    insuranceStatus: "Rejected",
    refundStatus: "Refunded",
  },
  {
    sender: "John Adegboyega",
    date: "Apr 3rd, 2024 11:12 AM",
    claimType: "Item Loss",
    description: "Wrong Package",
    insuranceStatus: "Accepted",
    refundStatus: "No refund",
  },
];
