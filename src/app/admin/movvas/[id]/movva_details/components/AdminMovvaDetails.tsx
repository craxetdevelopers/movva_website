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
import React, { useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import MovvaProfile from "./MovvaProfile";
import DeliveryHistory from "./MovvaDeliveryHistory";
import MovvaPayoutHistory from "./MovvaPayoutHistory";
import MovvaAuditTrail from "./MovvaAuditTrail";




const AdminMovvaDetails = ({ id }: { id: number }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter()

  useEffect(() => {
    // You can load tab-specific data here
    if (tabIndex === 1) {
      console.log("Fetch delivery history for:", id);
      // fetchData(id)
    }
  }, [tabIndex, id]);

  return (
    <VStack alignItems={"start"} w={"100%"}>
      <Button
        justifyContent={"center"}
        bg={"none"}
        color={useColorModeValue("#22244E", "#fff")}
        leftIcon={<ArrowBackIcon />}
        _hover={{background: 'none'}}
        onClick={() => router.push('/admin/movvas/')}
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
            <MovvaProfile />
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
