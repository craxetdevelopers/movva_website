"use client";

import {
  Box,
  Button,
  Center,
  CircularProgress,
  FormControl,
  Input,
  InputGroup,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface SigninPayload {
  email: string;
  password: string;
}

const AdminSignin = () => {
  const toast = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [formData, setFormData] = useState<SigninPayload>({
    email: "",
    password: "",
  });

  // Function that handles input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function that handles submission of data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // Store token in local storage
      if (data?.token?.token) {
        localStorage.setItem("token", data?.token?.token);
      }

      if (data?.user?.type) {
        localStorage.setItem("userType", data?.user?.type);
      }
      console.log(data?.token?.token);
      // Check if the user is an admin
      if (data?.user?.type == "admin") {
        router.push("/admin");
      } else {
        throw new Error("Access denied: Not an admin");
      }
    } catch (err: any) {
      toast({
        title: "Signin Failed",
        description: err.message || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = typeof window !== 'undefined'? localStorage.getItem("token") : null;
    const userType = typeof window !== 'undefined'? localStorage.getItem("userType") : null;

    if (token && userType === "admin") {
      router.replace("/admin"); 
    } else {
      setIsLoggedIn(false)
    }
  }, []);

  if (isLoggedIn) {
      return (
        <Center bg={'#16193A'} minH="100vh" flexDirection="column" gap={4}>
          <CircularProgress
            isIndeterminate
            color="blue.400"
            size="80px"
            thickness="8px"
          />
          <Box fontWeight="medium" fontSize="lg">
            Checking if Admin is Loggedin...
          </Box>
        </Center>
      );
    }

  return (
    <Stack
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "2rem", "3.5rem", "3.5rem"]}
      bg={"#16193A"}
      h={"100vh"}
    >
      <VStack
        width="100%"
        maxW={"1249px"}
        gap={"60px"}
        mx="auto"
        justifyContent={"center"}
        h={"100%"}
      >
        <VStack
          w={"600px"}
          border={"1px solid grey"}
          px={"6rem"}
          py={"4rem"}
          borderRadius={"8px"}
        >
          <Text mb={"20px"} color={"#fff"} fontSize={"36px"}>
            Admin
          </Text>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                color={"#000"}
                placeholder="Email address*"
                _placeholder={{ color: "rgb(180, 177, 177)" }}
                bg={"#F9F9F9"}
                borderRadius={"12px"}
                p={"24px"}
                border={"0.2px solid rgb(180, 177, 177)"}
                isRequired
              />
              {/* <FormErrorMessage>{error.email}</FormErrorMessage> */}
            </FormControl>
            <FormControl mt={"30px"}>
              <InputGroup>
                <Input
                  type="password"
                  name="password"
                  color={"#000"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password*"
                  _placeholder={{ color: "rgb(180, 177, 177)" }}
                  bg={"#F9F9F9"}
                  borderRadius={"12px"}
                  p={"24px"}
                  border={"0.2px solid rgb(180, 177, 177)"}
                  isRequired
                />
                {/* <InputRightElement>
                                  <Box onClick={handleShowPassword} cursor={'pointer'}>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                  </Box>
                                </InputRightElement> */}
              </InputGroup>

              {/* <FormErrorMessage>{error.password}</FormErrorMessage> */}
            </FormControl>
            <VStack mt={"40px"}>
              <Button
                type="submit"
                isLoading={loading}
                bg={"#17D1C6"}
                mr={3}
                p={"20px 50px"}
                // disabled={signUpMutation.isPending}
              >
                Signin
              </Button>
            </VStack>
          </form>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default AdminSignin;
