"use client";

import {
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import RoleManagement from "./RoleManagement";

const AdminSettingDetails = () => {
  return (
    <VStack alignItems={"start"}>
      <VStack
        w={"100%"}
        maxW={"700px"}
       mb={'30px'}
        bg={useColorModeValue("#fff", "grey.400")}
        borderRadius={"16px"}
        alignItems={"start"}
        px={"20px"}
        py={'40px'}
        border={'0.5px solid #E5E7EB'}
      >
        <Heading fontSize={"20px"}>General Settings</Heading>
        <Divider my={"15px"} border={"0.7px solid #E5E7EB"} />
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <FormLabel htmlFor="email-alerts" mb="0">
            Two-factor authentication
          </FormLabel>
          <Switch id="email-alerts" />
        </FormControl>
        <Divider my={"15px"} border={"0.7px solid #E5E7EB"} />
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <FormLabel htmlFor="email-alerts" mb="0">
            Audit log retention
          </FormLabel>
          <Switch id="email-alerts" />
        </FormControl>
      </VStack>
      <RoleManagement />
    </VStack>
  );
};

export default AdminSettingDetails;
