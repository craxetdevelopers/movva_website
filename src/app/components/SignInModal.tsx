import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
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
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
// import { postRequest } from "../helpers";
import SuccessModal from "./SuccessModal";
import { signUpSchema } from "../schemas";
import axios from "axios";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  gender: "Male" | "Female";
  phone: string;
  password: string;
  type: "user" | "admin";
}
const SignInModal = ({ isOpen, onClose }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<SignUpPayload>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "Male",
    phone: "",
    password: "",
    type: "user",
  });

  const signUpMutation = useMutation({
    mutationFn: async (payload: SignUpPayload) => {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/register`, payload);
      return res?.data;
    },
    onSuccess: (data: SignUpPayload) => {
      console.log("User registered:", data);
      setIsModalOpen(true);
      onClose();
    },
    onError: (error: any) => {
      console.error("Error signing up:", error);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = signUpSchema.safeParse(formData);
    if (!validation.success) {
      const formErrors: Record<string, string> = {};
      validation?.error?.errors.forEach((err) => {
        if (err.path[0]) formErrors[err.path[0] as string] = err.message;
      });
      setError(formErrors);
      return;
    }
    signUpMutation.mutate(formData);
  };

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
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <ModalBody pb={6} w={"100%"}>
                <Flex
                  mb={"30px"}
                  gap={{ base: "30px", lg: "8px" }}
                  direction={{ base: "column", lg: "row" }}
                >
                  <FormControl isInvalid={!!error.firstName}>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name*"
                      _placeholder={{ color: "rgb(180, 177, 177)" }}
                      bg={"#F9F9F9"}
                      borderRadius={"12px"}
                      p={"24px"}
                      border={"0.2px solid rgb(180, 177, 177)"}
                    />
                    <FormErrorMessage>{error.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!error.lastName}>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name*"
                      _placeholder={{ color: "rgb(180, 177, 177)" }}
                      bg={"#F9F9F9"}
                      borderRadius={"12px"}
                      p={"24px"}
                      border={"0.2px solid rgb(180, 177, 177)"}
                    />
                    <FormErrorMessage>{error.lastName}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <FormControl isInvalid={!!error.email}>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address*"
                    _placeholder={{ color: "rgb(180, 177, 177)" }}
                    bg={"#F9F9F9"}
                    borderRadius={"12px"}
                    p={"24px"}
                    border={"0.2px solid rgb(180, 177, 177)"}
                  />
                  <FormErrorMessage>{error.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!error.gender} my={"30px"}>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    placeholder="Select gender"
                    bg={"#F9F9F9"}
                    borderRadius={"12px"}
                    color={
                      formData.gender !== "Female" &&
                      formData.gender !== "Male" &&
                      formData.gender !== "Others"
                        ? "#000"
                        : "rgb(180, 177, 177)"
                    }
                    _placeholder={{ color: "rgb(180, 177, 177)" }}
                    size={"lg"}
                    border={"0.2px solid rgb(180, 177, 177)"}
                    sx={{
                      option: {
                        color: "#000",
                      },
                    }}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </Select>
                  <FormErrorMessage>{error.gender}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!error.phone}>
                  <InputGroup>
                    <InputLeftAddon p={"24px"}>+234</InputLeftAddon>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      color={formData.gender ? "#000" : "rgb(180, 177, 177)"}
                      placeholder="Phone number*"
                      _placeholder={{ color: "rgb(180, 177, 177)" }}
                      bg={"#F9F9F9"}
                      borderRadius={"12px"}
                      p={"24px"}
                      border={"0.2px solid rgb(180, 177, 177)"}
                    />
                  </InputGroup>
                  <FormErrorMessage>{error.phone}</FormErrorMessage>
                </FormControl>
                <FormControl mt={"30px"} isInvalid={!!error.password}>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password*"
                    _placeholder={{ color: "rgb(180, 177, 177)" }}
                    bg={"#F9F9F9"}
                    borderRadius={"12px"}
                    p={"24px"}
                    border={"0.2px solid rgb(180, 177, 177)"}
                  />
                  <FormErrorMessage>{error.password}</FormErrorMessage>
                </FormControl>
              </ModalBody>

              <ModalFooter justifyContent={"center"}>
                <Button
                  type="submit"
                  isLoading={signUpMutation.isPending}
                  bg={"#17D1C6"}
                  mr={3}
                  p={"20px 50px"}
                  disabled={signUpMutation.isPending}
                >
                  Join
                </Button>
              </ModalFooter>
            </form>
          </VStack>
        </ModalContent>
      </Modal>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Stack>
  );
};

export default SignInModal;

