import {
  Box,
  Center,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const isAuth = useSelector((store) => store.loginReducer.isAuth);
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <Center>
      <Box w="80%" mt={6}>
        <Box mb={6}>
          <Heading as="h3" size="md">
            Choose Payment Method
          </Heading>
        </Box>

        <SimpleGrid columns={2} gap={7}>
          <Box border="1px solid lightgray" p={4} mb={10}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      pt={2}
                      pb={2}
                      as="span"
                      flex="1"
                      textAlign="left"
                      display="flex"
                      //   border="1px solid red"
                      alignItems="center"
                    >
                      <Image src="https://ii3.pepperfry.com/assets/w22-payment-credit-card.svg" />{" "}
                      <Text
                        pl={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="gray.600"
                      >
                        Credit Card
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} backgroundColor="gray.50">
                  <Box w="80%" mt={3}>
                    <Input
                      backgroundColor="white"
                      border="1px solid lightgray"
                      placeholder="Card Number"
                      p={2}
                    />

                    <Box
                      display="flex"
                      justifyContent="space-between"
                      gap={3}
                      mt={3}
                    >
                      <Input
                        backgroundColor="white"
                        border="1px solid lightgray"
                        placeholder="Valid Thru (MM/YY)"
                        p={2}
                      />
                      <Input
                        backgroundColor="white"
                        border="1px solid lightgray"
                        placeholder="CVV"
                        p={2}
                      />
                    </Box>

                    <Input
                      mt={3}
                      backgroundColor="white"
                      border="1px solid lightgray"
                      placeholder="Name on Card"
                      p={2}
                    />
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      pt={2}
                      pb={2}
                      as="span"
                      flex="1"
                      textAlign="left"
                      display="flex"
                      //   border="1px solid red"
                      alignItems="center"
                    >
                      <Image src="https://ii3.pepperfry.com/assets/w22-payment-credit-card.svg" />{" "}
                      <Text
                        pl={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="gray.600"
                      >
                        ATM/Debit Card{" "}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} backgroundColor="gray.50">
                  <Box w="80%" mt={3}>
                    <Input
                      backgroundColor="white"
                      border="1px solid lightgray"
                      placeholder="Card Number"
                      p={2}
                    />

                    <Box
                      display="flex"
                      justifyContent="space-between"
                      gap={3}
                      mt={3}
                    >
                      <Input
                        backgroundColor="white"
                        border="1px solid lightgray"
                        placeholder="Valid Thru (MM/YY)"
                        p={2}
                      />
                      <Input
                        backgroundColor="white"
                        border="1px solid lightgray"
                        placeholder="CVV"
                        p={2}
                      />
                    </Box>

                    <Input
                      mt={3}
                      backgroundColor="white"
                      border="1px solid lightgray"
                      placeholder="Name on Card"
                      p={2}
                    />
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      pt={2}
                      pb={2}
                      as="span"
                      flex="1"
                      textAlign="left"
                      display="flex"
                      //   border="1px solid red"
                      alignItems="center"
                    >
                      <Image src="https://ii3.pepperfry.com/assets/w22-payment-upi.svg" />{" "}
                      <Text
                        pl={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="gray.600"
                      >
                        UPI{" "}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} backgroundColor="gray.50">
                  <Box w="80%" mt={3}>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        placeholder="Enter UPI ID"
                        backgroundColor="white"
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          color="gray"
                          backgroundColor="white"
                          _hover={{ backgroundColor: "white" }}
                        >
                          Verify
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <Divider />

                    <Text
                      display="flex"
                      justifyContent="space-between"
                      fontSize="lg"
                      mt={4}
                    >
                      Supported Apps{" "}
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-gpay1.png"
                      />{" "}
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-phonepe1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-bhim1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-paytm1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii3.pepperfry.com/assets/w23-amz-pay-18-may.png"
                      />
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      pt={2}
                      pb={2}
                      as="span"
                      flex="1"
                      textAlign="left"
                      display="flex"
                      //   border="1px solid red"
                      alignItems="center"
                    >
                      <Image src="https://ii1.pepperfry.com/assets/w22-payment-banking-net.svg" />{" "}
                      <Text
                        pl={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="gray.600"
                      >
                        Internet Banking{" "}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} backgroundColor="gray.50">
                  <Box w="80%" mt={3}>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        placeholder="Enter UPI ID"
                        backgroundColor="white"
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          color="gray"
                          backgroundColor="white"
                          _hover={{ backgroundColor: "white" }}
                        >
                          Verify
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <Divider />

                    <Text
                      display="flex"
                      justifyContent="space-between"
                      fontSize="lg"
                      mt={4}
                    >
                      Supported Apps{" "}
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-gpay1.png"
                      />{" "}
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-phonepe1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-bhim1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-paytm1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii3.pepperfry.com/assets/w23-amz-pay-18-may.png"
                      />
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      pt={2}
                      pb={2}
                      as="span"
                      flex="1"
                      textAlign="left"
                      display="flex"
                      //   border="1px solid red"
                      alignItems="center"
                    >
                      <Image src="https://ii3.pepperfry.com/assets/w22-payment-emi.svg" />{" "}
                      <Text
                        pl={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="gray.600"
                      >
                        EMI{" "}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} backgroundColor="gray.50">
                  <Box w="80%" mt={3}>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        placeholder="Enter UPI ID"
                        backgroundColor="white"
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          color="gray"
                          backgroundColor="white"
                          _hover={{ backgroundColor: "white" }}
                        >
                          Verify
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <Divider />

                    <Text
                      display="flex"
                      justifyContent="space-between"
                      fontSize="lg"
                      mt={4}
                    >
                      Supported Apps{" "}
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-gpay1.png"
                      />{" "}
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-phonepe1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-bhim1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-paytm1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii3.pepperfry.com/assets/w23-amz-pay-18-may.png"
                      />
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      pt={2}
                      pb={2}
                      as="span"
                      flex="1"
                      textAlign="left"
                      display="flex"
                      //   border="1px solid red"
                      alignItems="center"
                    >
                      <Image src="https://ii1.pepperfry.com/assets/w22-payment-gift-card.svg" />{" "}
                      <Text
                        pl={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="gray.600"
                      >
                        Pepperfry Gift Card{" "}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} backgroundColor="gray.50">
                  <Box w="80%" mt={3}>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        placeholder="Enter UPI ID"
                        backgroundColor="white"
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          color="gray"
                          backgroundColor="white"
                          _hover={{ backgroundColor: "white" }}
                        >
                          Verify
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <Divider />

                    <Text
                      display="flex"
                      justifyContent="space-between"
                      fontSize="lg"
                      mt={4}
                    >
                      Supported Apps{" "}
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-gpay1.png"
                      />{" "}
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-phonepe1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-bhim1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-paytm1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii3.pepperfry.com/assets/w23-amz-pay-18-may.png"
                      />
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      pt={2}
                      pb={2}
                      as="span"
                      flex="1"
                      textAlign="left"
                      display="flex"
                      //   border="1px solid red"
                      alignItems="center"
                    >
                      <Image src="https://ii1.pepperfry.com/assets/w22-payment-credit-card.svg" />{" "}
                      <Text
                        pl={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="gray.600"
                      >
                        International Cards{" "}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} backgroundColor="gray.50">
                  <Box w="80%" mt={3}>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        placeholder="Enter UPI ID"
                        backgroundColor="white"
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          color="gray"
                          backgroundColor="white"
                          _hover={{ backgroundColor: "white" }}
                        >
                          Verify
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <Divider />

                    <Text
                      display="flex"
                      justifyContent="space-between"
                      fontSize="lg"
                      mt={4}
                    >
                      Supported Apps{" "}
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-gpay1.png"
                      />{" "}
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-phonepe1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii1.pepperfry.com/assets/w22-payment-bhim1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii2.pepperfry.com/assets/w22-payment-paytm1.png"
                      />
                      <Image
                        w="8%"
                        src="https://ii3.pepperfry.com/assets/w23-amz-pay-18-may.png"
                      />
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box>
            {cartItems.map((el) => (
              <Box border="1px solid lightgray" p={7} mb={10} key={el.id}>
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
                    <Button mt={8} w="100%">
                      Pay Now
                    </Button>
                  </Center>
                </>
              </Box>
            ))}
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default Checkout;
