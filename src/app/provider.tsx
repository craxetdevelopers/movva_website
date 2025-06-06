"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

// Create a client
const queryClient = new QueryClient();
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <CSSReset />
        <AuthProvider>{children}</AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
