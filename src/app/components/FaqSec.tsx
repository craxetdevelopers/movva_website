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
import { useRouter } from "next/navigation";
import React from "react";

const FaqSec = () => {
  const router = useRouter();
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "3rem", "3rem", "5rem"]}
      bg={"#22244E"}
      h={"auto"}
    >
      <Stack width="100%" maxW={"1249px"} mx="auto" color={"#22244E"}>
        <Flex gap={"160px"}>
          <VStack
            // py={"10px"}
            textAlign={{ base: "center", lg: "start" }}
            alignItems={{ base: "center", lg: "start" }}
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
          <VStack
            width="100%"
            maxW={"1249px"}
            mx="auto"
            justifyContent={"space-between"}
            // py={"40px"}
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
                          gap={"30px"}
                        >
                          {isExpanded ? (
                            <VStack
                              w={"30px"}
                              h={"30px"}
                              bg={"#17D1C6"}
                              borderRadius={"100px"}
                              justifyContent={"center"}
                            >
                              <MinusIcon fontSize="16px" color={"#16193A"} />
                            </VStack>
                          ) : (
                            <Box
                              w={"30px"}
                              h={"30px"}
                              bg={"#17D1C6"}
                              borderRadius={"100px"}
                              justifyContent={"center"}
                            >
                              <AddIcon fontSize="13px" color={"#16193A"} />
                            </Box>
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
                        pl={"80px"}
                        color={"#fff"}
                        fontSize={{ base: "16px", lg: "14px" }}
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
        </Flex>
        <VStack>
          <Button
            variant={"outline"}
            bg={"none"}
            mt={'50px'}
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
        </VStack>
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
