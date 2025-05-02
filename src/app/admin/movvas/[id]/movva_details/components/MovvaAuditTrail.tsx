import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
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
import { IoIosArrowDown } from "react-icons/io";
import MovvaAuditTrailFilter from "./MovvaAuditTrailFilter";

const MovvaAuditTrail = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  return (
    <Stack w={"100%"} mt={"20px"}>
      <Flex w={"100%"} gap={"10px"} justifyContent={"start"}>
        <VStack alignItems={"flex-end"}>
          <VStack alignItems={"end"} w={"330px"} borderRadius={"9px"}>
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
        <MovvaAuditTrailFilter />
        <Button bg={"none"}> Clear all</Button>
      </Flex>
      <Flex justifyContent={"space-between"} w={"100%"} mt={"10px"}>
        <TableContainer
          w={"100%"}
          borderRadius={"12px 12px 0px 0px"}
          border={"1px solid #E4E7EC"}
          maxW={"840px"}
        >
          <Table variant="simple" w={"100%"}>
            <Thead bg={"#E5E7EB"}>
              <Tr>
                <Th py={"24px"} color={useColorModeValue("grey.400", "#000")}>
                  Change
                </Th>
                <Th color={useColorModeValue("grey.400", "#000")}>Date/Time</Th>
                <Th color={useColorModeValue("grey.400", "#000")}>Admin</Th>
                <Th color={useColorModeValue("grey.400", "#000")}>Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              {movvaAudit.map((movTab, idx) => {
                return (
                  <Tr key={idx} fontSize={"14px"}>
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
                        {movTab.change}
                      </Box>
                    </Td>
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
                        {movTab.date}
                      </Box>
                    </Td>
                    <Td>{movTab.admin}</Td>

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
                        {movTab.details}
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

export default MovvaAuditTrail;

interface MovvaAuditTrail {
  change: string;
  date: string;
  admin: string;
  details: string;
}

const movvaAudit: MovvaAuditTrail[] = [
  {
    change: "Change a payout request",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Insufficient funds",
  },
  {
    change: "Edit a user profile",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Phone number +2349802341121",
  },
  {
    change: "Delivery status change",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Phone number +2349802341121",
  },
  {
    change: "Approve user onboarding request",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Insufficient funds",
  },
  {
    change: "Change admin role",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Insufficient funds",
  },
  {
    change: "Delivery status change",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Insufficient funds",
  },
  {
    change: "Edit a user profile",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Insufficient funds",
  },
  {
    change: "Change admin role",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Insufficient funds",
  },
  {
    change: "Change a payout request",
    date: "25 Mar 2024, 11:32 am",
    admin: "Cynthia",
    details: "Insufficient funds",
  },
];
