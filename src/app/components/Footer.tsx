"use client";

import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "2rem", "3.5rem", "3.5rem"]}
      bg={"#16193A"}
    >
      <VStack
        width="100%"
        maxW={"1249px"}
        gap={"60px"}
        mx="auto"
        alignItems={"start"}
      >
        <Link fontSize={"24px"} fontWeight={"semibold"} color={"#fff"}>
          Movva
        </Link>
        <Link color={"#fff"}>Visit Help Center</Link>

        <Flex w={"100%"} flexWrap={"wrap"} gap={{ base: "40px", lg: "160px" }}>
          <VStack color={"#fff"} alignItems={"start"}>
            <Text fontSize={"18px"} mb={"20px"} fontWeight={"semibold"}>
              Company
            </Text>
            <Link>Demo</Link>
            <Link>Impact</Link>
            <Link>How Movva works</Link>
            <Link>Blog</Link>
            <Link>Career</Link>
            <Link>Business</Link>
            <Link>Newsroom</Link>
          </VStack>
          <VStack color={"#fff"} alignItems={"start"}>
            <Text fontSize={"18px"} mb={"20px"} fontWeight={"semibold"}>
              Our Values
            </Text>
            <Link>Safety</Link>
            <Link>Inclusion</Link>
          </VStack>
          <VStack color={"#fff"} alignItems={"start"}>
            <Text fontSize={"18px"} mb={"20px"} fontWeight={"semibold"}>
              Contact
            </Text>
            <Link>Email: support@getmovva.com</Link>
          </VStack>
        </Flex>
        <Flex justifyContent={"space-between"} w={"100%"} direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} gap={{base:'60px', lg: '0px'}}>
          <HStack>
            <Box>
              <Image src="why-movva/playstore.svg" alt="" />
            </Box>
            <Box>
              <Image src="why-movva/appstore.svg" alt="" />
            </Box>
          </HStack>
          <HStack justifyContent={'space-between'} w={{base:'100%', lg: '500px'}}>
            <Link>
              <Image src="why-movva/facebook.svg" alt="" />
            </Link>
            <Link>
              <Image src="why-movva/x.svg" alt="" />
            </Link>
            <Link>
              <Image src="why-movva/youtube.svg" alt="" />
            </Link>
            <Link>
              <Image src="why-movva/linkedin.svg" alt="" />
            </Link>
            <Link>
              <Image src="why-movva/instagram.svg" alt="" />
            </Link>
          </HStack>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          w={"100%"}
          gap={{ base: "20px", lg: "0px" }}
          flexWrap={"wrap"}
        >
          <Text fontSize={"12px"} color={"#AFAFAF"}>
            © 2025 Movva technologies. All Right Reserved
          </Text>
          <Flex gap={"15px"} color={"#AFAFAF"} fontSize={"12px"}>
            <Link href="/">Privacy</Link>
            <Link href="/">Accessibility</Link>
            <Link href="/">Terms</Link>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
