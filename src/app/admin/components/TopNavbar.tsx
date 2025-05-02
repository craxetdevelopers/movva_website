"use";

import { useAuth } from "@/contexts/AuthContext";

import {
  Avatar,
  Badge,
  Box,

  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// import { usePathname } from "next/navigation";
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
  // const pathname = usePathname();
  // const params = useParams(); // ✅ use the hook here
  // const id = params?.id;
  const hasNotifications = true;
  // const backgroundColor = useColorModeValue("#f3f3f3", "grey.800");
  const { adminUser } = useAuth();
  console.log(adminUser?.bank_name);
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
      alignItems={'center'}
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

      <Heading mb={4} fontSize={"28px"}>
        {title}
      </Heading>
      <Spacer />
      <HStack spacing={3} w={"fit-content"}>
        <HStack alignItems={"center"}>
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
          <Avatar
            size="sm"
            name={`${adminUser?.first_name} ${adminUser?.last_name}`}
          />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default TopNavbar;
