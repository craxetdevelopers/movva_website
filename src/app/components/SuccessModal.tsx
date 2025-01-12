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
    <Stack >
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent borderRadius={"48px"} p={{ base: "15px", lg: "60px" }} mt={'180px'}>
          <VStack w={"100%"}>
            <Box>
              <Image src="/landingpage/message.png" alt="" />
            </Box>
            <ModalHeader
              pb={"0px"}
              color={"#22244E"}
              fontWeight={"600"}
              fontSize={"30px"}
            >
              Successful
            </ModalHeader>
            <Text color={"#22244E"}>
              Please check your email for confrimation
            </Text>
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
