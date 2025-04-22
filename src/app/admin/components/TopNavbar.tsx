"use";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Tooltip,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

const TopNavbar = ({ onOpen }: { onOpen: () => void }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hasNotifications = true;
  return (
    <Flex
      as="header"
      px={10}
      py={3}
      align="center"
      bg={useColorModeValue("white", "grey.800")}
      borderBottomWidth="1px"
      position="sticky"
      top={0}
      zIndex="docked"
    >
      <IconButton
        icon={<FiMenu />}
        variant="ghost"
        aria-label="Open menu"
        onClick={onOpen}
        display={{ base: "inline-flex", md: "none" }}
        mr={2}
      />

      <Heading mb={4} fontSize={"28px"} >
        Dashboard
      </Heading>
      <Spacer />
      <HStack spacing={3} w={'100%'} maxW={'600px'}>
        <VStack
          w={"100%"}
          maxW={"630px"}
          bg={useColorModeValue("#f3f3f3", "grey.800")}
          borderRadius={"9px"}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.400" />
            </InputLeftElement>
            <Input type="text" placeholder="Search..." />
          </InputGroup>
        </VStack>

        <IconButton
          icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          variant="ghost"
        />
        <Tooltip label="Notification" hasArrow>
          <Box pos={"relative"}>
            <IconButton
              icon={<IoIosNotificationsOutline />}
              aria-label="Notifications"
              variant="ghost"
              fontSize="lg"
            />
            {hasNotifications && (
              <Badge
                bg="#EF4444"
                borderRadius="full"
                position="absolute"
                top="1"
                right="1"
                boxSize="2"
                p={0}
              />
            )}
          </Box>
        </Tooltip>
        <Avatar size="sm" name="Admin User" />
      </HStack>
    </Flex>
  );
};

export default TopNavbar;
