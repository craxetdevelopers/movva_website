"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Center, CircularProgress, Box } from "@chakra-ui/react";

const AdminRootRedirect = () => {
    const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const userType = typeof window !== "undefined" ? localStorage.getItem("userType") : null;

    if (token && userType === "admin" ) {
      router.replace("/admin/dashboard");
    } else if (!token && userType !== "admin" || pathname == '/admin/dashboard/') {
        return router.replace("/admin/auth/");
    } else {
      router.replace("/admin/auth/");
    }
  }, []);

  return (
    <Center bg="#16193A" minH="100vh" flexDirection="column" gap={4}>
      <CircularProgress isIndeterminate color="blue.400" size="80px" thickness="8px" />
      <Box fontWeight="medium" fontSize="lg" color={'#fff'}>
        Redirecting...
      </Box>
    </Center>
  );
};

export default AdminRootRedirect;
