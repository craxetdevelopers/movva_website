import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  Icon,
  Image,
  Text,
  Link,
  VStack,
  Divider,
} from "@chakra-ui/react";
// import React, { use } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiShield } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { AiOutlineAudit } from "react-icons/ai";
import { RiSettings2Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";


const navLinks = [
  { name: "Dashboard", icon: GrHomeRounded, href: "/admin/dashboard/" },
  { name: "Movvas", icon: FaRegUser, href: "/admin/movvas/" },
  { name: "Senders", icon: FaRegUser, href: "/admin/senders/" },
  { name: "Trips", icon: GrLocation, href: "/admin/trips/" },
  { name: "Payouts", icon: AiOutlineDollarCircle, href: "/admin/payouts/" },
  { name: "Insurance & Claims", icon: FiShield, href: "/admin/insurance/" },
  {
    name: "KYC Verification",
    icon: GoShieldCheck,
    href: "/admin/verification/",
  },
];

const SideBar = ({
  onClose,
  ...rest
}: {
  onClose?: () => void;
  [key: string]: any;
}) => {
  const {adminUser} = useAuth()
  const pathname = usePathname();

  const isActiveMenu = (path: string) => {
    return pathname === path;
  };
  return (
    <Box
      bg="#2C2F66"
      color="white"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" justifyContent="space-between" px="4">
        <Link pl={"15px"} href="/">
          <Image src="/admin/logo.svg" alt="logo" />
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <VStack justifyContent={"space-between"} alignItems={"start"} h={"70vh"}>
        <VStack align="stretch" spacing={1} px={4} mt={4}>
          {navLinks.map((link) => (
            <NavItem key={link.name} icon={link.icon} href={link.href}>
              {link.name}
            </NavItem>
          ))}
        </VStack>
        <Divider />
        <VStack alignItems={"start"} px={4}>
          <Link
            href={"/admin/audit/"}
            display="flex"
            alignItems="center"
            gap="3"
            color={isActiveMenu("/admin/audit/")? "#17D1C6" : "#98A2B3"}
            px="3"
            py="2"
            bg={isActiveMenu("/admin/audit/")? '#98A2B933' : ''}
            borderRadius="md"
            _hover={{ bg: "gray.700", color: "#17D1C6", textDecoration: "none" }}
          >
            <Icon as={AiOutlineAudit} fontSize="lg" />
            <Text>Audit Logs</Text>
          </Link>
          <Link
            href={"/admin/setting/"}
            display="flex"
            alignItems="center"
            gap="3"
            color={isActiveMenu("/admin/setting/")? "#17D1C6" : "#98A2B3"}
            px="3"
            py="2"
            bg={isActiveMenu("/admin/setting/")? '#98A2B933' : ''}
            borderRadius="md"
            _hover={{ bg: "gray.700", color: "#17D1C6", textDecoration: "none" }}
          >
            <Icon as={RiSettings2Line} fontSize="lg" />
            <Text>Settings</Text>
          </Link>
        </VStack>
      </VStack>
      <VStack alignItems={"start"} px={4} pt={"62px"}>
        <Flex gap={"10px"}>
          <Avatar size="sm" name={`${adminUser?.first_name} ${adminUser?.last_name}`} />
          <VStack alignItems={"start"} gap={"0px"}>
            <Text>{adminUser?.first_name} {adminUser?.last_name}</Text>
            <Text color={"#98A2B3"}>{adminUser?.email}</Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default SideBar;

function NavItem({
  icon,
  children,
  href,
}: {
  icon: any;
  children: React.ReactNode;
  href: string;
}) {

    const pathname = usePathname();

  // Check for the active menu
  const isActiveMenu = (path: string) => {
    return pathname === path;
  };
  return (

    <Link
      href={href}
      display="flex"
      alignItems="center"
      gap="3"
      color={isActiveMenu(href)? "#17D1C6" : "#98A2B3"}
      px="3"
      py="2"
      bg={isActiveMenu(href)? '#98A2B933' : ''}
      borderRadius="md"
      _hover={{ bg: "gray.700", color: "#17D1C6", textDecoration: "none" }}
    >
      <Icon as={icon} fontSize="lg" />
      <Text>{children}</Text>
    </Link>
  );
}
