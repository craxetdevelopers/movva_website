'use client'


import { Box, Button, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <Box
      h='auto'
      w="100%"
      backgroundImage="url('/landingpage/abt-us-bg.png')"
      backgroundPosition=""
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        px={["1rem", "2rem", "2rem", "2rem", "0"]}
        py={["1rem", "2rem", "4.5rem", "6.5rem"]}
      >
        <Flex width="100%" maxW={"1249px"} mx="auto" justifyContent={'space-between'} direction={{base: 'column', lg:'row'}} gap={{base: '40px', lg:'0px'}}>
          <VStack alignItems={{base:'center', lg:'start'}} display={{ base: "none", lg: "block" }}>
            <Heading
              sx={{
                color: "transparent",
                backgroundClip: "text",
                WebkitTextStroke: "0.7px rgba(255, 255, 255, 0.5)",
                WebkitTextFillColor: "transparent",
              }}
              bg={"transparent"}
              opacity={"0.2"}
              fontSize={{ base: "38px", md: "70px", lg: "104px" }}
              
            >
              About us
            </Heading>
            <Heading
              color={"#FFFFFF"}
              fontWeight={"700"}
              w={{base:'100%', lg:"400px"}}
              fontSize={{ base: "28px", md: "35px", lg: "52px" }}
              textAlign={{base:'center', lg:'start'}}
            >
              Revolutionizing Last Mile Delivery, One Mover at a Time.
            </Heading>
            <Button mt={'50px'} p={'30px 25px'} bg={'#17D1C6'} borderRadius={'100px'} color={'#22244E'}> About us</Button>
          </VStack>
          <VStack>
            <Image src="landingpage/abt-img.png" alt="" w={{base:'100%', md:'538px'}}/>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
