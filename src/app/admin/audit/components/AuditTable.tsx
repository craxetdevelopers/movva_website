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
} from "@chakra-ui/react";
import React from "react";

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  Approved: { bg: "#D1FAE5", color: "#065F46" },
  Rejected: { bg: "#FEE2E2", color: "#991B1B" },
  Pending: { bg: "#FEF3C7", color: "#92400E" },
};

const AuditTable = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  return (
    <Stack mt={"70px"} w={"100%"}>
      <TableContainer
        borderRadius={"12px 12px 0px 0px"}
        border={"0.5px solid #E4E7EC"}
        mt={"10px"}
      >
        <Table variant="simple">
          <Thead bg={"#E5E7EB"}>
            <Tr>
              <Th py={"24px"} color={useColorModeValue("grey.400", "#000")}>
                Timestamp
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Actor</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Action Type</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Entity Affected
              </Th>

              <Th color={useColorModeValue("grey.400", "#000")}>
                Change Summary
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Status</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Comments</Th>
            </Tr>
          </Thead>
          <Tbody bg={backgroundColor}>
            {auditTables.map((auditTab, idx) => {
              const status = auditTab.status;
              const { bg: statusBg, color: statusColor } =
                onboardingStatusColors[status] || {
                  bg: "#E5E7EB",
                  color: "#111827",
                };
              return (
                <Tr key={idx} fontSize={"14px"}>
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
                      {auditTab.timeStamp}
                    </Box>
                  </Td>
                  <Td>{auditTab.actor}</Td>

                  <Td>{auditTab.actionType}</Td>

                  <Td>{auditTab.entityAffected}</Td>
                  <Td>
                    <Box
                      fontWeight="medium"
                      fontSize="sm"
                      borderRadius="12px"
                      w="100%"
                      maxW="150px"
                      whiteSpace="normal"
                      wordBreak="break-word"
                    >
                      {auditTab.changeSummery}
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
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      {auditTab.status}
                    </Box>
                  </Td>
                  <Td>{auditTab.comment}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default AuditTable;

export interface AuditTables {
  timeStamp: string;
  actor: string;
  actionType: string;
  entityAffected: string;
  changeSummery: string;
  status: string;
  comment: string;
}

const auditTables: AuditTables[] = [
  {
    timeStamp: "May 4th, 2024 11:12 AM",
    actor: "Admin",
    actionType: "Edited User",
    entityAffected: "Movva Profile",
    changeSummery: "Amount $124.00-$234.89",
    status: "Approved",
    comment: "No comments",
  },
  {
    timeStamp: "May 4th, 2024 11:12 AM",
    actor: "Admin",
    actionType: "Approved Payout",
    entityAffected: "Movva Profile",
    changeSummery: "Amount $124.00-$234.89",
    status: "Pending",
    comment: "No comments",
  },
  {
    timeStamp: "May 4th, 2024 11:12 AM",
    actor: "Admin",
    actionType: "Edited User",
    entityAffected: "Movva Profile",
    changeSummery: "Amount $124.00-$234.89",
    status: "Approved",
    comment: "No comments",
  },
  {
    timeStamp: "May 4th, 2024 11:12 AM",
    actor: "Admin",
    actionType: "Edited User",
    entityAffected: "Movva Profile",
    changeSummery: "Amount $124.00-$234.89",
    status: "Pending",
    comment: "No comments",
  },
  {
    timeStamp: "May 4th, 2024 11:12 AM",
    actor: "Admin",
    actionType: "Canceled trip",
    entityAffected: "Trip",
    changeSummery: "Amount $124.00-$234.89",
    status: "Approved",
    comment: "No comments",
  },
  {
    timeStamp: "May 4th, 2024 11:12 AM",
    actor: "Admin",
    actionType: "Login",
    entityAffected: "Login Activity",
    changeSummery: "Amount $124.00-$234.89",
    status: "Pending",
    comment: "No comments",
  },
  {
    timeStamp: "May 4th, 2024 11:12 AM",
    actor: "Admin",
    actionType: "Edited User",
    entityAffected: "Movva Profile",
    changeSummery: "Amount $124.00-$234.89",
    status: "Approved",
    comment: "No comments",
  },
  {
    timeStamp: "May 4th, 2024 11:12 AM",
    actor: "Admin",
    actionType: "Freeze Payout",
    entityAffected: "Movva Profile",
    changeSummery: "Amount $124.00-$234.89",
    status: "Pending",
    comment: "No comments",
  },
];
