"use client";

import React from "react";
import {
  Box,
  Button,
  Divider,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import ApprovePayout from "./ApprovePayout";
import RejectPayout from "./RejectPayout";
import PaidPayout from "./PaidPayout";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";

// interface PayoutProps {
//   payout: PayoutTables
// }

const PayoutDetails = ({
  payoutId,
  payoutStatus,
}: {
  payoutId: string;
  payoutStatus: string;
}) => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  const toast = useToast();
  const queryClient = useQueryClient();
  const { token } = useAuth();

  const mutation = useMutation({
    mutationFn: async ({
      status,
      comment,
    }: {
      status: string;
      comment: string;
    }) => {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/withdrawals/${payoutId}`,
        { status, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response?.data;
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Payout updated successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      queryClient.invalidateQueries({
        queryKey: ["payoutss"],
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update payout.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  console.log("payoutStatus:", payoutStatus);

  return (
    <Popover placement="bottom-end" closeOnBlur={false} size={"2xl"}>
      <PopoverTrigger>
        <Button
          _hover={{ background: "none" }}
          bg={"none"}
          color={useColorModeValue("#000", "#fff")}
        >
          <Icon as={BsThreeDots} fontSize="lg" />
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          display={"flex"}
          alignItems={"start"}
          gap={"20px"}
          flexDirection={"column"}
        >
          {payoutStatus == "approved" && (
            <Box>
              <PaidPayout
                mutate={mutation.mutate}
                isLoading={mutation.isPending}
              />
              <Divider my={"20px"} />
              <RejectPayout
                mutate={mutation.mutate}
                isLoading={mutation.isPending}
              />
            </Box>
          )}
          {payoutStatus == "rejected" && (
            <Box>
              <ApprovePayout
                mutate={mutation.mutate}
                isLoading={mutation.isPending}
              />
              <Divider my={"20px"} />
              <RejectPayout
                mutate={mutation.mutate}
                isLoading={mutation.isPending}
              />
            </Box>
          )}

          {payoutStatus == "pending" && (
            <Box>
              <ApprovePayout
                mutate={mutation.mutate}
                isLoading={mutation.isPending}
              />
              <Divider my={"20px"} />
              <RejectPayout
                mutate={mutation.mutate}
                isLoading={mutation.isPending}
              />
            </Box>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PayoutDetails;
