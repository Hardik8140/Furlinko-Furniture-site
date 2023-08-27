import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteCartItem,
  increaseQuantity,
} from "../Redux/Cart/action";
import { FcOk } from "react-icons/fc";
import { addToWishlist } from "../Redux/Wishlist/action";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const isAuth = useSelector((store) => store.loginReducer.isAuth);
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleMoveToWishlist = (itemId) => {
    const itemToMove = cartItems.find((item) => item.id === itemId);
    dispatch(deleteCartItem(itemId));
    dispatch(addToWishlist(itemToMove));
  };

  const handleLogin = () => {
    navigate("/login", { state: { from: location } });
    // <Navigate state={location.pathname} to="/login" replace={true} />;
  };
  console.log(location);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Center>
        <Box w="70%" mt={9} mb={9}>
          <Heading as="h3" size="lg">
            Your Cart ({cartItems.length} Items)
          </Heading>
        </Box>
      </Center>
      {/* // outer box */}
      <Center>
        {cartItems.map((el) => (
          <SimpleGrid
            key={el.id}
            columns={{ base: "1", sm: "1", md: "2" }}
            gap={6}
            w={{ base: "80%", sm: "80%", md: "80%", lg: "70%" }}
          >
            <Box display="flex" gap={5}>
              <Box border="1px solid lightgray" display="flex" gap={4}>
                <Box w="40%" p={5}>
                  <Image src={el.image} mb={5} />
                  <Button
                    w="100%"
                    mb={5}
                    border="1px solid lightgray"
                    backgroundColor="white"
                    _hover={{ backgroundColor: "lightgray" }}
                    onClick={() => handleMoveToWishlist(el.id)}
                  >
                    Move to Wishlist
                  </Button>
                  <Button
                    w="100%"
                    border="1px solid lightgray"
                    backgroundColor="white"
                    _hover={{ backgroundColor: "lightgray" }}
                    onClick={() => handleDeleteItem(el.id)}
                  >
                    Delete
                  </Button>
                </Box>

                <Box>
                  <Text pt={3} pb={3}>
                    {el.title}
                  </Text>

                  <Box w="80%" display="flex" gap={3} mb={4}>
                    <Button
                      border="1px solid lightgray"
                      backgroundColor="white"
                      _hover={{ backgroundColor: "lightgray" }}
                      onClick={() => handleIncreaseQuantity(el.id)}
                    >
                      +
                    </Button>
                    <Button
                      // border="1px solid lightgray"
                      backgroundColor="white"
                      _hover={{ backgroundColor: "lightgray" }}
                    >
                      {el.quantity}
                    </Button>
                    <Button
                      border="1px solid lightgray"
                      backgroundColor="white"
                      _hover={{ backgroundColor: "lightgray" }}
                      onClick={() => handleDecreaseQuantity(el.id)}
                    >
                      -
                    </Button>
                  </Box>

                  <Box w="70%">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      pt={1}
                      pb={1}
                    >
                      <Text>MRP</Text>
                      <Text>₹{totalPrice}</Text>
                    </Box>
                    <Divider />

                    <Box
                      display="flex"
                      justifyContent="space-between"
                      pt={1}
                      pb={1}
                    >
                      <Text>ITEM PRICE</Text>
                      <Text>₹{totalPrice}</Text>
                    </Box>
                    <Divider />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box border="1px solid lightgray" p={6} key={el.id}>
              {/* {cartItems.map((el) => ( */}
              <>
                <Heading as="h3" size="lg" pb={3} textAlign="center">
                  Cart Summary
                </Heading>

                <Box display="flex" justifyContent="space-between">
                  <Text pb={1}>Items In Cart</Text>
                  <Text pb={1}>{totalQuantity}</Text>
                </Box>
                <Divider />

                <Box display="flex" justifyContent="space-between">
                  <Text pb={2} pt={2}>
                    Cart Total Price
                  </Text>
                  <Text pb={2} pt={2}>
                    ₹{totalPrice}
                  </Text>
                </Box>
                <Divider />

                <Box display="flex" justifyContent="space-between">
                  <Heading as="h3" size="md" pb={1}>
                    YOU PAY (Inclusive of All Taxes)
                  </Heading>
                  <Text pb={4} pt={4}>
                    ₹{totalPrice}
                  </Text>
                </Box>
                <Divider />

                <Center>
                  {isAuth ? (
                    <Button mt={8} onClick={handleCheckout}>
                      Proceed To Checkout
                    </Button>
                  ) : (
                    <Button mt={8} onClick={handleLogin}>
                      Login to Proceed
                    </Button>
                  )}
                </Center>
              </>
            </Box>
          </SimpleGrid>
        ))}
      </Center>
    </>
  );
};

export default Cart;
