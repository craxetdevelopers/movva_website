"use client";

import {
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
import InsuredPremiumDetails from "./InsuredPremiumDetails";

const InsuredPremiumTable = () => {
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
              Items{" "}
            </Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Item value</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Sender</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Movva</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Premium Paid</Th>
            <Th color={useColorModeValue("grey.400", "#000")}>Insured On</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody bg={backgroundColor}>
          {insuredPremiumTable.map((insureTab, idx) => {
            return (
              <Tr key={idx}>
                <Td>{insureTab.items}</Td>
                <Td>{insureTab.itemValue}</Td>
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
                <Td>{insureTab.premiumPaid}</Td>
                <Td>{insureTab.insuredOn}</Td>
                <Td><InsuredPremiumDetails /></Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default InsuredPremiumTable;

interface InsuredPremiumsTable {
  items: string;
  itemValue: string;
  sender: string;
  senderEmail: string;
  movva: string;
  movvaEmail: string;
  premiumPaid: string;
  insuredOn: string;
}

const insuredPremiumTable: InsuredPremiumsTable[] = [
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
  {
    items: "Ipad Air",
    itemValue: "N1,150,000",
    sender: "Bassey Peter",
    senderEmail: "(basseypeter@gmail.com)",
    movva: "John Akpan",
    movvaEmail: "(JohnAkpan@gmail.com)",
    premiumPaid: "N50,000",
    insuredOn: "April 10",
  },
];
