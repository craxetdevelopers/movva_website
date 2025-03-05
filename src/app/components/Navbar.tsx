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
} from "@chakra-ui/react";
// import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation";
import SignInModal from "./SignInModal";
// import { useAppContext } from '@/contexts/AppContext'

const Navbar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Checking for the active
  // const isActiveMenu = (path: string) => {
  //   return pathname === path;
  // };

  return (
    <Box
      bg={"#22244E"}
      color={"#fff"}
      h="auto"
      pb={"25px"}
      zIndex={10000000000000}
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
          {/* <List
            gap={"2rem"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            fontWeight={"700"}
            fontSize={"14px"}
          >
            <ListItem
              style={{
                color: isActiveMenu("/")
                  ? "grey"
                  : pathname === "/faq"
                  ? "#22244E"
                  : "#fff",
              }}
            >
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/about")
                  ? "grey"
                  : pathname === "/faq"
                  ? "#22244E"
                  : "#fff",
              }}
            >
              <Link href="/about">About</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/movers")
                  ? "grey"
                  : pathname === "/faq"
                  ? "#22244E"
                  : "#fff",
              }}
            >
              <Link href="/movers">Movers</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/senders")
                  ? "grey"
                  : pathname === "/faq"
                  ? "#22244E"
                  : "#fff",
              }}
            >
              <Link href="/senders">Senders</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/business")
                  ? "grey"
                  : pathname === "/faq"
                  ? "#22244E"
                  : "#fff",
              }}
            >
              <Link href="/business">Business</Link>
            </ListItem>
            <ListItem
              style={{
                color: isActiveMenu("/faq")
                  ? "grey"
                  : pathname === "/faq"
                  ? "#22244E"
                  : "#fff",
              }}
            >
              <Link href="/faq">FAQ</Link>
            </ListItem>
          </List> */}

          <Flex gap={"3rem"} alignItems={"center"}>
            <Button
              variant={"unstyled"}
              color={"#ffffff"}
              _hover={{ color: "gray" }}
              onClick={() => setIsModalOpen(true)}
            >
              Sign in
            </Button>
            <Button
              bg={"#ffffff"}
              color={"#000000"}
              _hover={{ color: "#000" }}
              onClick={() => setIsModalOpen(true)}
            >
              Sign up
            </Button>
          </Flex>
        </Box>

        {/* MOBILE MENU */}
        <Box display={{ base: "block", md: "none" }}>
          {!isOpenDrawer ? (
            <BiMenu
              color="#fff"
              cursor={"pointer"}
              fontSize="30px"
              onClick={() => {
                setIsOpenDrawer(true);
              }}
            />
          ) : (
            <BiX
              color="#fff"
              fontSize="30px"
              cursor={"pointer"}
              onClick={() => {
                setIsOpenDrawer(false);
              }}
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
          <DrawerContent bg={"#17D1C6"}>
            {/* <DrawerCloseButton /> */}
            <DrawerBody px={"2rem"}>
              <Flex direction={"column"} width={"100%"}>
                {/* <List
                  spacing={"1rem"}
                  my={"9rem"}
                  style={{ listStyle: "none" }}
                  color={"#22244E"}
                >
                  <ListItem
                    _hover={{ color: "grey" }}
                    onClick={() => setIsOpenDrawer(false)}
                  >
                    <Link href="/">Home</Link>
                  </ListItem>
                  <ListItem
                    _hover={{ color: "grey" }}
                    onClick={() => setIsOpenDrawer(false)}
                  >
                    <Link href="/about">About</Link>
                  </ListItem>
                  <ListItem
                    _hover={{ color: "grey" }}
                    onClick={() => setIsOpenDrawer(false)}
                  >
                    <Link href="/movers">Movers</Link>
                  </ListItem>
                  <ListItem
                    _hover={{ color: "grey" }}
                    onClick={() => setIsOpenDrawer(false)}
                  >
                    <Link href="/senders">Senders</Link>
                  </ListItem>
                  <ListItem
                    _hover={{ color: "grey" }}
                    onClick={() => setIsOpenDrawer(false)}
                  >
                    <Link href="/business">Business</Link>
                  </ListItem>
                  <ListItem
                    _hover={{ color: "grey" }}
                    onClick={() => setIsOpenDrawer(false)}
                  >
                    <Link href="/faq">FAQ</Link>
                  </ListItem>
                </List> */}
                <Button
                  onClick={() => {
                    setIsOpenDrawer(false);
                    setIsModalOpen(true);
                  }}
                >
                  Sign in
                </Button>

                <Button
                  onClick={() => {
                    setIsOpenDrawer(false);
                    setIsModalOpen(true);
                  }}
                >
                  Sign up
                </Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>

      <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default Navbar;
