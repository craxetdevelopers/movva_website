import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
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
import SendersTableFilter from "./SendersTableFilter";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import MovvaTableSkeleton from "@/loader/MovvaTableSkeleton";
import { SenderTable } from "@/types/senderTypes";
import dayjs from "dayjs";

const verificationColors: Record<string, { bg: string; color: string }> = {
  verified: { bg: "#D1FAE5", color: "#065F46" }, // green
  rejected: { bg: "#FEE2E2", color: "#991B1B" }, // red
  pending: { bg: "#FEF3C7", color: "#92400E" }, // yellow
};

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  Active: { bg: "#D1FAE5", color: "#065F46" },
  Inactive: { bg: "#E5E7EB", color: "#374151" },
  Flagged: { bg: "#FEE2E2", color: "#991B1B" },
};

const SendersTable = () => {
  const { token } = useAuth();
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  const color = useColorModeValue("grey.400", "#000");

  const { data, isError, isLoading, refetch } = useQuery<SenderTable[]>({
    queryKey: ["movvas_table"],
    enabled: !!token,
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/users?page=1&limit=10&type=user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("hal", res?.data?.data);
      return res?.data?.data;
    },
  });

  return (
    <Stack mt={"20px"}>
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
        <SendersTableFilter />
        <Button bg={"none"}> Clear all</Button>
      </Flex>

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
          border={"1px solid #E4E7EC"}
          mt={"20px"}
        >
          <Table variant="simple">
            <Thead bg={"#E5E7EB"}>
              <Tr>
                <Th py={"24px"} color={color}>
                  Name
                </Th>
                <Th color={color}>Email</Th>
                <Th color={color}>
                  Verification
                </Th>
                <Th color={color}>
                  Operational status
                </Th>
                <Th color={color}>
                  Delivery count
                </Th>
                <Th color={color}>
                  Joined date
                </Th>
                <Th color={color}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody bg={backgroundColor}>
              {data?.map((sendTab, idx) => {
                const verification = sendTab?.status;
                const status = sendTab?.admin_confirmed == 1 ? "Active" : "Inactive";
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
                    <Td>{sendTab?.first_name} {sendTab?.last_name}</Td>
                    <Td>{sendTab.email}</Td>
                    <Td>
                      <Box
                        bg={verificationBg}
                        color={verificationColor}
                        px="2"
                        py="0.5"
                        w={"80px"}
                        fontWeight="medium"
                        fontSize="sm"
                        borderRadius="12px"
                        display="flex"
                        justifyContent={"center"}
                      >
                        {sendTab?.status}
                      </Box>
                    </Td>
                    <Td>
                      <Box
                        bg={statusBg}
                        color={statusColor}
                        px="2"
                        py="0.5"
                        w={"80px"}
                        fontWeight="medium"
                        fontSize="sm"
                        borderRadius="12px"
                        display="flex"
                        justifyContent={"center"}
                      >
                        {sendTab?.admin_confirmed == 1
                          ? "Active"
                          : "Inactive"}
                      </Box>
                    </Td>
                    <Td>0</Td>
                     <Td>{dayjs(sendTab?.created_at).format("DD-MM-YYYY")}</Td>
                    <Td>
                      <Link
                        href={`/admin/senders/${sendTab.id}/sender_details/`}
                      >
                        View
                      </Link>
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

export default SendersTable;

// interface SenderTable {
//   id: number;
//   name: string;
//   email: string;
//   verification: string;
//   operationalStatus: string;
//   deliveryCount: string;
//   doj: string;
// }

// const senderTable: SenderTable[] = [
//   {
//     id: 1,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Verified",
//     operationalStatus: "Active",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 2,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Rejected",
//     operationalStatus: "Active",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 3,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Pending",
//     operationalStatus: "Inactive",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 4,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Verified",
//     operationalStatus: "Active",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 5,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Pending",
//     operationalStatus: "Inactive",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 6,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Pending",
//     operationalStatus: "Flagged",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 7,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Pending",
//     operationalStatus: "Active",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 8,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Verified",
//     operationalStatus: "Flagged",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 9,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Pending",
//     operationalStatus: "Active",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 10,
//     name: "John Adegboyega",
//     email: "JohnAA24@gmail.com",
//     verification: "Pending",
//     operationalStatus: "Inactive",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
// ];
