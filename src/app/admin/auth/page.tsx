'use client'

import {
    Button,
    FormControl,
    Input,
    InputGroup,
    Stack,
    Text,
    VStack,
  } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
  import React from "react";
  
  const AdminSignin = () => {
    const router = useRouter()
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
            <form style={{ width: "100%" }}>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleInputChange}
                  placeholder="Email address*"
                  _placeholder={{ color: "rgb(180, 177, 177)" }}
                  bg={"#F9F9F9"}
                  borderRadius={"12px"}
                  p={"24px"}
                  border={"0.2px solid rgb(180, 177, 177)"}
                />
                {/* <FormErrorMessage>{error.email}</FormErrorMessage> */}
              </FormControl>
              <FormControl mt={"30px"}>
                <InputGroup>
                  <Input
                    // type={show? 'text' : "password"}
                    name="password"
                    // value={formData.password}
                    // onChange={handleInputChange}
                    placeholder="Password*"
                    _placeholder={{ color: "rgb(180, 177, 177)" }}
                    bg={"#F9F9F9"}
                    borderRadius={"12px"}
                    p={"24px"}
                    border={"0.2px solid rgb(180, 177, 177)"}
                  />
                  {/* <InputRightElement>
                                  <Box onClick={handleShowPassword} cursor={'pointer'}>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                  </Box>
                                </InputRightElement> */}
                </InputGroup>
  
                {/* <FormErrorMessage>{error.password}</FormErrorMessage> */}
              </FormControl>
              <VStack mt={'40px'}>
                <Button
                //   type="submit"
                  // isLoading={signUpMutation.isPending}
                  bg={"#17D1C6"}
                  mr={3}
                  p={"20px 50px"}
                  // disabled={signUpMutation.isPending}
                  onClick={() => router.push('/admin')}
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
  