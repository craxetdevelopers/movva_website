"use client";

import {
  Box,
  Checkbox,
  Flex,
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
import VerifyActions from "./VerifyActions";
import VerifyDetails from "./VerifyDetails";

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  Verified: { bg: "#D1FAE5", color: "#065F46" },
  Rejected: { bg: "#FEE2E2", color: "#991B1B" },
  Pending: { bg: "#FEF3C7", color: "#92400E" },
};

const VerificationTable = () => {
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
              <Th w={"150px"} color={useColorModeValue("grey.400", "#000")}>
                Action
              </Th>
              <Th
                w={"150px"}
                color={useColorModeValue("grey.400", "#000")}
              ></Th>
            </Tr>
          </Thead>
          <Tbody bg={backgroundColor}>
            {verificationTables.map((verificationTab, idx) => {
              const status = verificationTab.status;
              const { bg: statusBg, color: statusColor } =
                onboardingStatusColors[status] || {
                  bg: "#E5E7EB",
                  color: "#111827",
                };
              return (
                <Tr key={idx} fontSize={"14px"}>
                  <Td gap={"15px"}>
                    <Flex gap={"10px"}>
                      <Checkbox /> {verificationTab.name}
                    </Flex>
                  </Td>

                  <Td>{verificationTab.IdDoc}</Td>

                  <Td>{verificationTab.POA}</Td>
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
                      {verificationTab.status}
                    </Box>
                  </Td>

                  <Td>{verificationTab.submissionDate}</Td>
                  <Td>
                    <VStack
                      fontWeight="medium"
                      fontSize="sm"
                      w="100%"
                      cursor={"pointer"}
                      alignItems={"start"}
                    >
                      <VerifyActions verification={verificationTab} />
                    </VStack>
                  </Td>
                  <Td>
                    <VStack
                      fontWeight="medium"
                      fontSize="sm"
                      w="100%"
                      cursor={"pointer"}
                      alignItems={"start"}
                    >
                      <VerifyDetails  />
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

export default VerificationTable;

export interface VerificationTables {
  id: string;
  name: string;
  IdDoc: string;
  POA: string;
  status: string;
  submissionDate: string;
}

const verificationTables: VerificationTables[] = [
  {
    id: "1",
    name: "John Adegboyega",
    IdDoc: "International Passport",
    POA: "Bank Statement",
    status: "Verified",
    submissionDate: "Apr 3rd, 2024 11:12 AM",
  },
  {
    id: "2",
    name: "John Adegboyega",
    IdDoc: "Voter’s Card",
    POA: "Utility Bill",
    status: "Pending",
    submissionDate: "Apr 3rd, 2024 11:12 AM",
  },
  {
    id: "3",
    name: "Matthew Adegboyega",
    IdDoc: "International Passport",
    POA: "Bank Statement",
    status: "Pending",
    submissionDate: "Apr 3rd, 2024 11:12 AM",
  },
  {
    id: "4",
    name: "John Adegboyega",
    IdDoc: "National ID Card",
    POA: "Tenancy Agreement",
    status: "Rejected",
    submissionDate: "Apr 3rd, 2024 11:12 AM",
  },
  {
    id: "5",
    name: "Cynthia Adegboyega",
    IdDoc: "Driver’s License",
    POA: "Tax Document",
    status: "Verified",
    submissionDate: "Apr 3rd, 2024 11:12 AM",
  },
  {
    id: "6",
    name: "John Adegboyega",
    IdDoc: "International Passport",
    POA: "Bank Statement",
    status: "Verified",
    submissionDate: "Apr 3rd, 2024 11:12 AM",
  },
  {
    id: "7",
    name: "Matthew Adegboyega",
    IdDoc: "National ID Card",
    POA: "Bank Statement",
    status: "Pending",
    submissionDate: "Apr 3rd, 2024 11:12 AM",
  },
];
