"use client";

import React, { useState } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Image,
  Box,
  Flex,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation";
// import { useAppContext } from '@/contexts/AppContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Checking for the active
  const isActiveMenu = (path: string) => {
    return pathname === path;
  };

  return (
    <Box
      bg={"transparent"}
      color={"#fff"}
      h="72px"
      zIndex={10000000000000}
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={"4rem"}
    >
      <Flex
        h="100%"
        alignItems={"center"}
        justifyContent={"space-between"}
        width="100%"
        maxW={"1249px"}
        mx="auto"
      >
        <Box
          onClick={() => router.push("/")}
          width="124.56px"
          height="auto"
          cursor="pointer"
        >
          <Image src={pathname === '/faq' ? '/logo2.png' :  "/logo.png" } alt="" />
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          gap={{ base: "none", md: "20px" }}
        >
          <List
            gap={"2rem"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            fontWeight={"700"}
            fontSize={"14px"}
          >
            <ListItem style={{ color: isActiveMenu("/") ? "grey" : pathname === '/faq' ? '#22244E' : "#fff" }}>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/about") ? "grey" : pathname === '/faq' ? '#22244E' : "#fff"   
              }}
            >
              <Link href="/about">About</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/movers") ? "grey" : pathname === '/faq' ? '#22244E' : "#fff",
              }}
            >
              <Link href="/movers">Movers</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/senders") ? "grey" : pathname === '/faq' ? '#22244E' : "#fff",
              }}
            >
              <Link href="/senders">Senders</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/business") ? "grey" : pathname === '/faq' ? '#22244E' : "#fff",
              }}
            >
              <Link href="/business">Business</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/faq") ? "grey" : pathname === '/faq' ? '#22244E' : "#fff",
              }}
            >
              <Link href="/faq">FAQ</Link>
            </ListItem>
          </List>

          <Flex gap={"1rem"} alignItems={"center"}>
            <Button bg={"#FF7D6A"} color={"#CCEDEB"} _hover={{ color: "#000" }}>
              Sign in
            </Button>
          </Flex>
        </Box>

        {/* MOBILE MENU */}
        <Box display={{ base: "block", md: "none" }}>
          {!isOpen ? (
            <BiMenu
              color="#fff"
              onClick={() => {
                console.log("Opening menu");
                setIsOpen(true);
              }}
            />
          ) : (
            <BiX
              color="#fff"
              onClick={() => {
                console.log("Closing menu menu");
                setIsOpen(false);
              }}
            />
          )}
        </Box>

        {/* Mobile Sidebar Navigation */}
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody bgColor="#030c1c">
              <Flex direction={"column"} width={"100%"}>
                <Box
                  width="124.56px"
                  height="36.76px"
                  cursor="pointer"
                  onClick={() => router.push("/")}
                >
                  <Image src="/logo.png" alt="" />
                </Box>
                <List
                  spacing={"1rem"}
                  my={"2rem"}
                  style={{ listStyle: "none" }}
                  color={"#ffffff"}
                >
                  <ListItem color={"#ffffff"} onClick={() => setIsOpen(false)}>
                    <Link href="/">Home</Link>
                  </ListItem>
                  <ListItem color={"#ffffff"} onClick={() => setIsOpen(false)}>
                    <Link href="/hackathon">Hackathons</Link>
                  </ListItem>
                  <ListItem color={"#ffffff"} onClick={() => setIsOpen(false)}>
                    <Link href="/community-view">Communities</Link>
                  </ListItem>
                  {/* <ListItem color={'#ffffff'} onClick={() => setIsOpen(false)}>
                    <Link href="/leaderboard">Leaderboard</Link>
                  </ListItem> */}
                  <ListItem onClick={() => setIsOpen(false)}>
                    <Link href="/help">Help</Link>
                  </ListItem>
                </List>

                <Button>Sign in</Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
