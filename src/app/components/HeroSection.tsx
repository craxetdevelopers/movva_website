"use client";

import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Slider from "react-slick";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";

const HeroSection = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(null);
  // const [selectedTime, setSelectedTime] = useState(null);
  return (
    <Box
      // h="100vh"
      w="100%"
      pb={"1.5rem"}
    >
      <Stack gap={"2rem"} h={"auto"}>
        <Stack px={["1rem", "2rem", "2rem", "2rem", "0"]} py={["0.5rem", "0.5rem", "4.5rem", "5.5rem"]}>
          <Stack>
            <VStack width="100%" maxW={"1249px"} mx="auto" alignItems={"start"}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                direction={{ base: "column", md: "row" }}
                w={"100%"}
              >
                <VStack
                  pb={"30px"}
                  alignItems={{ base: "start", lg: "start" }}
                  gap={"30px"}
                  py={{ base: "4rem", md: "8rem" }}
                  // px={{base: '3rem', md:''}}
                >
                  <Text
                    w={{ base: "100%", lg: "564px" }}
                    color={"#000"}
                    // px={{base: '1.5rem', md:'0px'}}
                    fontWeight={"700"}
                    fontSize={{ base: "28px", md: "35px", lg: "50px" }}
                    textAlign={{ base: "start", lg: "start" }}
                    lineHeight={{ base: "30px", lg: "60px" }}
                  >
                    Monetize your Movement with Movva
                  </Text>
                  <Text
                    color={"#000"}
                    // px={{base: '1.5rem', md:'0px'}}
                    textAlign={{ base: "start", md: "start" }}
                    fontWeight={"400"}
                    w={{ base: "100%", md: "450px", lg: "564px" }}
                    fontSize={"16px"}
                  >
                    Whether you’re commuting, walking, or using public
                    transport, earn money by helping others move things
                    effortlessly.
                  </Text>
                  <Stack
                    spacing={4}
                    w={"100%"}
                    maxW={{ base: "320px", lg: "500px" }}
                    pos={"relative"}
                  >
                    <InputGroup w={"100%"}>
                      <InputLeftElement
                        pointerEvents="none"
                        py={"25px"}
                        color="gray.300"
                        fontSize="1.2em"
                        pl={"20px"}
                      >
                        <Image src="landingpage/hero_dot.svg" alt="" />
                      </InputLeftElement>
                      <Input
                        py={"25px"}
                        bg={"#F3F3F3"}
                        placeholder="Where are you going?"
                        border={"none"}
                        pl={"60px"}
                      />
                      <InputRightElement py={"25px"} pr={"20px"}>
                        <Image src="landingpage/hero_pickup.svg" alt="" />
                      </InputRightElement>
                    </InputGroup>
                    <Flex gap={"20px"}>
                      <InputGroup zIndex={"999999999"}>
                        <InputLeftElement pl={"20px"} py={"25px"}>
                          <Image src="landingpage/date-icon.svg" alt="" />
                        </InputLeftElement>
                        <DatePicker
                          // showIcon
                          toggleCalendarOnIconClick
                          selected={startDate}
                          onChange={(date: Date | null) => setStartDate(date)}
                          placeholderText="Today"
                          customInput={
                            <Input
                              py="25px"
                              pl={"60px"}
                              w={"100%"}
                              bg="#F3F3F3"
                              //
                              placeholder="Select date"
                              border="none"
                              _focus={{
                                border: "2px solid #2057C2",
                                outline: "none",
                              }}
                            />
                          }
                        />
                      </InputGroup>

                      <InputGroup>
                        <InputLeftElement pl={"20px"} py={"25px"}>
                          <Image src="landingpage/now-icon.svg" alt="" />
                        </InputLeftElement>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          placeholderText="Now"
                          customInput={
                            <Input
                              py="25px"
                              pl={"60px"}
                              w={"100%"}
                              bg="#F3F3F3"
                              //
                              placeholder="Select date"
                              border="none"
                              _focus={{
                                border: "2px solid #2057C2",
                                outline: "none",
                              }}
                            />
                          }
                        />
                      </InputGroup>
                    </Flex>
                  </Stack>
                  <Button
                    p={"23px 35px"}
                    color={"#fff"}
                    mt={"10px"}
                    cursor={"pointer"}
                    bg={"#22244E"}
                    border={"1px solid #2057C2"}
                    borderRadius={"8px"}
                    _hover={{ color: "#000", background: "#fff" }}
                    onClick={() => router.push("/movers")}
                  >
                    Download Movva App
                  </Button>
                </VStack>
                <VStack>
                  <Image
                    src={"/landingpage/hero-new.png"}
                    alt=""
                    w="100%"
                  />
                </VStack>
              </Flex>
            </VStack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
