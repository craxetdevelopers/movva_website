import { Box, Skeleton, VStack } from "@chakra-ui/react";
import React from "react";

const LineChartSkeleton = () => {
  return (
    <Box width="100%" height="100%">
      <Box position="relative" width="100%" height="100%">
        {/* Y-axis lines */}
        <VStack
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          spacing="20px"
          justifyContent="space-between"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Box key={index} width="100%" height="1px" bg="gray.200" />
          ))}
        </VStack>

        {/* Area graph shimmer effect */}
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
          px={2}
        >
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton
              key={index}
              height={`${Math.floor(Math.random() * 70) + 30}%`}
              width="6%"
              borderRadius="full"
              fadeDuration={0.2}
              speed={1.2}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LineChartSkeleton;
