import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Stagger effect for each accordion item
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 }, // Slide in from the right
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FaqSec = () => {
  const router = useRouter();
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["3rem", "3rem", "3rem", "5rem"]}
      bg={"#22244E"}
      h={"auto"}
    >
      <Stack width="100%" maxW={"1249px"} mx="auto" color={"#22244E"}>
        <Flex
          gap={{ base: "60px", lg: "160px" }}
          direction={["column", "column", "column", "row"]}
        >
          <VStack
            // py={"10px"}
            textAlign={{ base: "start", lg: "start" }}
            alignItems={{ base: "start", lg: "start" }}
            gap={"30px"}
          >
            <Text
              w={{ base: "100%", lg: "380px" }}
              fontWeight={"700"}
              fontSize={{ base: "24px", md: "40px" }}
              lineHeight={{ base: "auto", lg: "80px" }}
              color={"#fff"}
            >
              Got Questions? We’ve Got Answers
            </Text>
          </VStack>
          <MotionVStack
            width="100%"
            maxW={"1249px"}
            mx="auto"
            justifyContent={"space-between"}
            alignItems={"center"}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Accordion
              border={"none"}
              allowToggle
              defaultIndex={[0]}
              width="100%"
              maxW={"1249px"}
            >
              {question.map((data, idx) => (
                <MotionBox key={idx} variants={itemVariants}>
                  <AccordionItem border={"none"} mb={"20px"}>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton
                            // _expanded={{ color: "#3366FF" }}
                            _hover={{ backgroundColor: "none" }}
                            border={"none"}
                            gap={"30px"}
                          >
                            {isExpanded ? (
                              <VStack
                                w={"30px"}
                                h={"30px"}
                                bg={"#FF7D6A"}
                                borderRadius={"100px"}
                                justifyContent={"center"}
                              >
                                <MinusIcon fontSize="16px" color={"#16193A"} />
                              </VStack>
                            ) : (
                              <VStack
                                w={"30px"}
                                h={"30px"}
                                bg={"#17D1C6"}
                                borderRadius={"100px"}
                                justifyContent={"center"}
                              >
                                <AddIcon fontSize="13px" color={"#16193A"} />
                              </VStack>
                            )}

                            <Box
                              as="span"
                              flex="1"
                              color={isExpanded ? "#3366FF" : "#fff"}
                              textAlign="left"
                              fontSize={{ base: "16px", lg: "20px" }}
                              fontWeight={"semibold"}
                              py={"px"}
                            >
                              {data.title}
                            </Box>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          pb={4}
                          ml={"80px"}
                          color={"#fff"}
                          fontSize={{ base: "16px", lg: "14px" }}
                          borderLeft={"1px solid #FF7D6A"}
                        >
                          {data.details.description && (
                            <Box mb={4}>{data.details.description}</Box>
                          )}
                          {data.details.list && (
                            <UnorderedList pl={6} spacing={3}>
                              {data.details.list.map((item, i) => (
                                <ListItem key={i}>{item}</ListItem>
                              ))}
                            </UnorderedList>
                          )}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </MotionBox>
              ))}
            </Accordion>
          </MotionVStack>
        </Flex>
        {/* <VStack>
          <Button
            variant={"outline"}
            bg={"none"}
            mt={"50px"}
            border={"none"}
            borderBottom={"1px solid #17D1C6"}
            color={"#17D1C6"}
            w={"fit-content"}
            onClick={() => router.push("/faq")}
            _hover={{
              color: "#fff",
              background: "none",
              border: "1px solid #17D1C6",
            }}
          >
            {" "}
            View more
          </Button>
        </VStack> */}
      </Stack>
    </Box>
  );
};

export default FaqSec;

interface Questions {
  title: string;
  details: {
    description?: string;
    list?: string[];
  };
}

const question: Questions[] = [
  {
    title: "Who can use Movva?",
    details: {
      description: "Movva is for everyone:",
      list: [
        "Customers: Anyone looking to send or receive goods.",
        "Movers: Individuals seeking side gigs or extra income, such as students, unemployed individuals, or part-timers.",
      ],
    },
  },
  {
    title: "Where is Movva currently available?",
    details: {
      description:
        "Movva is currently available in Lagos, Nigeria, with plans to expand to other cities and countries across Africa.",
    },
  },
  {
    title: "What types of goods can I send through Movva?",
    details: {
      description:
        "Movva facilitates the delivery of most goods, including documents, packages and small to medium-sized items, as long as they weigh 10kg or less and have a maximum value of NGN50,000. However, prohibited items such as contraband, hazardous materials, and perishables requiring refrigeration are not allowed.",
    },
  },
  {
    title: "How does Movva insure the safety of goods in transit?",
    details: {
      description:
        "Movva insures all goods in transit through a reputable insurance company. Additionally, all Movvas are vetted and verified during the onboarding process.",
    },
  },
  {
    title: "Are Movvas trustworthy?",
    details: {
      description:
        "Yes, all Movvas undergo a thorough Know Your Customer (KYC) process, which includes verification of their identification, proof of residence, and background checks.",
    },
  },
  {
    title: "Can I track my delivery?",
    details: {
      description:
        "Yes, Movva provides real-time tracking for all deliveries through the app. Both sender and receiver can track, real-time.",
    },
  },
  {
    title: "Do I need to have a bike or car to become a Movva?",
    details: {
      description:
        "No.",
    },
  },
  {
    title: "Who can become a Movva on Movva?",
    details: {
      description:
        "Anyone with valid identification, and proof of residence can sign up as a Movva.",
    },
  },
  {
    title: "Do I need any special skills to become a Movva?",
    details: {
      description:
        "No.",
    },
  },
  {
    title: "Can businesses use Movva?",
    details: {
      description:
        "Yes, businesses can use Movva for bulk deliveries or as a logistics solution for their operations.",
    },
  },
];
