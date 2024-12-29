import Navbar from "@/app/components/Navbar";
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const BusinessHero = () => {
  return (
    <Box
      h="100vh"
      w="100%"
      backgroundImage="url('/business/business-hero.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Stack>
        <Navbar />
        <Box
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          py={["1rem", "3rem", "5rem", "5rem"]}
        >
          <VStack width="100%" pt={"90px"} maxW={"1249px"} mx="auto">
            <Text
              fontSize={"75px"}
              color={"#17D1C6"}
              fontWeight={"700"}
              w={"790px"}
              textAlign={"center"}
              lineHeight={'80px'}
            >
              Empower Your Business{" "}
              <span style={{ color: "#fff" }}>with Movva</span>
            </Text>
            <VStack alignItems={"center"} mt={"40px"} w={'627px'} >
              <Text color={"#fff"} fontSize={"24px"} textAlign={"center"}>
                Let Movva take care of your deliveries while you focus on
                growing your business.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default BusinessHero;
