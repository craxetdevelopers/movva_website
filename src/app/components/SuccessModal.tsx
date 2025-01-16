"use client";

import {
  Box,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: Props) => {
  return (
    <Stack>
      <Modal isOpen={isOpen} onClose={onClose} size={{base: 'xs', lg:"xl"}}>
        <ModalOverlay />
        <ModalContent
          borderRadius={"48px"}
          py={{ base: "25px", lg: "60px" }}
          px={{ base: "15px", lg: "60px" }}
          mt={{base:'70px', lg:"180px"}}
        >
          <VStack w={"100%"}>
            <Box my={0} py={0}>
              <Image src="/landingpage/success-icon.png" alt="" />
            </Box>
            <ModalHeader
            px={0}
              pb={"0px"}
              color={"#22244E"}
              fontWeight={"600"}
              fontSize={"30px"}
            >
              Success! You’re in.
            </ModalHeader>
            <Text color={"#22244E"} textAlign={{base:'center', lg:'start'}}>
              Thank you for signing up for early access to Movva! We see you,
              and we’re excited to have you on board. You’ll be among the first
              to start earning and making moves when we launch.
            </Text>
            <Text color={"#22244E"}>Stay tuned—we’ll be in touch soon!</Text>
            <ModalCloseButton
              m={{ base: "5px 5px 0px 0px", lg: "20px 20px 0px 0px" }}
            />
          </VStack>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default SuccessModal;
