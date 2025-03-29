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
import { motion } from "framer-motion";
import React from "react";

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionTag = motion(Tag);

// Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Each child appears 0.3s apart
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
        gap={"30px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <MotionVStack
          alignItems={"start"}
          w={"100%"}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <MotionTag
            p={"8px 13px"}
            borderRadius="full"
            bg={"#EDEFFA"}
            fontWeight={"normal"}
            // w={'100%'}
            fontSize={{ base: "12px", lg: "16px" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            FOR BUSINESSES: A SMARTER WAY TO MOVE GOODS
          </MotionTag>
          <Stack mt={{ base: "20px", md: "45px" }}>
            <MotionHeading
              fontSize={{ base: "24px", md: "40px" }}
              color={"#000"}
              fontWeight={"bold"}
              w={{ base: "100%", md: "383px" }}
              variants={itemVariants}
            >
              Tap Into a Community of Everyday Movvas
            </MotionHeading>
          </Stack>
          <MotionText mt={"19px"} w={{ base: "100%", lg: "422px" }} color={"#000"} variants={itemVariants}>
            Reduce delivery costs by leveraging Movva’s Community driven
            movement model.
          </MotionText>
          <MotionButton
            p={"23px 35px"}
            color={"#fff"}
            mt={"30px"}
            cursor={"pointer"}
            bg={"#22244E"}
            border={"1px solid #2057C2"}
            borderRadius={"8px"}
            _hover={{ color: "#000", background: "#fff" }}
            variants={itemVariants}
            //   onClick={() => router.push("/movers")}
          >
            Download Sender App
          </MotionButton>
        </MotionVStack>
        <Box>
          <Image
            src="why-movva/business-img.png"
            alt=""
            w={{ base: "100%", lg: "900px" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default BusinessMovva;
