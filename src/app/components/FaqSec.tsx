import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const FaqSec = () => {
    const router = useRouter()
  return (
    <Box h="auto" w="100%" backgroundColor={"#fff"}>
      <Stack>
        <Box
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          py={["1rem", "3rem", "3rem", "5rem"]}
        >
          <Stack width="100%" maxW={"1249px"} mx="auto" color={"#22244E"}>
            <VStack
              py={"10px"}
              textAlign={{ base: "center", lg: "start" }}
              alignItems={{ base: "center", lg: "start" }}
              gap={"30px"}
            >
              <Text
                w={{ base: "100%", lg: "795px" }}
                fontWeight={"700"}
                fontSize={{ base: "38px", md: "60px", lg: "70px" }}
                lineHeight={{ base: "auto", lg: "80px" }}
              >
                Frequently Asked Questions (FAQs)
              </Text>
              <Text fontSize={{ base: "16px", md: "24px" }}>
                Got Questions? We’ve Got Answers.
              </Text>
            </VStack>
            <VStack
              width="100%"
              maxW={"1249px"}
              mx="auto"
              justifyContent={"space-between"}
              py={"40px"}
              alignItems={"center"}
            >
              <Accordion
                border={"none"}
                allowToggle
                defaultIndex={[0]}
                width="100%"
                maxW={"1249px"}
              >
                {question.map((data, idx) => (
                  <AccordionItem border={"none"} key={idx} mb={"20px"}>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton
                            _expanded={{ color: "#3366FF" }}
                            _hover={{ backgroundColor: "none" }}
                            border={"none"}
                          >
                            <Box
                              as="span"
                              flex="1"
                              color={isExpanded ? "#3366FF" : "#6F6F6F"}
                              textAlign="left"
                              fontSize={{ base: "22px", lg: "36px" }}
                              fontWeight={"700"}
                              borderBottom={"1px solid #2E2E2E"}
                              py={"20px"}
                            >
                              {data.title}
                            </Box>
                            {isExpanded ? (
                              <ArrowUpIcon fontSize="32px" color={"#17D1C6"} />
                            ) : (
                              <ArrowDownIcon
                                fontSize="32px"
                                color={"#17D1C6"}
                              />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          pb={4}
                          color={"#2E2E2E"}
                          fontSize={{ base: "16px", lg: "24px" }}
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
                ))}
              </Accordion>
            </VStack>
            <VStack>
              <Button
                p={"30px 25px"}
                bg={"#17D1C6"}
                borderRadius={"100px"}
                color={"#22244E"}
                w={"fit-content"}
                onClick={() => router.push('/faq')}
              >
                {" "}
                View more
              </Button>
            </VStack>
          </Stack>
        </Box>
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
    title: "What is Movva?",
    details: {
      description:
        "Movva is a decentralized logistics platform that allows anyone with proper identification to become a dispatch person. The platform aims to simplify delivery services by enabling individuals to perform pick-up and delivery tasks along their line of travel.",
    },
  },
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
    title: "How does Movva work?",
    details: {
      list: [
        "Movva connects customers with vetted movers through the mobile app.",
        "Customers request a pick-up and delivery, and the system matches them with the nearest available mover heading the same way as the package.",
      ],
    },
  },
];
