"use client";

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
import MovvaTableFilter from "./MovvaTableFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovvaTableSkeleton from "@/loader/MovvaTableSkeleton";
import { MovvaTable } from "@/types/movvaTypes";
import { useAuth } from "@/contexts/AuthContext";
import dayjs from "dayjs";

const verificationColors: Record<string, { bg: string; color: string }> = {
  verified: { bg: "#D1FAE5", color: "#065F46" }, // green
  rejected: { bg: "#FEE2E2", color: "#991B1B" }, // red
  pending: { bg: "#FEF3C7", color: "#92400E" }, // yellow
};

const onboardingStatusColors: Record<string, { bg: string; color: string }> = {
  Completed: { bg: "#D1FAE5", color: "#065F46" },
  Incompleted: { bg: "#E5E7EB", color: "#374151" },
};

const MovvasTable = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");

const color = useColorModeValue("grey.400", "#000")
const {token} = useAuth()

  const { data, isError, isLoading, refetch } = useQuery<MovvaTable[]>({
    queryKey: ["movvas_table"],
    queryFn: async () => {
      
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/users?page=1&limit=10&type=mover`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(res?.data?.data);
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
        <MovvaTableFilter />
        <Button bg={"none"}> Clear all</Button>
      </Flex>
      {isLoading ? (
        <MovvaTableSkeleton />
      ) : isError ? (
        <VStack h={'50vh'} justifyContent={'center'} textAlign="center" py={10}>
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
                <Th color={color}>
                  Phone Number
                </Th>
                <Th color={color}>
                  Verification
                </Th>
                <Th color={color}>
                  Onboarding status
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
              {data?.map((movTab, idx) => {
                const verification = movTab?.status;
                const status = movTab?.admin_confirmed == 1? 'Completed': 'Incompleted';
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
                    <Td>{movTab?.first_name} {movTab?.last_name}</Td>
                    <Td>{movTab?.phone_number}</Td>
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
                        display={'flex'}
                        justifyContent={'center'}
                      >
                        {movTab?.status}
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
                      display={'flex'}
                      justifyContent={'center'}
                      >
                        {movTab?.admin_confirmed == 1? "Completed" : "Incompleted"}
                      </Box>
                    </Td>
                    <Td>0</Td>
                    <Td>{dayjs(movTab?.created_at).format("DD-MM-YYYY")}</Td>
                    <Td>
                      <Link href={`/admin/movvas/${movTab.id}/movva_details`}>
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

export default MovvasTable;

// interface MovvaTable {
//   id: number;
//   name: string;
//   phoneNumber: string;
//   verification: string;
//   onboardingStatus: string;
//   deliveryCount: string;
//   doj: string;
// }

// const movvaTable: MovvaTable[] = [
//   {
//     id: 1,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Verified",
//     onboardingStatus: "Completed",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 2,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Rejected",
//     onboardingStatus: "Incomplete",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 3,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Pending",
//     onboardingStatus: "Incomplete",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 4,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Verified",
//     onboardingStatus: "Completed",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 5,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Pending",
//     onboardingStatus: "Incomplete",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 6,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Pending",
//     onboardingStatus: "Incomplete",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 7,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Pending",
//     onboardingStatus: "Incomplete",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 8,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Verified",
//     onboardingStatus: "Completed",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 9,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Pending",
//     onboardingStatus: "Incomplete",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
//   {
//     id: 10,
//     name: "John Adegboyega",
//     phoneNumber: "+234908765431",
//     verification: "Pending",
//     onboardingStatus: "Incomplete",
//     deliveryCount: "189",
//     doj: "19-02-2025",
//   },
// ];
