"use client";

import {
  Button,
  Flex,
  Heading,
  Select,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Statistics = () => {
  return (
    <Flex justifyContent={"space-between"} w={'100%'} gap={'10px'}  textAlign={'center'}>
      {/* Total Deliveries completed */}
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{base:"200px", lg: '350px',  "2xl":'420px'}}
        py={"30px"}
       
        gap={"15px"}
      >
        <Text>Total Deliveries completed</Text>
        <Heading fontSize={"32px"}>1,250</Heading>
        <Select
          //   value={filter}
          //   onChange={handleChange}
          maxW="fit-content"
          size="sm"
          borderRadius={"8px"}
        >
          <option value="This week">This week</option>
          <option value="This month">This month</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </Select>
        <Button
          color={useColorModeValue("#fff", "#000")}
          bg={useColorModeValue("#22244E", "grey")}
        >
          View trips
        </Button>
      </VStack>

      {/* Pending KYC Verifications */}
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{base:"200px", lg: '350px',  "2xl":'420px'}}
        py={"30px"}
        gap={"15px"}
      >
        <Text>Pending KYC Verifications</Text>
        <Heading fontSize={"32px"}>8</Heading>
        <Select
          //   value={filter}
          //   onChange={handleChange}
          maxW="fit-content"
          size="sm"
          borderRadius={"8px"}
        >
          <option value="This week">This week</option>
          <option value="This month">This month</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </Select>
        <Button
          color={useColorModeValue("#fff", "#000")}
          bg={useColorModeValue("#22244E", "grey")}
        >
          Show details
        </Button>
      </VStack>

      {/* Total Revenue */}
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{base:"200px", lg: '350px',  "2xl":'420px'}}
        py={"30px"}
        gap={"15px"}
      >
        <Text>Total Revenue</Text>
        <Heading fontSize={"32px"}>$20,678,987</Heading>
        <Select
          //   value={filter}
          //   onChange={handleChange}
          maxW="fit-content"
          size="sm"
          borderRadius={"8px"}
        >
          <option value="This week">This week</option>
          <option value="This month">This month</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </Select>
        <Button
          color={useColorModeValue("#fff", "#000")}
          bg={useColorModeValue("#22244E", "grey")}
        >
          Show details
        </Button>
      </VStack>
    </Flex>
  );
};

export default Statistics;
