"use client";

import {
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
import AddAdminRole from "./AddAdminRole";

const SettingsTable = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");

  return (
    <VStack alignItems={'right'} w={'100%'}>
      <TableContainer
        borderRadius={"12px 12px 0px 0px"}
        border={"1px solid #E4E7EC"}
        my={"20px"}
      >
        <Table variant="simple" width="100%">
          <Thead bg={"#E5E7EB"}>
            <Tr>
              <Th color={useColorModeValue("grey.400", "#000")} w={"30%"}>
                Role Name
              </Th>
              <Th color={useColorModeValue("grey.400", "#000")} w={"50%"}>
                Permissions
              </Th>
              <Th
                color={useColorModeValue("grey.400", "#000")}
                w={"300px"}
              ></Th>
            </Tr>
          </Thead>
          <Tbody bg={backgroundColor}>
            {settingTable.map((settingTab, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{settingTab.roleName}</Td>
                  <Td>
                    {settingTab.permission.map((perm, index) => (
                      <Text key={index}>{perm}</Text>
                    ))}
                  </Td>
                  <Td color={"blue"}>Edit</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <AddAdminRole />
      
    </VStack>
  );
};

export default SettingsTable;

interface SettingTable {
  roleName: string;
  permission: string[];
}

const settingTable: SettingTable[] = [
  {
    roleName: "Movva Manager",
    permission: ["User management", "Trip management"],
  },
  {
    roleName: "Movva Fianance",
    permission: ["Payouts", "Trip management"],
  },
  {
    roleName: "Compliance",
    permission: ["Payouts", "Trip management"],
  },
  {
    roleName: "Super Admin",
    permission: [
      "User management",
      "Payouts",
      "Audit trail",
      "Profile verification",
      "Trip management",
    ],
  },
  {
    roleName: "Movva Manager",
    permission: ["User management", "Trip management"],
  },
];
