'use client'

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "2rem", "6.5rem", "6.5rem"]}
      bg={"#22244E"}
    >
      <VStack width="100%" maxW={"1249px"} mx="auto" alignItems={"start"}>
        <Flex justifyContent={"space-between"} w={"100%"}>
          <VStack color={"#fff"} alignItems={"start"}>
            <Link>Help</Link>
            <Link>Demo</Link>
            <Link>Impact</Link>
            <Link>How movva works</Link>
          </VStack>
          <VStack color={"#fff"} alignItems={"start"}>
            <Link>About us</Link>
            <Link>Blog</Link>
            <Link>Career</Link>
            <Link>Security</Link>
          </VStack>
          <VStack color={"#fff"} alignItems={"start"}>
            <Link>Sender</Link>
            <Link>Mover</Link>
            <Link>Business</Link>
          </VStack>
          <VStack color={"#fff"} alignItems={"start"}>
            <Link textDecoration={"underline"}>Privacy Policy↗</Link>
          </VStack>
          <VStack alignItems={"start"} gap={"15px"}>
            <Heading fontSize={"21.6px"} fontWeight={"500"} color={"#17D1C6"}>
              Sign up for the Newsletter
            </Heading>
            <Flex gap={"5px"}>
              <form>
                <Input
                  p={"22px"}
                  w={"180px"}
                  bg={"#F9F9F9"}
                  fontSize={"14px"}
                  borderRadius={"10px 0px 0px 10px"}
                  color="#161616"
                  border={"1px solid grey"}
                />
              </form>
              <Button
                bg={"#17D1C6"}
                p={"23px"}
                color={"#2E2E2E"}
                fontSize={"12px"}
                borderRadius={"0px 10px 10px 0px"}
              >
                Get started
              </Button>
            </Flex>
          </VStack>
        </Flex>
        <Divider mt={"80px"} color={"#fff"} />
        <Flex justifyContent={"space-between"} w={"100%"}>
          <Text fontSize={"13px"} color={"#17D1C6"}>
            © 2023 Movva technologies. All Right Reserved
          </Text>
          <Flex gap={'15px'}>
            <Flex alignItems={'center'} fontSize={"13px"} gap={'8px'} color={"#17D1C6"}>
              <Box>
                <Image src="landingpage/twitter.png" alt="" />
              </Box>
              <Link href="/">Twitter</Link>
            </Flex>
            <Flex alignItems={'center'} fontSize={"13px"} gap={'8px'} color={"#17D1C6"}>
              <Box>
                <Image src="landingpage/instagram.png" alt="" />
              </Box>
              <Link href="/">Instagram</Link>
            </Flex>
            <Flex alignItems={'center'} fontSize={"13px"} gap={'8px'} color={"#17D1C6"}>
              <Box>
                <Image src="landingpage/linkedin.png" alt="" />
              </Box>
              <Link href="/">LinkedIn</Link>
            </Flex>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
