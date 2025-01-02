"use client";

import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
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
        <Accordion allowToggle defaultIndex={[0]} width="100%" maxW={"1249px"}>
          {question.map((data, idx) => (
            <AccordionItem border={"none"} key={idx} mb={'20px'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ color: "#3366FF" }}
                      _hover={{ backgroundColor: "none" }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        color={isExpanded ? "#3366FF" : "#6F6F6F"}
                        textAlign="left"
                        fontSize={"36px"}
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
                  <AccordionPanel pb={4} color={"#2E2E2E"} fontSize={"24px"}>
                    {data.details}
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
  details: string;
}

const question: Questions[] = [
  {
    title: "How does Movva ensure my package’s safety? ",
    details:
      "Movva has put in place extensive verification systems to ensure that all delivery person are vetted, also we have proprietary tracking algorithm we use to make sure that we know where your package is at all times",
  },
  {
    title: "Can I join without a bike or car?",
    details:
      "Movva has put in place extensive verification systems to ensure that all delivery person are vetted, also we have proprietary tracking algorithm we use to make sure that we know where your package is at all times",
  },
  {
    title: "How are delivery fees calculated?",
    details:
      "Movva has put in place extensive verification systems to ensure that all delivery person are vetted, also we have proprietary tracking algorithm we use to make sure that we know where your package is at all times",
  },
  {
    title: "When do Movers get paid?",
    details:
      "Movva has put in place extensive verification systems to ensure that all delivery person are vetted, also we have proprietary tracking algorithm we use to make sure that we know where your package is at all times",
  },
];
