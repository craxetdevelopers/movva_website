'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const GetPaid = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1.5rem", "1.5rem", "2.5rem", "3.5rem"]}
      w={"100%"}
    >
      <Flex
        width="100%"
        maxW={"1249px"}
        mx="auto"
        gap={"40px"}
        pb={"80px"}
        alignItems={{base:'start', lg:"center"}}
        justifyContent={"space-between"}
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <Box>
          <Image src="key-benefit/get-paid-img.png" alt="" w={'100%'}/>
        </Box>
        <VStack w={{ base: "100%", md: "370px" }} alignItems={"start"} gap={'20px'}>
          <Heading
            fontSize={{ base: "24px", md: "30px", lg: "40px" }}
            fontWeight={"bold"}
            lineHeight={{base: '40px', lg:'55px'}}
          >
            Get Paid to Move. No Extra Effort Needed.{" "}
          </Heading>

          <Text>
            Already going somewhere? Get matched with small delivery requests
            along your route and earn
          </Text>
          <Button
            p={"23px 35px"}
            color={"#fff"}
            mt={"10px"}
            cursor={"pointer"}
            bg={"#22244E"}
            border={"1px solid #2057C2"}
            borderRadius={"8px"}
            _hover={{ color: "#000", background: "#fff" }}
            // onClick={() => router.push("/movers")}
          >
            Download Movva App
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default GetPaid;
