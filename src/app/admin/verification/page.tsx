"use client";

import React from "react";
import DashboardLayout from "../DashboardLayout";
import {
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import VerificationTableFilter from "./components/VerificationTableFilter";
import VerificationTable from "./components/VerificationTable";

const AdminVerification = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");

  return (
    <DashboardLayout>
      <Stack>
        <Flex>
          <Stack spacing={5} direction="row" w={"100%"}>
            <VStack
              justifyContent={"center"}
              borderRadius={"8px"}
              px={"10px"}
              bg={backgroundColor}
            >
              <Checkbox colorScheme="green" defaultChecked>
                Verify selected
              </Checkbox>
            </VStack>

            <VStack
              justifyContent={"center"}
              borderRadius={"8px"}
              px={"10px"}
              bg={backgroundColor}
            >
              <Checkbox colorScheme="red">Reject selected</Checkbox>
            </VStack>
          </Stack>

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
            <VerificationTableFilter />
            <Button bg={"none"}> Clear all</Button>
          </Flex>
        </Flex>
        <VerificationTable />
      </Stack>
    </DashboardLayout>
  );
};

export default AdminVerification;
