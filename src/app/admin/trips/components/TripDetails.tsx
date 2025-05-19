"use client";

import {
  Button,
  Divider,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import ViewDetails from "./ViewDetails";
import EditTripInfo from "./EditTripInfo";
import CancelDelivery from "./CancelDelivery";
import ExportReceipt from "./ExportReceipt";
import { TripItem } from "@/types/tripTypes";

interface TripDetailsProps {
  delivery: TripItem
}

const TripDetails = ({ delivery }: TripDetailsProps) => {
  const { onClose } = useDisclosure();
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover placement="bottom-end" closeOnBlur={false} size={"2xl"}>
      <PopoverTrigger>
        <Button
          _hover={{ background: "none" }}
          bg={"none"}
          color={useColorModeValue("#000", "#fff")}
        >
          <Icon as={BsThreeDots} fontSize="lg" />
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={backgroundColor} p={5} w={"100%"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody
          display={"flex"}
          alignItems={"start"}
          gap={"20px"}
          flexDirection={"column"}
        >
          <ViewDetails onClose={onClose} delivery = {delivery}/>
          <Divider />
          <EditTripInfo />
          <Divider />
          {delivery?.status == "In transit" ? <CancelDelivery /> : <ExportReceipt />}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TripDetails;
