"use client";

import {
  Box,
  Link,
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

const verificationColors: Record<string, { bg: string; color: string }> = {
  Verified: { bg: "#D1FAE5", color: "#065F46" }, // green
  Rejected: { bg: "#FEE2E2", color: "#991B1B" }, // red
  Pending: { bg: "#FEF3C7", color: "#92400E" }, // yellow
  Completed: { bg: "#D1FAE5", color: "#065F46" },
  Incompleted: { bg: "#E5E7EB", color: "#374151" },
};

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
    Completed: { bg: "#D1FAE5", color: "#065F46" },
    Incompleted: { bg: "#E5E7EB", color: "#374151" },
  };

const MovvasTable = () => {
  return (
    <Stack>
      <TableContainer
        borderRadius={"12px 12px 0px 0px"}
        border={"0.5px solid #E4E7EC"}
      >
        <Table variant="simple">
          <Thead bg={"#E5E7EB"} >
            <Tr >
              <Th py={'24px'} color={useColorModeValue("grey.400", "#000")}>Name</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Phone Number
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Verification
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Onboarding status
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Delivery count
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Joined date</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {movvaTable.map((movTab, idx) => {
              const verification = movTab.verification;
              const status = movTab.onboardingStatus;
              const { bg: verificationBg, color: verificationColor } =
                verificationColors[verification] || {
                  bg: "#E5E7EB",
                  color: "#111827",
                };

              const { bg: statusBg, color: statusColor } =
                onboardingStatusColors[status] || {
                  bg: "#E5E7EB",
                  color: "#111827",
                };
              return (
                <Tr key={idx}>
                  <Td>{movTab.name}</Td>
                  <Td>{movTab.phoneNumber}</Td>
                  <Td>
                    <Box
                      bg={verificationBg}
                      color={verificationColor}
                      px="2"
                      py="0.5"
                      fontWeight="medium"
                      fontSize="sm"
                      borderRadius="12px"
                      display="inline-block"
                    >
                      {movTab.verification}
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
                      {movTab.onboardingStatus}
                    </Box>
                  </Td>
                  <Td>{movTab.deliveryCount}</Td>
                  <Td>{movTab.doj}</Td>
                  <Td>
                    <Link href="">View</Link>
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

export default MovvasTable;

interface MovvaTable {
  name: string;
  phoneNumber: string;
  verification: string;
  onboardingStatus: string;
  deliveryCount: string;
  doj: string;
}

const movvaTable: MovvaTable[] = [
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Verified",
    onboardingStatus: "Completed",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Rejected",
    onboardingStatus: "Incomplete",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Pending",
    onboardingStatus: "Incomplete",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Verified",
    onboardingStatus: "Completed",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Pending",
    onboardingStatus: "Incomplete",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Pending",
    onboardingStatus: "Incomplete",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Pending",
    onboardingStatus: "Incomplete",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Verified",
    onboardingStatus: "Completed",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Pending",
    onboardingStatus: "Incomplete",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    name: "John Adegboyega",
    phoneNumber: "+234908765431",
    verification: "Pending",
    onboardingStatus: "Incomplete",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
];
