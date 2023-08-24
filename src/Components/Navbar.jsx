import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { bell, cart, heart, logo, search } from "../assets";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        display="flex"
        justifyContent={{ base: "space-between", sm: "space-around" }}
        flexDirection={{ base: "row", sm: "row", lg: "row" }}
        alignItems={{ base: "center", sm: "flex-start", lg: "baseline" }}
        padding="10px"
        // boxShadow="md"
      >
        {/* Search  */}
        <Box>
          <Input
            display={{ base: "none", sm: "block" }}
            _hover={{ cursor: "pointer" }}
            variant="flushed"
            size="sm"
            placeholder="Search"
            width={{ base: "10rem", sm: "15rem", lg: "15rem" }}
          />
        </Box>

        {/* Logo */}
        <Box>
          <Image
            _hover={{ cursor: "pointer" }}
            src={logo}
            alt="Logo"
            width="7rem"
            transform="scale(1.2)"
          />
        </Box>

        {/* All links */}

        <Box
          w={{ base: "10rem", sm: "14rem" }}
          display="flex"
          justifyContent="space-around"
          alignItems="baseline"
        >
          <Box display={{ sm: "none" }}>
            <Image onClick={onOpen} src={search} w={{ base: "5", md: "7" }} />

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <Avatar
            _hover={{ cursor: "pointer" }}
            size={{ base: "xs", sm: "sm" }}
            name=""
            src="https://bit.ly/dan-abramov"
          />
          <Image
            _hover={{ cursor: "pointer" }}
            src={bell}
            alt="notification"
            w={{ base: "24px", sm: "32px" }}
          />
          <Image
            _hover={{ cursor: "pointer" }}
            src={heart}
            alt="notification"
            w={{ base: "24px", sm: "32px" }}
          />
          <Image
            _hover={{ cursor: "pointer" }}
            src={cart}
            alt="notification"
            w={{ base: "24px", sm: "32px" }}
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-around" p={3}>
        <Text
          fontSize={14}
          fontFamily={"monospace"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          SELL ON PEPPERFRY
        </Text>
        <Text
          fontSize={14}
          fontFamily={"monospace"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          BECOME A FRANCHISEE
        </Text>
        <Text
          fontSize={14}
          fontFamily={"monospace"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          BUY IN BULK
        </Text>
        <Text
          fontSize={14}
          fontFamily={"monospace"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          FIND A STUDIO
        </Text>
        <Text
          fontSize={14}
          fontFamily={"monospace"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          GIFT CARDS
        </Text>
        <Text
          fontSize={14}
          fontFamily={"monospace"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          GET INSPIRED
        </Text>
        <Text
          fontSize={14}
          fontFamily={"monospace"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          TRACK YOUR ORDER
        </Text>
        <Text
          fontSize={14}
          fontFamily={"monospace"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          CONTACT US
        </Text>
      </Box>

      <Box
        backgroundColor="blackAlpha.600"
        p={2}
        color="whitesmoke"
        fontWeight="semibold"
        display="flex"
        justifyContent="space-around"
      >
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Sofa
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Sectional Sofas
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Sofa Cum Beds
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Futons
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Chaise Loungers
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Bean Bags
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Recliners
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Sofa Chairs
        </Text>
        <Text _hover={{ cursor: "pointer", textDecoration: "underline" }}>
          Chairs
        </Text>
      </Box>
    </>
  );
};

export default Navbar;
