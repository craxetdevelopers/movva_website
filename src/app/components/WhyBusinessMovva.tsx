"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const MotionVStack = motion(VStack);

const WhyBusinessMovva = () => {
  const router = useRouter();
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
        alignItems={"start"}
      >
        <Heading
          fontSize={{ base: "24px", md: "30px", lg: "36px" }}
          color={"#000"}
          fontWeight={"semibold"}
        >
          Why Movva for Businesses?
        </Heading>
        <Flex
          mt={"30px"}
          justifyContent={"space-between"}
          w={"100%"}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          {keyBenefit.map((benefit, idx) => (
            <MotionVStack
              key={idx}
              w={{ base: "100%", md: "380px" }}
              h={{ base: "auto", md: "160px" }}
              bg={"#F3F3F3"}
              borderRadius={"8px"}
              alignItems={"start"}
              p={"1.3rem"}
              justifyContent={"center"}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Flex
                justifyContent={"space-between"}
                w={"100%"}
                alignItems={"center"}
              >
                <VStack w={"100%"} alignItems={"start"} gap={"10px"}>
                  <Text color={'#000'} fontWeight={"semibold"}>{benefit.title}</Text>
                  <Text color={'#000'} fontSize={"12px"} fontWeight={"normal"} w={"210px"}>
                    {benefit.details}
                  </Text>
                  <Button
                    bg={"#fff"}
                    borderRadius={"100px"}
                    color={'#000'}
                    onClick={() => router.push("/senders")}
                  >
                    Get App
                  </Button>
                </VStack>
                <Box>
                  <Image
                    src={benefit.img}
                    alt=""
                    w={{ base: "100%", lg: "300px" }}
                  />
                </Box>
              </Flex>
            </MotionVStack>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default WhyBusinessMovva;

interface KeyBenefit {
  title: string;
  details: string;
  img: string;
}

const keyBenefit: KeyBenefit[] = [
  {
    title: "Flexible",
    details: "Move goods without hiring a delivery team.",
    img: "/why-movva/flexible-icon.svg",
  },
  {
    title: "Scalable",
    details: "Use Movva whether you need occasional or daily movement.",
    img: "/why-movva/scalable-icon.svg",
  },
  {
    title: "Cost-Effective",
    details: "Pay based on actual movement, not overhead",
    img: "/why-movva/effective-icon.svg",
  },
];
