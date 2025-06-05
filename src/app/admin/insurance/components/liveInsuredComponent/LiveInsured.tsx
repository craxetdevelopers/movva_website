"use client";

import { Button, Flex, Input, InputGroup, InputLeftElement, Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
// import AddClaims from "./AddClaims"
import { Search2Icon } from "@chakra-ui/icons";
import LiveInsuredExport from "./LiveInsuredExport";
import LiveInsuredFilter from "./LiveInsuredFilter";
import LiveInsuredStatistic from "./LiveInsuredStatistic";
import LiveInsuredTable from "./LiveInsuredTable";

const LiveInsured = () => {
    const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  return (
    <Stack>
      <Flex mt={"50px"}>
        <LiveInsuredExport />
        {/* <AddClaims /> */}
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
          <LiveInsuredFilter />
          <Button bg={"none"}> Clear all</Button>
        </Flex>
      </Flex>
      <LiveInsuredStatistic />
      <LiveInsuredTable />
    </Stack>
  );
};

export default LiveInsured;
