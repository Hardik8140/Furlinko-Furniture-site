import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { bell, cart, heart, logo, search } from "../assets";
import {
  useNavigate,
  useSearchParams,
  Link as NewLink,
} from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/authReducer/action";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { isAuth, users } = useSelector((store) => {
    return {
      isAuth: store.loginReducer.isAuth,
      users: store.loginReducer.users,
    };
  }, shallowEqual);

  // const [category, setCategory] = useState(
  //   searchParams.getAll("category") || ""
  // );
  const navigate = useNavigate();

  // const handleLinkClick = (category) => {
  //   setCategory(category);
  //   setSearchParams({ category: category });
  //   navigate(`/products/${category}`);
  // };

  // useEffect(() => {
  //   let params = {
  //     category,
  //   };
  //   setSearchParams(params);
  // }, [category]);

  const handleLinkClick = () => {
    navigate("/products");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box
        display="flex"
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "space-between",
          lg: "space-around",
        }}
        flexDirection={{ base: "row", sm: "row", lg: "row" }}
        alignItems={{ base: "center", sm: "flex-start", lg: "baseline" }}
        p="10px"
        // boxShadow="md"
      >
        {/* Hamburger */}
        <Box display={{ base: "block", sm: "block", md: "block", lg: "none" }}>
          <HamburgerIcon ref={btnRef} colorScheme="teal" onClick={onDrawerOpen}>
            Open
          </HamburgerIcon>
          <Drawer
            isOpen={isDrawerOpen}
            placement="left"
            onClose={onDrawerClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader textDecoration="underline">
                Select Product category
              </DrawerHeader>
              <DrawerCloseButton />
              <DrawerBody>
                <Box
                  backgroundColor="blackAlpha.700"
                  p={2}
                  color="whitesmoke"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="space-around"
                >
                  <Link
                    to={`/products`}
                    // onClick={() => handleLinkClick("Sofa")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {/* Sofa */}
                    Furniture
                  </Link>
                  <Link
                    to={`/products`}
                    // to={`/products/Sectional Sofas`}
                    // onClick={() => handleLinkClick("Sectional Sofas")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {/* Sectional Sofas */}
                    Sofas & Seating
                  </Link>
                  <Link
                    to={`/products/Sofa Cum Beds`}
                    onClick={() => handleLinkClick("Sofa Cum Beds")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {/* Sofa Cum Beds */}
                    Mattresses
                  </Link>
                  <Link
                    to={`/products/Futons`}
                    onClick={() => handleLinkClick("Futons")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {/* Futons */}
                    Home Decor
                  </Link>
                  <Link
                    to={`/products/Chaise Loungers`}
                    onClick={() => handleLinkClick("Chaise Loungers")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {/* Chaise Loungers */}
                    Furnishings
                  </Link>
                  <Link
                    to={`/products/Bean Bags`}
                    onClick={() => handleLinkClick("Bean Bags")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {/* Bean Bags */}Kitchen & Dining
                  </Link>
                  <Link
                    to={`/products/Recliners`}
                    onClick={() => handleLinkClick("Recliners")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {/* Recliners */}Lamps & Lighting
                  </Link>
                  <Link
                    to={`/products/Gaming Chairs`}
                    onClick={() => handleLinkClick("Gaming Chairs")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {/* Gaming Chairs */}Home Utility
                  </Link>
                  <Link
                    to={`/products/Chairs`}
                    onClick={() => handleLinkClick("Chairs")}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    {/* Chairs */}Appliances
                  </Link>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

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
          <NewLink to="/">
            <Image
              _hover={{ cursor: "pointer" }}
              src={logo}
              alt="Logo"
              width={{ base: "7rem", sm: "7rem" }}
              transform="scale(1.2)"
            />
          </NewLink>
        </Box>

        {/* All links */}

        <Box
          w={{ base: "12rem", sm: "14rem" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display={{ sm: "none" }}>
            <Image onClick={onOpen} src={search} w={{ base: "7", md: "7" }} />

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
          {isAuth ? (
            <>
              <Avatar name={users.name} src="" size="sm" />
              <Button onClick={handleLogout} size="sm">
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
          <Tooltip label="Notification">
            <NewLink to="/notification">
              <Image
                _hover={{ cursor: "pointer" }}
                src={bell}
                alt="notification"
                w={{ base: "24px", sm: "32px" }}
              />
            </NewLink>
          </Tooltip>

          <Tooltip label="Wishlist">
            <NewLink to="/wishlist">
              <Image
                _hover={{ cursor: "pointer" }}
                src={heart}
                alt="notification"
                w={{ base: "24px", sm: "32px" }}
              />
            </NewLink>
          </Tooltip>

          <Tooltip label="Cart">
            <NewLink to="/cart">
              <Image
                _hover={{ cursor: "pointer" }}
                src={cart}
                alt="notification"
                w={{ base: "24px", sm: "32px" }}
              />
            </NewLink>
          </Tooltip>
        </Box>
      </Box>

      <Box display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
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
          backgroundColor="blackAlpha.700"
          p={2}
          color="whitesmoke"
          fontWeight="semibold"
          display="flex"
          justifyContent="space-around"
        >
          <Link
            to={`/products`}
            onClick={handleLinkClick}
            // onClick={() => handleLinkClick("Sofa")}
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
          >
            {/* Sofa */}
            Furniture
          </Link>
          <Link
            to={`/products`}
            onClick={handleLinkClick}
            // to={`/products/Sectional Sofas`}
            // onClick={() => handleLinkClick("Sectional Sofas")}
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
          >
            {/* Sectional Sofas */}
            Sofas & Seating
          </Link>
          <Link
            to={`/products/Sofa Cum Beds`}
            onClick={handleLinkClick}
            // onClick={() => handleLinkClick("Sofa Cum Beds")}
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
          >
            {/* Sofa Cum Beds */}
            Mattresses
          </Link>
          <Link
            to={`/products/Futons`}
            onClick={handleLinkClick}
            // onClick={() => handleLinkClick("Futons")}
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
          >
            {/* Futons */}
            Home Decor
          </Link>
          <Link
            to={`/products/Chaise Loungers`}
            onClick={handleLinkClick}
            // onClick={() => handleLinkClick("Chaise Loungers")}
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
          >
            {/* Chaise Loungers */}
            Furnishings
          </Link>
          <Link
            to={`/products/Bean Bags`}
            onClick={handleLinkClick}
            // onClick={() => handleLinkClick("Bean Bags")}
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
          >
            {/* Bean Bags */}Kitchen & Dining
          </Link>
          <Link
            to={`/products/Recliners`}
            onClick={handleLinkClick}
            // onClick={() => handleLinkClick("Recliners")}
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
          >
            {/* Recliners */}Lamps & Lighting
          </Link>
          <Link
            to={`/products/Gaming Chairs`}
            onClick={handleLinkClick}
            // onClick={() => handleLinkClick("Gaming Chairs")}
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
          >
            {/* Gaming Chairs */}Home Utility
          </Link>
          <Link
            to={`/products/Chairs`}
            onClick={handleLinkClick}
            // onClick={() => handleLinkClick("Chairs")}
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {/* Chairs */}Appliances
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
