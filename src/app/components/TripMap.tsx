"use client";

import { db } from "@/lib/firebase";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import polyline from "@mapbox/polyline";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 6.5244,
  lng: 3.3792,
};

interface Props {
  deliveryCode: string;
}

const TripMap = ({ deliveryCode }: Props) => {
    const [directionsPath, setDirectionsPath] = useState<{ lat: number; lng: number }[]>([]);
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const {
    data: driverInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["share-trip", deliveryCode],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/deliveries/${deliveryCode}`
      );

      return res?.data;
    },
    enabled: !!deliveryCode, // avoids fetching when deliveryCode is undefined
  });


  useEffect(() => {
    const fetchRouteWithRESTAPI = async () => {
      if (
        driverInfo?.pickup_latitude &&
        driverInfo?.pickup_longitude &&
        driverInfo?.dropoff_latitude &&
        driverInfo?.dropoff_longitude
      ) {
        const origin = `${driverInfo.pickup_latitude},${driverInfo.pickup_longitude}`;
        const destination = `${driverInfo.dropoff_latitude},${driverInfo.dropoff_longitude}`;
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;


        try {
            const response = await axios.get("/api/route", {
              params: {
                origin: origin,
                destination: destination,
                key: apiKey,
              },
            });
          
            console.log("Route data:", response.data);
          
            const encodedPolyline = response.data.routes[0]?.overview_polyline?.points;
          
            if (encodedPolyline) {
              const decodedPath = polyline.decode(encodedPolyline).map((point: number[]) => ({
                lat: point[0],
                lng: point[1],
              }));
          
              setDirectionsPath(decodedPath);
            }
          } catch (error) {
            console.error("Error fetching route from backend:", error);
          }
      }
    };

    fetchRouteWithRESTAPI();
  }, [driverInfo]);

  useEffect(() => {
    if (!deliveryCode) return;

    const docRef = doc(db, "deliveries", deliveryCode);

    const unsub = onSnapshot(docRef, (docSnap) => {
      console.log("Firestore snapshot triggered");

      if (!docSnap.exists()) {
        console.warn("Document does not exist:", deliveryCode);
        return;
      }
      const dataF = docSnap.data();
      console.log("Raw data from Firestore:", dataF);

      if (dataF?.location?.latitude && dataF?.location?.longitude) {
        setPosition({
          lat: dataF?.location?.latitude,
          lng: dataF?.location?.longitude,
        });
        console.log(
          "Latitude:",
          dataF?.location?.latitude,
          "Longitude:",
          dataF?.location?.longitude
        );
      } else {
        console.warn("Latitude and/or longitude missing in document data.");
      }
    });

    return () => unsub();
  }, [deliveryCode]);

  if (!isLoaded || isLoading) return <Text>Loading map...</Text>;
  if (error) return <Text>Error loading delivery info</Text>;

  return (
    <Stack w="100vw" h="100vh">
      <Box flex="1" h="100%">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={position ? 15 : 10}
          center={position || defaultCenter}
        >
          <VStack
            w="350px"
            position={"absolute"}
            bg="gray.50"
            p={6}
            align="flex-start"
            spacing={4}
            color={"#000"}
          >
            <HStack>
              <Avatar
                src={driverInfo?.sender_name}
                size={"lg"}
                name={`${driverInfo?.mover?.first_name} ${driverInfo?.mover?.last_name}`}
              />
              <VStack spacing={0} align="flex-start">
                <Text fontWeight="bold">
                  {driverInfo?.mover?.first_name} {driverInfo?.mover?.last_name}
                </Text>
                <HStack spacing={1}>
                  <Icon as={FaStar} color="yellow.400" />
                  <Text fontSize="sm">4.89</Text>
                </HStack>
              </VStack>
            </HStack>
            <Box p={"12px"} bg={"gray.300"} borderRadius={"8px"}>
              <Heading fontSize={"16px"}>MOV-{driverInfo?.mover_id}</Heading>
            </Box>

            <Box>
              <Text fontSize="sm" color="gray.600">
                Pickup
              </Text>
              <Flex mt={"6px"} gap={"6px"}>
                <Icon color={"blue"} as={FaLocationDot} fontSize="lg" />
                <Text fontWeight="medium">
                  {driverInfo?.pickup_address || "Warehouse"}
                </Text>
              </Flex>
            </Box>

            <Box>
              <Text fontSize="sm" color="gray.600">
                Destination
              </Text>
              <Flex mt={"6px"} gap={"6px"}>
                <Icon color={"#008000"} as={FaLocationDot} fontSize="lg" />
                <Text fontWeight="medium">
                  {driverInfo?.dropoff_address || "Customers location"}
                </Text>
              </Flex>
            </Box>
            <Divider border={"0.3px solid grey"} />
            <Box>
              <Text fontSize="sm" fontWeight={"semibold"}>
                ETA is{" "}
                {driverInfo?.accepted_at
                  ? dayjs(driverInfo.accepted_at).format("hh:mm A")
                  : "N/A"}
              </Text>
              <Text fontSize="xs" color="red.500">
                Driver may arrive late
              </Text>
            </Box>

            <HStack spacing={2} border={"1px solid grey"}>
              <Button m={"10px"} color={"black"} size="sm" variant="outline">
                Share
              </Button>
              <Divider
                orientation="vertical"
                height="40px"
                borderColor="gray.300"
              />
              <Button size="sm" color={"black"} variant="outline">
                Refresh
              </Button>
              <Divider
                orientation="vertical"
                height="40px"
                borderColor="gray.300"
              />
              <Button color={"black"} size="sm">
                Cancel
              </Button>
            </HStack>
          </VStack>
          {/* Route Polyline */}
          {directionsPath.length > 0 && (
            <Polyline
              path={directionsPath}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 7,
              }}
            />
          )}
          <Marker
            position={{
              lat: parseFloat(driverInfo.pickup_latitude),
              lng: parseFloat(driverInfo.pickup_longitude),
            }}
            label="Pickup"
          />
          <Marker
            position={{
              lat: parseFloat(driverInfo.dropoff_latitude),
              lng: parseFloat(driverInfo.dropoff_longitude),
            }}
            label="Dropoff"
          />

          {/* <Marker
            position={simplePath[0]} // pickup lat/lng
            icon={{
              url: "/man.png", // you can replace this with your pickup icon path
              scaledSize: new google.maps.Size(30, 30),
            }}
          />
          <Marker
            position={simplePath[1]} // destination lat/lng
            icon={{
              url: "/man.png", // existing icon for dropoff
              scaledSize: new google.maps.Size(30, 30),
            }}
          /> */}
        </GoogleMap>
      </Box>
    </Stack>
  );
};

export default TripMap;
