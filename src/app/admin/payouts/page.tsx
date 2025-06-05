'use client'

import React from "react";
import DashboardLayout from "../DashboardLayout";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import PayoutExport from "./components/PayoutExport";
import PayoutTableFilter from "./components/PayoutTableFilter";
import PayoutTable from "./components/PayoutTable";
import { PayoutResponse } from "@/types/payoutTypes";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";

const AdminPayout = () => {
  const { token } = useAuth();
  const backgroundColor = useColorModeValue("#ffffff", "grey.800");
  
  const { data, isError, isLoading, refetch } = useQuery<PayoutResponse>({
    queryKey: ["payouts"],
    enabled: !!token,
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/withdrawals?page=1&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res?.data;
    },
  });
  
  return (
    <DashboardLayout>
      <Stack>
        <Flex>
          <PayoutExport />
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
            <PayoutTableFilter />
            <Button bg={"none"}> Clear all</Button>
          </Flex>
        </Flex>
        <PayoutTable data={data?.data || []} isError={isError} isLoading={isLoading} refetch={refetch}/>
      </Stack>
    </DashboardLayout>
  );
};

export default AdminPayout;
