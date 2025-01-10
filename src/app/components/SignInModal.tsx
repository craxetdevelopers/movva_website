import {
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal = ({ isOpen, onClose }: Props) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <Stack>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent borderRadius={"48px"} p={{ base: "15px", lg: "40px" }}>
          <VStack w={"100%"}>
            <ModalHeader
              pb={"0px"}
              color={"#22244E"}
              fontWeight={"600"}
              fontSize={"30px"}
            >
              Let’s get you started
            </ModalHeader>
            <Text color={"#22244E"}>
              Please, fill in the relevant information below
            </Text>
            <Divider m={"20px 0px 50px 0px"} />
            <ModalCloseButton
              m={{ base: "5px 5px 0px 0px", lg: "20px 20px 0px 0px" }}
            />
            <form style={{ width: "100%" }}>
              <ModalBody pb={6} w={"100%"}>
                <Flex
                  mb={"30px"}
                  gap={{ base: "30px", lg: "8px" }}
                  direction={{ base: "column", lg: "row" }}
                >
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="First name*"
                      _placeholder={{ color: "rgb(180, 177, 177)" }}
                      bg={"#F9F9F9"}
                      borderRadius={"12px"}
                      p={"24px"}
                      border={"0.2px solid rgb(180, 177, 177)"}
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Last name*"
                      _placeholder={{ color: "rgb(180, 177, 177)" }}
                      bg={"#F9F9F9"}
                      borderRadius={"12px"}
                      p={"24px"}
                      border={"0.2px solid rgb(180, 177, 177)"}
                    />
                  </FormControl>
                </Flex>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email address*"
                    _placeholder={{ color: "rgb(180, 177, 177)" }}
                    bg={"#F9F9F9"}
                    borderRadius={"12px"}
                    p={"24px"}
                    border={"0.2px solid rgb(180, 177, 177)"}
                  />
                </FormControl>
                <Flex
                  my={"30px"}
                  gap={{ base: "30px", lg: "8px" }}
                  direction={{ base: "column", lg: "row" }}
                >
                  <FormControl position="relative">
                    {!selectedDate && (
                      <Text
                        position="absolute"
                        top="50%"
                        left="0px"
                        color="rgb(180, 177, 177)"
                        pointerEvents="none"
                        fontSize="sm"
                      >
                        Select Date and Time
                      </Text>
                    )}
                    <Input
                      type="datetime-local"
                      textAlign="start"
                      justifyContent={"start"}
                      color={selectedDate ? "#000" : "rgb(180, 177, 177)"}
                      bg={"#F9F9F9"}
                      borderRadius={"12px"}
                      p={"24px"}
                      border={"0.2px solid rgb(180, 177, 177)"}
                      value={selectedDate || ""}
                      placeholder="Select date and time"
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <Select
                      placeholder="Gender"
                      bg={"#F9F9F9"}
                      borderRadius={"12px"}
                      color={selectedGender ? "#000" : "rgb(180, 177, 177)"}
                      size={"lg"}
                      border={"0.2px solid rgb(180, 177, 177)"}
                      onChange={(e) => setSelectedGender(e.target.value)}
                    >
                      <option value="option1">Male</option>
                      <option value="option2">Female</option>
                      <option value="option3">Others</option>
                    </Select>
                  </FormControl>
                </Flex>
                <FormControl>
                  <InputGroup>
                    <InputLeftAddon p={"24px"}>+234</InputLeftAddon>
                    <Input
                      type="tel"
                      //   color={selectedDate ? "#000" : "rgb(180, 177, 177)"}
                      placeholder="Phone number*"
                      _placeholder={{ color: "rgb(180, 177, 177)" }}
                      bg={"#F9F9F9"}
                      borderRadius={"12px"}
                      p={"24px"}
                      border={"0.2px solid rgb(180, 177, 177)"}
                      //   onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl mt={"30px"}>
                  <Input
                    type="password"
                    placeholder="Password*"
                    _placeholder={{ color: "rgb(180, 177, 177)" }}
                    bg={"#F9F9F9"}
                    borderRadius={"12px"}
                    p={"24px"}
                    border={"0.2px solid rgb(180, 177, 177)"}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter justifyContent={"center"}>
                <Button bg={"#17D1C6"} mr={3} p={"20px 50px"}>
                  Join
                </Button>
              </ModalFooter>
            </form>
          </VStack>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default SignInModal;
