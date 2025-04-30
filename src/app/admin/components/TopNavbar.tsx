"use";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
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
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

const TopNavbar = ({
  onOpen,
  title = "Dashboard",
}: {
  onOpen: () => void;
  title?: string;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  const params = useParams(); // ✅ use the hook here
  const id = params?.id;
  const hasNotifications = true;
  const backgroundColor = useColorModeValue("#f3f3f3", "grey.800");
  return (
    <Flex
      as="header"
      px={10}
      py={3}
      align="center"
      bg={useColorModeValue("white", "grey.800")}
      borderBottomWidth="1px"
      //   position="sticky"
      //   top={0}
      justifyContent={"space-between"}
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
        {title}
      </Heading>
      <Spacer />
      <HStack spacing={3} w={"fit-content"} >
        {pathname == `/admin/movvas/${id}/` ? (
          ""
        ) : (
          <VStack bg={backgroundColor} borderRadius={"9px"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.400" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search..."
                w={"100%"}
                maxW={"630px"}
              />
            </InputGroup>
          </VStack>
        )}
        <HStack alignItems={"center"}>
          {pathname == "/admin/movvas" && (
            <Button bg={"#2C2F66"}>Filter</Button>
          )}

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
      </HStack>
    </Flex>
  );
};

export default TopNavbar;
