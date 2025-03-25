import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const HowSenderWorks = () => {
  return (
    <VStack mt={"8rem"} w={'100%'} alignItems={{base:'start', md: 'center'}}>
      <Heading
        mb={{base: '30px', lg:"60px"}}
        color={"#fff"}
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
      >
        How it works
      </Heading>
      <Flex justifyContent={'space-between'} w={'100%'} flexWrap={'wrap'} gap={'15px'}>
        {howSenderWorks.map((senderWorks, idx) => (
          <VStack
            key={idx}
            w={{base:'100%', lg:"380px"}}
            h={{base: 'auto', lg: "220px"}}
            bg={"#F3F3F3"}
            borderRadius={"8px"}
            alignItems={"start"}
            p={"30px"}
            gap={'20px'}
          >
            <Box>
              <Image src={senderWorks.img} alt="" w={'100%'}/>
            </Box>
            <Text fontSize={{base: '14px', md:"20px"}}>
              {senderWorks.details}
            </Text>
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
};

export default HowSenderWorks;

interface HowSenderWorks {
  details: string;
  img: string;
}

const howSenderWorks: HowSenderWorks[] = [
  {
    details:
      "Book a Movva - Enter your pickup, delivery details and drop-off address.",
    img: "/key-benefit/one.svg",
  },
  {
    details:
      "Get Matched Instantly - A verified Movva nearby accepts your request.",
    img: "/key-benefit/two.svg",
  },
  {
    details:
      "Track & Confirm - Follow real-time updates until your item is delivered..",
    img: "/key-benefit/three.svg",
  },
];
