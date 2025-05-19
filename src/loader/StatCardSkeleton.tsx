'use client'

import { VStack, Skeleton, useColorModeValue } from "@chakra-ui/react";

const StatCardSkeleton = () => {
  return (
    <VStack
      border={"0.5px solid #E4E7EC"}
      borderRadius={"12px"}
      bg={useColorModeValue("#fff", "gray.800")}
      w={"100%"}
      maxW={{ base: "200px", lg: "350px", "2xl": "420px" }}
      py={"30px"}
      gap={"15px"}
    >
      <Skeleton height="20px" width="60%" />
      <Skeleton height="36px" width="20%" />
      <Skeleton height="32px" width="80%" borderRadius="8px" />
      <Skeleton height="36px" width="60%" borderRadius="8px" />
    </VStack>
  );
};

export default StatCardSkeleton;
