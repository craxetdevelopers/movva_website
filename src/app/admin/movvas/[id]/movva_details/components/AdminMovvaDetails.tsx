"use client";

import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import MovvaProfile from "./MovvaProfile";
import DeliveryHistory from "./MovvaDeliveryHistory";
import MovvaPayoutHistory from "./MovvaPayoutHistory";
import MovvaAuditTrail from "./MovvaAuditTrail";
import { useQuery } from "@tanstack/react-query";
import { MovvaDeliveryResponse } from "@/types/movvaTypes";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";


const AdminMovvaDetails = ({id}: {id: string}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter()
  const { token } = useAuth();


  const { data, isError, isLoading, refetch } = useQuery<MovvaDeliveryResponse>({
    queryKey: ["movvas_table"],
    enabled: !!token,
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/user/${id}/deliveries?page=1&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res?.data);
      return res?.data;
    },
  });


  return (
    <VStack alignItems={"start"} w={"100%"}>
      <Button
        justifyContent={"center"}
        bg={"none"}
        color={useColorModeValue("#22244E", "#fff")}
        leftIcon={<ArrowBackIcon />}
        _hover={{background: 'none'}}
        onClick={() => router.back()}
      >
        Back
      </Button>

      {/* The tabs */}
      <Tabs
        my={"50px"}
        w={"100%"}
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
        isFitted
      >
        <TabList mb={'30px'} maxW={"610px"} border={"1px solid grey"} borderRadius={"8px"} w={"100%"}>
          <Tab
            fontSize={"14px"}
            fontWeight={"600"}
            border={"none"}
            py={"15px"}
            borderRadius={"8px 0px 0px 8px"}
            _selected={{ bg: "#3366FF", color: "#fff" }}
          >
            Profile
          </Tab>
          <Tab
            fontSize={"14px"}
            fontWeight={"600"}
            borderX={"0.5px solid grey"}
            py={"15px"}
            _selected={{ bg: "#3366FF", color: "#fff" }}
          >
            Delivery History
          </Tab>
          <Tab
            fontSize={"14px"}
            fontWeight={"600"}
            borderX={"0.5px solid grey"}
            py={"15px"}
            _selected={{ bg: "#3366FF", color: "#fff" }}
          >
            Payout History
          </Tab>
          <Tab
            fontSize={"14px"}
            fontWeight={"600"}
            border={"none"}
            py={"15px"}
            borderRadius={"0px 8px 8px 0px"}
            _selected={{ bg: "#3366FF", color: "#fff" }}
          >
            Audit History
          </Tab>
        </TabList>

        <TabPanels >
          <TabPanel >
            <MovvaProfile data={data?.user} isError={isError} isLoading={isLoading} refetch={refetch}/>
          </TabPanel>
          <TabPanel>
            <DeliveryHistory />
          </TabPanel>
          <TabPanel>
            <MovvaPayoutHistory />
          </TabPanel>
          <TabPanel>
            <MovvaAuditTrail />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default AdminMovvaDetails;
