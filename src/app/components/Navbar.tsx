"use client";

import React, { useState } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Image,
  Box,
  Flex,
  // List,
  // ListItem,
  Button,
  VStack,

  Stack,
} from "@chakra-ui/react";
// import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation";
import { ChevronLeftIcon } from "@chakra-ui/icons";
// import { useAppContext } from '@/contexts/AppContext'

const Navbar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname() || "";

  // Checking for the active
  const isActiveMenu = (path: string) => {
    return pathname === path;
  };

  return (
    <VStack
      bg={"#22244E"}
      color={"#fff"}
      h="auto"
      pb={"8px"}
      zIndex={100000000000000}
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
    >
      <Flex
        h="auto"
        alignItems={"center"}
        justifyContent={"space-between"}
        width="100%"
        maxW={"1249px"}
        mx="auto"
        pt="1rem"
      >
        <Box
          onClick={() => router.push("/")}
          width="124.56px"
          height="auto"
          cursor="pointer"
        >
          <Image
            src={pathname === "/faq" ? "/logo2.png" : "/logo.png"}
            alt=""
            width={{ base: "70px", md: "100px" }}
          />
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          gap={{ base: "none", md: "20px" }}
        >
          <Box
            gap={"2rem"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            fontWeight={"700"}
            fontSize={"14px"}
          >
            <Box
              style={{
                color: isActiveMenu("/movers/") ? "#17D1C6" : "#fff",
              }}
            >
              <Button variant={'unstyled'} onClick={() => router.push('/movers')}>Movva</Button>
            </Box>
            <Box
              style={{
                color: isActiveMenu("/senders/") ? "#17D1C6" : "#fff",
              }}
            >
              <Button variant={'unstyled'} onClick={() => router.push('/senders')}>Sender</Button>
            </Box>
          </Box>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          gap={{ base: "none", md: "20px" }}
        >
          {pathname == "/movers" || pathname == "/senders" ? (
            <Button
              leftIcon={<ChevronLeftIcon />}
              p={"15px"}
              cursor={"pointer"}
              color={"#000"}
              _hover={{ color: "gray" }}
              onClick={() => router.push("/")}
            >
              Go Back
            </Button>
          ) : (
            <Flex gap={"2rem"} alignItems={"center"}>
              <Button
                p={"25px"}
                cursor={"pointer"}
                color={"#000"}
                bg={'white'}
                _hover={{ color: "gray" }}
                onClick={() => router.push("/movers")}
              >
                Download Movva App
              </Button>
              <Button
                bg={"transparent"}
                p={"25px"}
                cursor={"pointer"}
                border={"2px solid #17D1C6"}
                color={"#ffffff"}
                _hover={{ color: "gray" }}
                onClick={() => router.push("/senders")}
              >
                Download Sender App
              </Button>
            </Flex>
          )}
        </Box>

        {/* MOBILE MENU */}
        <Box display={{ base: "block", md: "none" }}>
          {pathname?.includes("/movers") || pathname?.includes("/senders") ? (
            <Button
              leftIcon={<ChevronLeftIcon />}
              p="15px"
              cursor="pointer"
              color="#000"
              _hover={{ color: "gray" }}
              onClick={() => router.push("/")}
            >
              Go Back
            </Button>
          ) : isOpenDrawer ? (
            <BiX
              color="#fff"
              fontSize="30px"
              cursor="pointer"
              onClick={() => setIsOpenDrawer(false)}
            />
          ) : (
            <BiMenu
              color="#fff"
              fontSize="30px"
              cursor="pointer"
              onClick={() => setIsOpenDrawer(true)}
            />
          )}
        </Box>

        {/* Mobile Sidebar Navigation */}
        <Drawer
          isOpen={isOpenDrawer}
          onClose={() => setIsOpenDrawer(false)}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent bg={"#22244E"}>
            {/* <DrawerCloseButton /> */}
            <DrawerBody px={"2rem"} pt={"1rem"}>
              <Flex
                direction={"column"}
                width={"100%"}
                gap={"30px"}
                justifyContent={"space-between"}
              >
                <Box
                  gap={"1rem"}
                  mt={"5rem"}
                  style={{ listStyle: "none" }}
                  color={"#fff"}
                >
                  <Box
                    _hover={{ color: "grey" }}
                    onClick={() => setIsOpenDrawer(false)}
                  >
                    <Button variant={'unstyled'} onClick={() => router.push('/movers')}>Movva</Button>
                  </Box>
                  <Box
                    _hover={{ color: "grey" }}
                    onClick={() => setIsOpenDrawer(false)}
                  >
                    <Button variant={'unstyled'} onClick={() => router.push('/senders')}>Sender</Button>
                  </Box>
                </Box>
                <Stack>
                  <Button
                    p={"25px"}
                    cursor={"pointer"}
                    color={"#000"}
                    _hover={{ color: "gray" }}
                    onClick={() => {
                      // setIsOpenDrawer(false);
                      router.push("/movers");
                    }}
                  >
                    Download Movva App
                  </Button>

                  <Button
                    bg={"transparent"}
                    p={"25px"}
                    cursor={"pointer"}
                    border={"1px solid #17D1C6"}
                    color={"#ffffff"}
                    onClick={() => {
                      // setIsOpenDrawer(false);
                      router.push("/senders");
                    }}
                  >
                    Download Sender App
                  </Button>
                </Stack>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>

      {/* <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </VStack>
  );
};

export default Navbar;
