import {
    Divider,
    Flex,
    Grid,
    GridItem,
    HStack,
    Skeleton,
    SkeletonCircle,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
 
  
  const ProfileSkeleton = () => {
    return (
      <VStack
        h={"550px"}
        borderRadius={"8px"}
        bg={useColorModeValue("#fff", "gray.700")}
        alignItems={"start"}
        border={"0.5px solid grey"}
        w={"100%"}
      >
        <Flex
          p={"40px"}
          alignItems={"start"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <HStack gap={"20px"}>
            <SkeletonCircle size="20" />
            <VStack alignItems={"start"} spacing={2}>
              <Skeleton height="20px" width="150px" />
              <Skeleton height="16px" width="120px" />
              <Skeleton height="16px" width="180px" />
            </VStack>
          </HStack>
          <HStack>
            <Skeleton height="40px" width="100px" borderRadius="8px" />
            <Skeleton height="40px" width="100px" borderRadius="8px" />
          </HStack>
        </Flex>
  
        <Divider />
  
        <Grid
          mt={"20px"}
          justifyContent={"space-between"}
          p={"40px"}
          templateColumns="repeat(4, 1fr)"
          gap={16}
          w={"100%"}
        >
          {[...Array(6)].map((_, idx) => (
            <GridItem key={idx} w="100%">
              <Skeleton height="14px" width="80px" mb={2} />
              <Skeleton height="18px" width="100px" />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    );
  };
  
  export default ProfileSkeleton;
  