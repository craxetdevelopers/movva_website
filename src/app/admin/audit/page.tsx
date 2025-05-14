"use client";

import React from "react";
import DashboardLayout from "../DashboardLayout";
import { Button, Flex, Input, InputGroup, InputLeftElement, Stack,  useColorModeValue, VStack } from "@chakra-ui/react";
import AuditExport from "./components/AuditExport";
import { Search2Icon } from "@chakra-ui/icons";
import AuditTableFilter from "./components/AuditTableFilter";
import AuditTable from "./components/AuditTable";

const AdminAudit = () => {
    const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  return (
    <DashboardLayout>
      <Stack>
        <Flex>
          <AuditExport />
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
            <AuditTableFilter />
            <Button bg={"none"}> Clear all</Button>
          </Flex>
        </Flex>
        <AuditTable />
      </Stack>
    </DashboardLayout>
  );
};

export default AdminAudit;
