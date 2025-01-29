"use client";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { postRequest } from "../helpers";

const LOCATIONIQ_API_KEY = "pk.de23e762aa8af882acf38d8812cfb4fc";

const AboutUs = () => {
  const router = useRouter();
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [pickupLat, setPickupLat] = useState<number | null>(null);
  const [pickupLng, setPickupLng] = useState<number | null>(null);
  const [dropoffLat, setDropoffLat] = useState<number | null>(null);
  const [dropoffLng, setDropoffLng] = useState<number | null>(null);
  const [suggestionsPick, setSuggestionsPick] = useState<any[]>([]);
  const [suggestionsDrop, setSuggestionsDrop] = useState<any[]>([]);
  const [quote, setQuote] = useState<number | null>(0);

  //  Function to fetch address fron OpenStreetMap
  const fetchAddressSuggestion = async (query: string) => {
    try {
      const res = await axios.get(
        `https://api.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${query}&limit=5&countrycodes=NG&format=json&viewbox=2.573,6.393,3.757,6.702&bounded=1`
      );
      console.log(res.data);
      return res?.data || [];
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
      return [];
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      if (!pickupLat || !pickupLng || !dropoffLat || !dropoffLng) {
        throw new Error("Please select valid locations");
      }
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/calculate-price`,
        {
          pickupLat,
          pickupLng,
          dropoffLat,
          dropoffLng,
        }
      );
      console.log(response.data);
      setDropoffAddress("");
      setPickupAddress("");
      return response.data;
    },
    onSuccess: (data) => {
      setQuote(data.estimate);
    },
    onError: (err) => {
      console.error("Error fetching data", err);
    },
  });

  // Handling the change of the addresses
  const handlePickupAddressChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = e.target.value;
    setPickupAddress(query);

    if (query.length > 2) {
      setTimeout(async () => {
        const suggestions = await fetchAddressSuggestion(query);
        setSuggestionsPick(suggestions);
      }, 300); // Debounce API calls to avoid excessive requests
    } else {
      setSuggestionsPick([]);
    }
  };

  const handleDropoffAddressChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = e.target.value;
    setDropoffAddress(query);

    if (query.length > 2) {
      setTimeout(async () => {
        const suggestions = await fetchAddressSuggestion(query);
        setSuggestionsDrop(suggestions);
      }, 300);
    } else {
      setSuggestionsDrop([]);
    }
  };

  // Handles the picking of suggestion
  const handleSuggestionClick = (suggestion: any, isPickup: boolean) => {
    if (isPickup) {
      setPickupAddress(suggestion.display_name);
      setPickupLat(parseFloat(suggestion.lat));
      setPickupLng(parseFloat(suggestion.lon));
      setSuggestionsPick([]);
    } else {
      setDropoffAddress(suggestion.display_name);
      setDropoffLat(parseFloat(suggestion.lat));
      setDropoffLng(parseFloat(suggestion.lon));
      setSuggestionsDrop([]);
    }
  };

  return (
    <Box
      h="auto"
      w="100%"
      backgroundImage="url('/landingpage/abt-us-bg.png')"
      backgroundPosition=""
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        px={["1rem", "2rem", "2rem", "2rem", "0"]}
        py={["1rem", "2rem", "4.5rem", "6.5rem"]}
      >
        <Flex
          width="100%"
          maxW={"1249px"}
          mx="auto"
          justifyContent={"space-between"}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "40px", lg: "0px" }}
        >
          <VStack
            alignItems={{ base: "center", lg: "start" }}
            display={{ base: "none", lg: "block" }}
          >
            <Heading
              sx={{
                color: "transparent",
                backgroundClip: "text",
                WebkitTextStroke: "0.7px rgba(255, 255, 255, 0.5)",
                WebkitTextFillColor: "transparent",
              }}
              bg={"transparent"}
              opacity={"0.2"}
              fontSize={{ base: "38px", md: "70px", lg: "104px" }}
            >
              About us
            </Heading>
            <Heading
              color={"#FFFFFF"}
              fontWeight={"700"}
              w={{ base: "100%", lg: "400px" }}
              fontSize={{ base: "28px", md: "35px", lg: "52px" }}
              textAlign={{ base: "center", lg: "start" }}
            >
              Revolutionizing Last Mile Delivery, One Mover at a Time.
            </Heading>
            <Button
              mt={"50px"}
              p={"30px 25px"}
              bg={"#17D1C6"}
              borderRadius={"100px"}
              color={"#22244E"}
              onClick={() => router.push("/about")}
            >
              {" "}
              About us
            </Button>
          </VStack>
          <VStack>
            <VStack
              w={{ base: "100%", md: "538px" }}
              bg={"#22244E"}
              h={"auto"}
              borderRadius={"15px"}
              p={"30px"}
              alignItems={"start"}
            >
              <Heading
                fontSize={{ base: "26px", lg: "36px" }}
                fontWeight={"600"}
                color={"#fff"}
              >
                Get a Quick Quote
              </Heading>
              <Divider borderColor={"#17D1C6"} pt={"10px"} />
              <form style={{ width: "100%" }}>
                <VStack w={"100%"} gap={"30px"} pt={"30px"}>
                  <FormControl>
                    <FormLabel fontSize={"22px"} color={"#fff"}>
                      Pickup Location
                    </FormLabel>
                    <InputGroup>
                      <InputRightElement>
                        <Box pt={"8px"}>
                          <Image src="landingpage/map-location.png" alt="" />
                        </Box>
                      </InputRightElement>
                      <Input
                        type="text"
                        name=""
                        placeholder="Enter pickup location"
                        _placeholder={{ color: "#848484" }}
                        bg={"#fff"}
                        py={"25px"}
                        value={pickupAddress}
                        onChange={(e) => handlePickupAddressChange(e)}
                      />
                    </InputGroup>
                    {suggestionsPick.length > 0 && (
                      <Box
                        maxHeight="200px"
                        overflowY="auto"
                        bg="white"
                        position="absolute"
                        width="100%"
                        boxShadow="lg"
                        zIndex={1}
                      >
                        <List spacing={1} mt={2}>
                          {suggestionsPick.map((suggestion) => (
                            <ListItem
                              key={suggestion.place_id}
                              cursor="pointer"
                              onClick={() =>
                                handleSuggestionClick(suggestion, true)
                              }
                              p={2}
                              _hover={{ bg: "#f0f0f0" }}
                            >
                              {suggestion.display_name}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={"22px"} color={"#fff"}>
                      Drop off Location
                    </FormLabel>
                    <InputGroup>
                      <InputRightElement>
                        <Box pt={"8px"}>
                          <Image src="landingpage/map-location.png" alt="" />
                        </Box>
                      </InputRightElement>
                      <Input
                        type="text"
                        name=""
                        placeholder="Enter drop-off location"
                        _placeholder={{ color: "#848484" }}
                        bg={"#fff"}
                        py={"25px"}
                        value={dropoffAddress}
                        onChange={(e) => handleDropoffAddressChange(e)}
                      />
                    </InputGroup>
                    {suggestionsDrop.length > 0 && (
                      <Box
                        maxHeight="200px"
                        overflowY="auto"
                        bg="white"
                        position="absolute"
                        width="100%"
                        boxShadow="lg"
                        zIndex={1}
                      >
                        <List spacing={1} mt={2}>
                          {suggestionsDrop.map((suggestion) => (
                            <ListItem
                              key={suggestion.place_id}
                              cursor="pointer"
                              onClick={() =>
                                handleSuggestionClick(suggestion, false)
                              }
                              p={2}
                              _hover={{ bg: "#f0f0f0" }}
                            >
                              {suggestion.display_name}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </FormControl>
                  {/* <FormControl>
                    <FormLabel fontSize={"22px"} color={"#fff"}>
                      Preferred type
                    </FormLabel>
                    <CheckboxGroup
                      colorScheme="green"
                      defaultValue={["any", "bicycle"]}
                    >
                      <Flex
                        flexWrap={"wrap"}
                        color={"#fff"}
                        gap={"20px"}
                        w={"100%"}
                      >
                        <Checkbox
                          value="any"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          Any
                        </Checkbox>
                        <Checkbox
                          value="bicycle"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          Bicycle
                        </Checkbox>
                        <Checkbox
                          value="on-foot"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          On foot
                        </Checkbox>
                        <Checkbox
                          value="public-transport"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          Public transport
                        </Checkbox>
                        <Checkbox
                          value="dispatch-rider"
                          sx={{
                            "& .chakra-checkbox__control": {
                              borderColor: "#17D1C6",
                              borderWidth: "2px",
                              _checked: {
                                bg: "#fff",
                                color: "#17D1C6",
                              },
                            },
                          }}
                        >
                          Dispatch rider
                        </Checkbox>
                      </Flex>
                    </CheckboxGroup>
                  </FormControl> */}
                  <VStack mt={"5px"} alignItems={"start"} w={"100%"}>
                    <Button
                      p={"23px 60px"}
                      bg={"#FF7D6A"}
                      borderRadius={"7px"}
                      color={"#fff"}
                      fontSize={"18px"}
                      fontWeight={"600"}
                      isDisabled={!pickupAddress && !dropoffAddress}
                      onClick={() => mutate()}
                      isLoading={isPending}
                    >
                      {" "}
                      Get quote
                    </Button>
                  </VStack>
                </VStack>
              </form>
              <Divider borderColor={"#17D1C6"} pt={"10px"} />
              {quote !== null && (
                <VStack>
                  <Text fontSize={{ base: "35px", lg: "50px" }} color={"#fff"}>
                    {quote}
                  </Text>
                </VStack>
              )}

              <Divider borderColor={"#17D1C6"} pt={"10px"} />
              <Text color={"#fff"} fontSize={"10px"}>
                This is just an estimated cost for your delivery. Actual price
                may vary after requesting a movva
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
