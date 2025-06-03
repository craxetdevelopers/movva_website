"use client";

import {
  Box,
  Center,
  CircularProgress,
  Drawer,
  DrawerContent,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import TopNavbar from "./components/TopNavbar";
import { useParams, usePathname, useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname() || "";
  const router = useRouter();
  const params = useParams(); // ✅ use the hook here
  const id = params?.id;
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const bgColor = useColorModeValue("#f3f3f3", "grey 900");

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const userType =
      typeof window !== "undefined" ? localStorage.getItem("userType") : null;

    if (!token || userType !== "admin" ) {
      router.replace("/admin/auth");
    } else {
      setIsCheckingAuth(false);
    }
  }, []);

  const pageTitle = React.useMemo(() => {
    const normalizedPath = pathname?.replace(/\/$/, "");
    if (pathname === "/admin/dashboard") return "Dashboard";
    if (normalizedPath === `/admin/movvas/${id}/movva_details`)
      return "Movvas Details";
    if (normalizedPath === `/admin/senders/${id}/movva_details`)
      return "Senders Details";

    if (pathname.includes("/admin/movvas")) return "Movvas";
    if (pathname.includes("/admin/senders")) return "Senders";
    if (pathname.includes("/admin/trips")) return "Trips";
    if (pathname.includes("/admin/payouts")) return "Payouts";
    if (pathname.includes("/admin/insurance")) return "Insurance & Claims";
    if (pathname.includes("/admin/verification")) return "KYC Verification";
    if (pathname.includes("/admin/audit")) return "Audit Log";

    if (pathname.includes("/admin/setting")) return "Settings";
    return "Dashboard";
  }, [pathname, id]);

  if (isCheckingAuth && pathname == '/admin/') {
    return (
      <Center bg={'#16193A'} minH="100vh" flexDirection="column" gap={4}>
        <CircularProgress
          isIndeterminate
          color="blue.400"
          size="80px"
          thickness="8px" 
        />
        <Box fontWeight="medium" color={'#fff'} fontSize="lg">
          Checking Admin Access...
        </Box>
      </Center>
    );
  }

  return (
    <Flex minH={"100vh"} bg={bgColor}>
      <SideBar display={{ base: "none", md: "block" }} onClose={onClose} />

      {/* Drawer sidebar for mobile */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerContent>
          <SideBar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Main content */}
      <Box flex="1" ml={{ base: 0, md: 60 }}>
        <TopNavbar onOpen={onOpen} title={pageTitle} />
        <Box as="main" p={10}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
