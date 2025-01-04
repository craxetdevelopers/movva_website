"use client";

import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <Box
      h="auto"
      w="100%"
      backgroundImage="url('/landingpage/abt-us-bg.png')"
      backgroundPosition=""
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        px={["1rem", "2rem", "2rem", "2rem", "0"]}
        py={["1rem", "2rem", "4.5rem", "6.5rem"]}
      >
        <Flex
          width="100%"
          maxW={"1249px"}
          mx="auto"
          justifyContent={"space-between"}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "40px", lg: "0px" }}
        >
          <VStack
            alignItems={{ base: "center", lg: "start" }}
            display={{ base: "none", lg: "block" }}
          >
            <Heading
              sx={{
                color: "transparent",
                backgroundClip: "text",
                WebkitTextStroke: "0.7px rgba(255, 255, 255, 0.5)",
                WebkitTextFillColor: "transparent",
              }}
              bg={"transparent"}
              opacity={"0.2"}
              fontSize={{ base: "38px", md: "70px", lg: "104px" }}
            >
              About us
            </Heading>
            <Heading
              color={"#FFFFFF"}
              fontWeight={"700"}
              w={{ base: "100%", lg: "400px" }}
              fontSize={{ base: "28px", md: "35px", lg: "52px" }}
              textAlign={{ base: "center", lg: "start" }}
            >
              Revolutionizing Last Mile Delivery, One Mover at a Time.
            </Heading>
            <Button
              mt={"50px"}
              p={"30px 25px"}
              bg={"#17D1C6"}
              borderRadius={"100px"}
              color={"#22244E"}
            >
              {" "}
              About us
            </Button>
          </VStack>
          <VStack>
            <VStack
              w={{ base: "100%", md: "538px" }}
              bg={"#22244E"}
              h={"auto"}
              borderRadius={"15px"}
              p={"30px"}
              alignItems={"start"}
            >
              <Heading fontSize={{base:'26px', lg:"36px"}} fontWeight={"600"} color={"#fff"}>
                Get a Quick Quote
              </Heading>
              <Divider borderColor={"#17D1C6"} pt={"10px"} />
              <form style={{ width: "100%" }}>
                <VStack w={"100%"} gap={"30px"} pt={"30px"}>
                  <FormControl>
                    <FormLabel fontSize={"22px"} color={"#fff"}>
                      Pickup Location
                    </FormLabel>
                    <InputGroup>
                      <InputRightElement>
                        <Box pt={"8px"}>
                          <Image src="landingpage/map-location.png" alt="" />
                        </Box>
                      </InputRightElement>
                      <Input
                        type="text"
                        name=""
                        placeholder="Enter pickup location"
                        _placeholder={{ color: "#848484" }}
                        bg={"#fff"}
                        py={"25px"}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={"22px"} color={"#fff"}>
                      Drop off Location
                    </FormLabel>
                    <InputGroup>
                      <InputRightElement>
                        <Box pt={"8px"}>
                          <Image src="landingpage/map-location.png" alt="" />
                        </Box>
                      </InputRightElement>
                      <Input
                        type="text"
                        name=""
                        placeholder="Enter pickup location"
                        _placeholder={{ color: "#848484" }}
                        bg={"#fff"}
                        py={"25px"}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={"22px"} color={"#fff"}>
                      Preferred type
                    </FormLabel>
                    <CheckboxGroup
                      colorScheme="green"
                      defaultValue={["any", "bicycle"]}
                    >
                      <Flex
                        flexWrap={"wrap"}
                        color={"#fff"}
                        gap={"20px"}
                        w={"100%"}
                      >
                        <Checkbox
                          value="any"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          Any
                        </Checkbox>
                        <Checkbox
                          value="bicycle"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          Bicycle
                        </Checkbox>
                        <Checkbox
                          value="on-foot"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          On foot
                        </Checkbox>
                        <Checkbox
                          value="public-transport"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          Public transport
                        </Checkbox>
                        <Checkbox
                          value="dispatch-rider"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          Dispatch rider
                        </Checkbox>
                      </Flex>
                    </CheckboxGroup>
                  </FormControl>
                  <VStack mt={"5px"} alignItems={"start"} w={"100%"}>
                    <Button
                      p={"23px 60px"}
                      bg={"#FF7D6A"}
                      borderRadius={"7px"}
                      color={"#fff"}
                      fontSize={"18px"}
                      fontWeight={"600"}
                    >
                      {" "}
                      Get quote
                    </Button>
                  </VStack>
                </VStack>
              </form>
              <Divider borderColor={"#17D1C6"} pt={"10px"} />
              <VStack>
                <Text fontSize={{base:'35px', lg:'50px'}} color={'#fff'}>₦1,300 ~ ₦3,000</Text>
              </VStack>
              <Divider borderColor={"#17D1C6"} pt={"10px"} />
              <Text color={'#fff'} fontSize={'10px'}>This is just an estimated cost for your delivery. Actual price may vary after requesting a movva</Text>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
