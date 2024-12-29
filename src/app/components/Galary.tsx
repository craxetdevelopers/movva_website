'use client'

import { Box, Flex, Image} from "@chakra-ui/react";
import React from "react";

const Galary = () => {
  return (
    <Box py={["1rem", "2rem", "6.5rem", "6.5rem"]}>
      <Flex justifyContent={'space-between'}>
        <Box>
          <Image src="landingpage/galary-img1.png" alt="" />
        </Box>
        <Box>
          <Image src="landingpage/galary-img2.png" alt="" />
        </Box>
        <Box>
          <Image src="landingpage/galary-img3.png" alt="" />
        </Box>
        <Box>
          <Image src="landingpage/galary-img4.png" alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Galary;
