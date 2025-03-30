"use client";

import { useEffect, useRef, useState } from "react";

import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { Box, Text } from "@chakra-ui/react";
import Lottie from "lottie-web";
import animationData from "../../public/walking.json";
import { gsap } from "gsap";
import KeyBenefit from "./components/KeyBenefit";
import GetPaid from "./components/GetPaid";
import HowItWorks from "./components/HowItWorks";
import MoveThings from "./components/MoveThings";
import WhyMovva from "./components/WhyMovva";
import BusinessMovva from "./components/BusinessMovva";
import WhyBusinessMovva from "./components/WhyBusinessMovva";
import Movements from "./components/Movements";
import FaqSec from "./components/FaqSec";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);

  const animationContainer = useRef<HTMLDivElement | null>(null);
  const animationWrapper = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<(HTMLParagraphElement | null)[]>([]); // ✅ Holds all letter refs
  const lottieInstance = useRef<any>(null);

  // For the start page animation
  useEffect(() => {
    const lastShown = localStorage.getItem("lastAnimationTime");
    const now = Date.now();
    const twelveHours = 12 * 60 * 60 * 1000;

    if (lastShown && now - parseInt(lastShown, 10) < twelveHours) {
      // If the animation is shown within the last 12 hours, skip it
      setShowLanding(true);
      return;
    }

    // Store the current timestamp to prevent animation from showing again within 12 hours
    localStorage.setItem("lastAnimationTime", now.toString());
    setShowLanding(false);

    if (!animationContainer.current || !animationWrapper.current) return;

    // ✅ Load Lottie animation
    lottieInstance.current = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    setTimeout(() => {
      if (!animationWrapper.current) return;

      // ✅ Initial animation setup
      gsap.set(animationWrapper.current, { x: "-50vw" });

      lettersRef.current.forEach((letter) => {
        if (letter) gsap.set(letter, { opacity: 0, scale: 0.8 });
      });

      gsap.to(animationWrapper.current, {
        x: "20vw",
        duration: 7,
        ease: "linear",
        onUpdate: function () {
          lettersRef.current.forEach((letter, index) => {
            if (letter) {
              gsap.to(letter, {
                opacity: 1,
                scale: 1.2,
                duration: 0.5,
                delay: index * 0.2, // ✅ Ensures letters appear sequentially
              });
            }
          });
        },
        onComplete: () => {
          gsap.to("#animation-text", { opacity: 1, duration: 3 });

          setTimeout(() => {
            gsap.to(animationWrapper.current, {
              // opacity: 0,
              x: "100vw",
              duration: 7,
              ease: "power9.inOut",
              // onComplete: () => setShowLanding(true),
            });
            setTimeout(() => setShowLanding(true), 5000);
          }, 1500);
        },
      });
    }, 0);

    return () => {
      lottieInstance.current?.destroy();
    };
  }, []);

  return (
    <div>
      {!showLanding && (
        <Box
          id="animation-wrapper"
          ref={animationWrapper}
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="#ffffff"
          zIndex="999"
        >
          <Box
            id="animation-container"
            ref={animationContainer}
            width="25%"
            position="absolute"
          />

          {/* MOVVA Text */}
          <Box
            id="animation-text"
            position="absolute"
            left="10%"
            display="flex"
            gap="10px"
          >
            {["M", "O", "V", "V", "A"].map((letter, index) => (
              <Text
                key={index}
                ref={(el) => {
                  if (el) lettersRef.current[index] = el; // ✅ Properly stores letter refs
                }}
                fontSize={{ base: "6xl", lg: "8xl" }}
                fontWeight="900"
                color="#22244E"
                textTransform="uppercase"
                opacity="0"
                transform="scale(0.8)"
              >
                {letter}
              </Text>
            ))}
          </Box>
        </Box>
      )}

      {showLanding && (
        <Box bg="#FFFFFF" w="100%" h="auto">
          <Navbar />
          <HeroSection />
          <AboutUs />
          <KeyBenefit />
          <GetPaid />
          <HowItWorks />
          <MoveThings />
          <WhyMovva />
          <BusinessMovva />
          <WhyBusinessMovva />
          <Movements />
          <FaqSec />
          <Footer />
        </Box>
      )}
    </div>
  );
}
