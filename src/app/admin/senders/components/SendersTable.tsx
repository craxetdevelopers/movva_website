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
};

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  Active: { bg: "#D1FAE5", color: "#065F46" },
  Inactive: { bg: "#E5E7EB", color: "#374151" },
  Flagged: { bg: "#FEE2E2", color: "#991B1B" }
};

const SendersTable = () => {
  return (
    <Stack>
      <TableContainer
        borderRadius={"12px 12px 0px 0px"}
        border={"0.5px solid #E4E7EC"}
      >
        <Table variant="simple">
          <Thead bg={"#E5E7EB"}>
            <Tr>
              <Th py={"24px"} color={useColorModeValue("grey.400", "#000")}>
                Name
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Email</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Verification
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Operational status
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>
                Delivery count
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Joined date</Th>
              <Th color={useColorModeValue("grey.400", "#000")}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {senderTable.map((sendTab, idx) => {
              const verification = sendTab.verification;
              const status = sendTab.operationalStatus;
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
                  <Td>{sendTab.name}</Td>
                  <Td>{sendTab.email}</Td>
                  <Td>
                    <Box
                      bg={verificationBg}
                      color={verificationColor}
                      px="2"
                      py="0.5"
                      w={'80px'}
                      fontWeight="medium"
                      fontSize="sm"
                      borderRadius="12px"
                      display="flex"
                      justifyContent={'center'}
                    >
                      {sendTab.verification}
                    </Box>
                  </Td>
                  <Td>
                    <Box
                      bg={statusBg}
                      color={statusColor}
                      px="2"
                      py="0.5"
                      w={'80px'}
                      fontWeight="medium"
                      fontSize="sm"
                      borderRadius="12px"
                      display="flex"
                      justifyContent={'center'}
                    >
                      {sendTab.operationalStatus}
                    </Box>
                  </Td>
                  <Td>{sendTab.deliveryCount}</Td>
                  <Td>{sendTab.doj}</Td>
                  <Td>
                    <Link href={`/admin/senders/${sendTab.id}/sender_details`}>
                      View
                    </Link>
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

export default SendersTable;

interface SenderTable {
  id: number;
  name: string;
  email: string;
  verification: string;
  operationalStatus: string;
  deliveryCount: string;
  doj: string;
}

const senderTable: SenderTable[] = [
  {
    id: 1,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Verified",
    operationalStatus: "Active",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 2,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Rejected",
    operationalStatus: "Active",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 3,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Pending",
    operationalStatus: "Inactive",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 4,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Verified",
    operationalStatus: "Active",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 5,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Pending",
    operationalStatus: "Inactive",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 6,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Pending",
    operationalStatus: "Flagged",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 7,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Pending",
    operationalStatus: "Active",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 8,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Verified",
    operationalStatus: "Flagged",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 9,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Pending",
    operationalStatus: "Active",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
  {
    id: 10,
    name: "John Adegboyega",
    email: "JohnAA24@gmail.com",
    verification: "Pending",
    operationalStatus: "Inactive",
    deliveryCount: "189",
    doj: "19-02-2025",
  },
];
