'use client'

import { Box, Button, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <Box
      h="100%"
      w="100%"
      backgroundImage="url('/landingpage/hero-bg.png')"
      backgroundRepeat="repeat"
      pb={'3rem'}
    
    >
      <Stack gap={'2rem'}  h={'auto'} >
        <Navbar />
        <Stack
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          // py={{base: '2rem', lg: '5rem'}}
        >
          <Stack width="100%" maxW={"1249px"} mx="auto" >
            <Text
              w={{ base: "100%", lg: "776px" }}
              color={"#fff"}
              fontWeight={"700"}
              fontSize={{ base: "38px", md: "60px", lg: "81px" }}
              textAlign={{base:'center', lg:'start'}}
              py={{base: '1.5rem', md: '4rem'}}
            >
              Delivery, Simplified for Everyone
            </Text>
            <Flex justifyContent={'space-between'} direction={{base: 'column', md:'row'}}>
              <VStack py={'30px'} alignItems={{base:'center', lg:'start'}} gap={'50px'}>
                <Text color={'#FFFFFF'}  textAlign={{base:'center', md:'start'}} fontWeight={'400'} w={{base:'', md:'450px', lg:'527px'}}  fontSize={'21px'}>
                  we believe everyone deserves an opportunity to earn and every
                  package deserves to arrive on time.
                </Text>
                <Button p={"30px 25px"} bg={'#17D1C6'} border={'1px solid #2057C2'} borderRadius={"100px"}>Learn more</Button>
              </VStack>
              <VStack >
                <Image src="landingpage/hero-img1.png" alt="" w={{base:'100%', sm:'525px'}} />
              </VStack>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
