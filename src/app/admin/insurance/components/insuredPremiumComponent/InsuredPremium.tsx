"use client";

import { Search2Icon } from "@chakra-ui/icons";
import { Button, Flex, Input, InputGroup, InputLeftElement, Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import InsuredPremiumExport from "./InsuredPremiumExport";
import InsuredPremiumFilter from "./InsuredPremiumFilter";
import InsuredPremiumStatistic from "./InsuredPremiumStatistic";
import InsuredPremiumTable from "./InsuredPremiumTable";

const InsuredPremium = () => {
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");

  return (
    <Stack>
      <Flex mt={"50px"}>
        <InsuredPremiumExport />
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
          <InsuredPremiumFilter />
          <Button bg={"none"}> Clear all</Button>
        </Flex>
      </Flex>
      <InsuredPremiumStatistic />
      <InsuredPremiumTable />
    </Stack>
  );
};

export default InsuredPremium;
