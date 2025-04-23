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
        <Link  fontSize={"24px"} fontWeight={"semibold"} color={"#fff"} href="/">
          Movva
        </Link>
        <Link href={''} color={"#fff"}>Visit Help Center</Link>

        <Flex w={"100%"} flexWrap={"wrap"} gap={{ base: "40px", lg: "160px" }}>
          <VStack color={"#fff"} alignItems={"start"}>
            <Text fontSize={"18px"} mb={"20px"} fontWeight={"semibold"}>
              Company
            </Text>
            <Link href={''}>Demo</Link>
            <Link href={''}>Impact</Link>
            <Link href={''}>How Movva works</Link>
            <Link href={''}>Blog</Link>
            <Link href={''}>Career</Link>
            <Link href={''}>Business</Link>
            <Link href={''}>Newsroom</Link>
          </VStack>
          <VStack color={"#fff"} alignItems={"start"}>
            <Text fontSize={"18px"} mb={"20px"} fontWeight={"semibold"}>
              Our Values
            </Text>
            <Link href={''}>Safety</Link>
            <Link href={''}>Inclusion</Link>
          </VStack>
          <VStack color={"#fff"} alignItems={"start"}>
            <Text fontSize={"18px"} mb={"20px"} fontWeight={"semibold"}>
              Contact
            </Text>
            <Link href={''}>Email: support@getmovva.com</Link>
            <Link href="/admin/auth/">.</Link>
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
            <Link href="https://www.facebook.com/share/15ASSJGxcN/?mibextid=wwXIfr" isExternal>
              <Image src="why-movva/facebook.svg" alt="" />
            </Link>
            <Link href="https://x.com/getmovva?s=21&t=tVyR5DlJpQ_RjzWuyHEd3Q" isExternal>
              <Image src="why-movva/x.svg" alt="" />
            </Link>
            <Link href="https://youtube.com/@getmovva?si=haqdHi7nZgoLbaW7" isExternal>
              <Image src="why-movva/youtube.svg" alt="" />
            </Link>
            <Link href="https://www.linkedin.com/company/movva-technologies-inc/" isExternal>
              <Image src="why-movva/linkedin.svg" alt="" />
            </Link>
            <Link href="https://www.instagram.com/getmovva?igsh=bjJobXJhZjBpNnY5" isExternal>
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
