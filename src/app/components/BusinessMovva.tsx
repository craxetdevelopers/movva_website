import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const BusinessMovva = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      pt={["4.5rem", "4.5rem", "4.5rem", "5.5rem"]}
      h={"auto"}
    >
      <Flex
        width="100%"
        maxW={"1249px"}
        mx="auto"
        pb={"80px"}
        gap={'30px'}
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <VStack alignItems={"start"} w={"100%"}>
          <Tag
            p={"8px 13px"}
            borderRadius="full"
            bg={"#EDEFFA"}
            fontWeight={"normal"}
            // w={'100%'}
            fontSize={{ base: "12px", lg: "16px" }}
          >
            FOR BUSINESSES: A SMARTER WAY TO MOVE GOODS
          </Tag>
          <Stack mt={{base: '20px', md:"45px"}}>
            <Heading
              fontSize={{ base: "24px", md: "40px" }}
              color={"#000"}
              fontWeight={"bold"}
              w={{ base: "100%", md: "383px" }}
            >
              Tap Into a Community of Everyday Movvas
            </Heading>
          </Stack>
          <Text mt={"19px"} w={{ base: "100%", lg: "422px" }} color={"#000"} >
            Reduce delivery costs by leveraging Movva’s Community driven
            movement model.
          </Text>
          <Button
            p={"23px 35px"}
            color={"#fff"}
            mt={"30px"}
            cursor={"pointer"}
            bg={"#22244E"}
            border={"1px solid #2057C2"}
            borderRadius={"8px"}
            _hover={{ color: "#000", background: "#fff" }}
            //   onClick={() => router.push("/movers")}
          >
            Download Sender App
          </Button>
        </VStack>
        <Box>
          <Image src="why-movva/business-img.png" alt="" w={{base:"100%", lg:'900px'}} />
        </Box>
      </Flex>
    </Box>
  );
};

export default BusinessMovva;
