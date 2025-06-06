"use client";

import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import {
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import LiveInsured from "./components/liveInsuredComponent/LiveInsured";
import InsuredPremium from "./components/insuredPremiumComponent/InsuredPremium";
import ReportedClaims from "./components/reportedClaims/ReportedClaims";

const AdminInsurance = () => {
  //
  const [tabIndex, setTabIndex] = useState(0);
  // const router = useRouter();
  return (
    <DashboardLayout>
      <Stack w={"100%"}>
        {/* The tabs */}
        <Tabs
          my={"50px"}
          w={"100%"}
          index={tabIndex}
          onChange={(index) => setTabIndex(index)}
          isFitted
        >
          <TabList
            mb={"30px"}
            maxW={"850px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            w={"100%"}
          >
            <Tab
              fontSize={"14px"}
              fontWeight={"600"}
              border={"none"}
              py={"10px"}
              borderRadius={"8px 0px 0px 8px"}
              _selected={{ bg: "#3366FF", color: "#fff" }}
            >
              Live Insured Deliveries
            </Tab>
            <Tab
              fontSize={"14px"}
              fontWeight={"600"}
              borderX={"0.5px solid grey"}
              py={"15px"}
              _selected={{ bg: "#3366FF", color: "#fff" }}
            >
              Insured Items & Premiums
            </Tab>
            <Tab
              fontSize={"14px"}
              fontWeight={"600"}
              borderX={"0.5px solid grey"}
              py={"15px"}
              _selected={{ bg: "#3366FF", color: "#fff" }}
            >
              Reported Claims
            </Tab>
            <Tab
              fontSize={"14px"}
              fontWeight={"600"}
              border={"none"}
              py={"10px"}
              borderRadius={"0px 8px 8px 0px"}
              _selected={{ bg: "#3366FF", color: "#fff" }}
            >
              Pay-U Deposits
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <LiveInsured />
            </TabPanel>
            <TabPanel>
              <InsuredPremium />
            </TabPanel>
            <TabPanel>
              <ReportedClaims />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </DashboardLayout>
  );
};

export default AdminInsurance;
