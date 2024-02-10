import React from "react";
import Navbar from "./Navbar";
import { Avatar, Heading } from "@chakra-ui/react";
import { VStack,Box, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreen";

const LandingSection = () => {
  return (
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={9}>
      <VStack spacing={2}>
        {/* <Avatar name="Pete" src="https://i.pravatar.cc/150?img=2" size="2xl"/> */}
        <Heading size="s">125</Heading>
      </VStack>
      <Heading size="2xl">7689</Heading>
      <Heading size="2xl">767</Heading>
    </VStack>

  </FullScreenSection>
  //   <FullScreenSection
  //
  // >
  //   <VStack spacing={9}>
  //     <VStack spacing={2}>
  //       <Heading size="s">34567</Heading>
  //     </VStack>
  //     <Heading size="2xl">345678</Heading>
  //     <Heading size="2xl">fgchvj7</Heading>
  //   </VStack>


  );
};

export default LandingSection;
