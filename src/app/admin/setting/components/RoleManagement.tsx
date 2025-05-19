"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SettingsTable from "./SettingsTable";

const RoleManagement = () => {
  return (
    <Accordion
      allowToggle
      w={"100%"}
      maxW={"700px"}
      bg={useColorModeValue("#fff", "grey.400")}
      borderRadius={"16px"}
      _hover={{background: useColorModeValue("#fff", "grey.400")}}
      py={'10px'}
      border={'0.5px solid #E5E7EB'}
    >
      <AccordionItem border={'none'}>
        <h2 >
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={"20px"}
              fontWeight={"semibold"}
             
            >
              Role Management
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <SettingsTable />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default RoleManagement;
