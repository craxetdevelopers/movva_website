"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Movements = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      pt={["4.5rem", "4.5rem", "4.5rem", "5.5rem"]}
    >
      <VStack
        width="100%"
        maxW={"1249px"}
        mx="auto"
        pb={"80px"}
        // alignItems={"start"}
      >
        <Tag
          p={"8px 13px"}
          borderRadius="full"
          bg={"#EDEFFA"}
          fontWeight={"normal"}
          // w={'100%'}
          fontSize={{ base: "12px", lg: "16px" }}
          mb={"50px"}
        >
          ABOUT US
        </Tag>
        <Heading
          fontSize={{ base: "24px", md: "40px" }}
          color={"#000"}
          fontWeight={"bold"}
          w={{ base: "100%", md: "426px" }}
          textAlign={"center"}
        >
          Redefining Movement Empowering People
        </Heading>
        <Text
          mt={"19px"}
          w={{ base: "100%", lg: "826px" }}
          color={"#000"}
          textAlign={"center"}
        >
          At Movva, we believe that movement is valuable. By decentralizing how
          goods get from place to place, we’re turning everyday commutes into
          income opportunities while making deliveries more efficient. To also
          create Africa’s most inclusive and efficient movement-based
          marketplace.
        </Text>
        <Box mt={"60px"}>
          <Image src="why-movva/move-img.png" alt="" w={"100%"} />
        </Box>
        <Flex mt={{ base: "20px", lg: "60px" }} gap={'40px'}>
          <Button
            p={"23px 35px"}
            color={"#fff"}
            // mt={"30px"}
            cursor={"pointer"}
            bg={"#22244E"}
            border={"1px solid #2057C2"}
            borderRadius={"8px"}
            _hover={{ color: "#000", background: "#fff" }}
            //   onClick={() => router.push("/movers")}
          >
            Download Sender App
          </Button>
          <Button
            p={"23px 35px"}
            color={"#000"}
            // mt={{ base: "10px", lg: "40px" }}
            cursor={"pointer"}
            fontWeight={"bold"}
            bg={"#17D1C6"}
            borderRadius={"8px"}
            _hover={{
              color: "#000",
              background: "none",
              border: "1px solid #17D1C6",
            }}
            // onClick={() => router.push("/movers")}
          >
            Download Sender App
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Movements;
