"use client";

import {
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const LiveInsuredDetails = () => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover placement="left-end" closeOnBlur={false} size={"2xl"}>
      <PopoverTrigger>
        <Button
          _hover={{ background: "none" }}
          bg={"none"}
          color={useColorModeValue("#000", "#fff")}
        >
          <Icon as={BsThreeDots} fontSize="lg" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        bg={backgroundColor}
        p={5}
        maxW="1000px"
        minW="600px"
        w={"100%"}
        mb={"60px"}
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader
          fontSize={"20px"}
          fontWeight={"700"}
          mt={"20px"}
          border={"none"}
        >
          Trip Details
        </PopoverHeader>
        <Divider my={"10px"} w={"100%"} />
        <PopoverBody w={"100%"}>
          <VStack w={"100%"} fontSize={"14px"} alignItems={"start"}>
            <Heading fontSize={"16px"} my={"22px"}>
              Delivery information
            </Heading>
            <Flex justifyContent={"space-between"} w={"100%"}>
              <VStack alignItems={"start"} gap={"30px"}>
                <VStack alignItems={"start"}>
                  <Text color={"gray"} fontSize={"14px"}>
                    Trip ID
                  </Text>
                  <Text>13558</Text>
                </VStack>
                <VStack alignItems={"start"}>
                  <Text color={"gray"} fontSize={"14px"}>
                    Sender
                  </Text>
                  <Text>Chinedu Uzoma</Text>
                  <Text>+234 812 345 6789</Text>
                </VStack>
              </VStack>
              <VStack
                alignItems={"start"}
                maxW={"200px"}
                w={"100%"}
                gap={"30px"}
              >
                <VStack alignItems={"start"}>
                  <Text color={"gray"} fontSize={"14px"}>
                    Delivery Status
                  </Text>
                  <Text
                    border={"1px solid #065F46"}
                    px={"9px"}
                    py={"4px"}
                    color={"#ffffff"}
                    bg={"#065F46"}
                    borderRadius={"4px"}
                  >
                    Completed
                  </Text>
                </VStack>
                <VStack alignItems={"start"}>
                  <Text color={"gray"} fontSize={"14px"}>
                    Movva
                  </Text>
                  <Text>John Doe</Text>
                  <Text>+234 810 227 7689</Text>
                </VStack>
              </VStack>
            </Flex>
            <VStack alignItems={"start"} my={"20px"}>
              <Text color={"gray"} fontSize={"14px"}>
                Delivery Item
              </Text>
              <Text>Iphone 13 Pro Max</Text>
            </VStack>
            <Flex justifyContent={"space-between"} w={"100%"}>
              <VStack alignItems={"start"}>
                <Text color={"gray"} fontSize={"14px"}>
                  Pickup Address
                </Text>
                <Text
                  maxW="200px"
                  whiteSpace="normal"
                  cursor={"pointer"}
                  wordBreak="break-word"
                >
                  12, Agape street, Agege, Lagos
                </Text>
              </VStack>
              <VStack alignItems={"start"}>
                <Text color={"gray"} fontSize={"14px"}>
                  Delivery Address
                </Text>
                <Text
                  maxW="200px"
                  whiteSpace="normal"
                  cursor={"pointer"}
                  wordBreak="break-word"
                  w={"100%"}
                >
                  14, Damian street, Ikeja GRA, Lagos
                </Text>
              </VStack>
            </Flex>
          </VStack>
          <Divider my={"30px"} w={"100%"} />
          <VStack alignItems={"start"}>
            <Heading fontSize={"16px"} my={"22px"}>
              Insurance Details
            </Heading>
            <Flex justifyContent={"space-between"} w={"100%"}>
              <VStack alignItems={"start"} gap={"30px"}>
                <VStack alignItems={"start"}>
                  <Text color={"gray"} fontSize={"14px"}>
                    Item Value
                  </Text>
                  <Text color={"#065F46"}>N650,000</Text>
                </VStack>
                <VStack alignItems={"start"}>
                  <Text color={"gray"} fontSize={"14px"}>
                    Insurance Rate
                  </Text>
                  <Text>0.7%</Text>
                </VStack>
              </VStack>
              <VStack
                alignItems={"start"}
                maxW={"200px"}
                w={"100%"}
                gap={"30px"}
              >
                <VStack alignItems={"start"}>
                  <Text color={"gray"} fontSize={"14px"}>
                    Coverage Type{" "}
                  </Text>
                  <Text>Standard (Loss Only)</Text>
                </VStack>
                <VStack alignItems={"start"}>
                  <Text color={"gray"} fontSize={"14px"}>
                    Movva
                  </Text>
                  <Text>Premium Paid To</Text>
                </VStack>
              </VStack>
            </Flex>
          </VStack>
        </PopoverBody>
        <PopoverFooter
          display="flex"
          justifyContent="flex-end"
          mt={"20px"}
          pt={"20px"}
          gap={2}
        >
          <Button bg={"#22244E"} color={"#fff"}>
            Close
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default LiveInsuredDetails;
