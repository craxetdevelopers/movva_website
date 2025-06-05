"use client";

import {
  Box,
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
} from "@chakra-ui/react";
import React from "react";
import LiveInsuredDetails from "./LiveInsuredDetails";

const insuranceColors: Record<string, { bg: string; color: string }> = {
  Accepted: { bg: "#D1FAE5", color: "#065F46" }, // green
  Rejected: { bg: "#FEE2E2", color: "#991B1B" }, // red
  Pending: { bg: "#FEF3C7", color: "#92400E" }, // yellow
};

const LiveInsuredTable = () => {
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
            Delivery ID
            </Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Item</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Sender</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Movva</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>
            Delivery Status
            </Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Premium</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody bg={backgroundColor}>
          {liveInsureTable.map((insureTab, idx) => {
            const verification = insureTab.deliveryStatus;
            const { bg: verificationBg, color: verificationColor } =
              insuranceColors[verification] || {
                bg: "#E5E7EB",
                color: "#111827",
              };

            return (
              <Tr key={idx}>
                <Td>{insureTab.deliveryId}</Td>
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
                    {insureTab.item}
                  </Box>
                </Td>
                <Td>
                  <Stack>
                    <Text>{insureTab.sender}</Text>
                    <Text>{insureTab.senderEmail}</Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack>
                    <Text>{insureTab.movva}</Text>
                    <Text>{insureTab.movvaEmail}</Text>
                  </Stack>
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
                    {insureTab.deliveryStatus}
                  </Box>
                </Td>
                <Td>{insureTab.Premium}</Td>
                <Td><LiveInsuredDetails /></Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default LiveInsuredTable;

interface LiveInsureTable {
  deliveryId: string;
  item: string;
  sender: string;
  senderEmail: string;
  movva: string;
  movvaEmail: string
  deliveryStatus: string;
  Premium: string;
}

const liveInsureTable: LiveInsureTable[] = [
  {
    deliveryId: "LP90871577",
    item: "Electronics Package",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    deliveryStatus: "Accepted",
    Premium: "N50,000",
  },
  {
    deliveryId: "LP90871571",
    item: "Electronics Package",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    deliveryStatus: "Rejected",
    Premium: "N50,000",
  },

  {
    deliveryId: "LP90871572",
    item: "Electronics Package",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    deliveryStatus: "Accepted",
    Premium: "N50,000",
  },
  {
    deliveryId: "LP90871573",
    item: "Electronics Package",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    deliveryStatus: "Pending",
    Premium: "N50,000",
  },
  {
    deliveryId: "LP90871574",
    item: "Electronics Package",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    deliveryStatus: "Pending",
    Premium: "N50,000",
  },
  {
    deliveryId: "LP90871576",
    item: "Electronics Package",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    deliveryStatus: "Accepted",
    Premium: "N50,000",
  },
];
