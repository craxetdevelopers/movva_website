"use client";

import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const QuestionSection = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "2rem", "6.5rem", "6.5rem"]}
      color={"#fff"}
      w={"100%"}
    >
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
                        <ArrowDownIcon fontSize="32px" color={"#17D1C6"} />
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
    </Box>
  );
};

export default QuestionSection;

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
  {
    title: "What is the process for booking a delivery?",
    details: {
      list: [
        "Open the Movva app.",
        "Enter the delivery details, pick-up and drop-off locations.",
        "View the estimated cost.",
        "Confirm the booking.",
        "A mover will be assigned, and you can track your delivery in real-time.",
      ],
    },
  },
  {
    title: "Can I schedule deliveries in advance?",
    details: {
      description:
        "Yes, Movva allows you to schedule deliveries for a specific date and time.",
    },
  },
  {
    title: "What types of goods can I send through Movva?",
    details: {
      description:
        "Movva handles most goods, including documents, packages, and small to medium-sized items. However, prohibited items like contraband, hazardous materials, or perishables requiring refrigeration are not allowed.",
    },
  },
  {
    title: "How does Movva ensure the safety of goods in transit?",
    details: {
      description:
        "Movva insures all goods in transit through a reputable insurance company. Additionally, all movers are vetted and verified during the onboarding process.",
    },
  },
  {
    title: "Are movers trustworthy?",
    details: {
      description:
        "Yes, all movers undergo a thorough Know Your Customer (KYC) process, which includes verification of their identification, proof of residence, and background checks.",
    },
  },
  {
    title: "What happens if my goods are lost or damaged?",
    details: {
      description:
        "In the unlikely event of loss or damage, Movva’s insurance covers your goods. You can file a claim through the app for resolution.",
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
    title: "Do I need to have a bike or car to become a mover? ",
    details: {
      description:
        "No.",
    },
  },
  {
    title: "Who can become a mover on Movva?",
    details: {
      description:
        "Anyone with valid identification, and proof of residence can sign up as a mover.",
    },
  },
  {
    title: "What documents are required to sign up as a mover?",
    details: {
      description: "Movers need to provide:",
      list: [
        "A valid ID (e.g., National ID, Driver’s License, Voter’s Card).",
        "Proof of residence.",
        "BVN",
        "A bank account for receiving payments.",
      ],
    },
  },
  {
    title: "Do I need any special skills to become a mover?",
    details: {
      description:
        "No special skills are required. Movers just need the ability to navigate their environment.",
    },
  },
  {
    title: "What are Movva’s hours of operation?",
    details: {
      description:
        "Movva operates 24/7, allowing customers to book deliveries at any time.",
    },
  },
  {
    title: "Can businesses use Movva?",
    details: {
      description:
        "Yes, businesses can use Movva for bulk deliveries or as a logistics solution for their operations.",
    },
  },
  {
    title: "How does Movva handle disputes between customers and movers?",
    details: {
      description:
        "Movva has a dedicated customer support team to resolve disputes. Customers can report issues through the app, and the team will mediate to ensure a fair resolution.",
    },
  },
  {
    title: "Can I cancel a delivery after booking?",
    details: {
      description:
        "Yes, deliveries can be canceled before the mover picks up the goods. Cancellation fees may apply depending on the timing.",
    },
  },
  {
    title: "How do I contact Movva for support?",
    details: {
      description:
        "You can reach Movva’s support team through support@getmovva.com",
    },
  },
  {
    title: "How do movers get paid?",
    details: {
      description:
        "Movers get paid upon every successful delivery, and they can withdraw into their bank account on a weekly basis.",
    },
  },

];
