// ProductDetails.js
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Center,
  Divider,
  Image,
  SimpleGrid,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"; // Import Chakra UI components
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Cart/action";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const product = useSelector((store) => store.singleProductReducer.product);
  const { title, discount, id, category, image, brand, price, rating } =
    product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.loginReducer.isAuth);

  const handleAddToCartByProduct = () => {
    const newItem = {
      id,
      title,
      brand,
      price,
      discount,
      category,
      rating,
      image,
      // material,
      // color,
    };
    dispatch(addToCart(newItem));
  };

  const handleBuyNow = () => {
    if (isAuth) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };
  return (
    <Center>
      <Box w="90%" m={10}>
        <SimpleGrid columns={2} gap={8}>
          <Box>
            <Image src={image} w="200rem" aspectRatio="3/2" />
          </Box>
          <Box>
            <Text fontWeight="semibold" fontSize="lg" pb={1}>
              {title}
            </Text>
            <Text color="gray" pb={2}>
              By Casacraft from Ferlinko
            </Text>
            <Divider />
            <Text pt={3} pb={3}>
              Ratting: {rating}
            </Text>

            <Divider />

            <Box
              display="flex"
              justifyContent="space-between"
              pt={1}
              pb={1}
              w="50%"
              mt={3}
              mb={3}
            >
              <Text>MRP</Text>
              <Text>₹{price}</Text>
            </Box>

            <Divider />
            <Box
              w="50%"
              mt={5}
              mb={5}
              display="flex"
              justifyContent="space-between"
            >
              <Button
                onClick={handleAddToCartByProduct}
                border="1px solid lightgray"
                backgroundColor="white"
              >
                Add to Cart
              </Button>
              <Button
                onClick={handleBuyNow}
                border="1px solid lightgray"
                backgroundColor="white"
              >
                Buy Now
              </Button>
            </Box>
            {/* Accordion */}
            <Box>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                        fontSize="lg"
                        pt={2}
                        pb={2}
                      >
                        Product Details
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <SimpleGrid columns={2}>
                      <Box color="gray">
                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Brand
                          </Heading>
                          <Text>Casacraft from Furlinko</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Collections
                          </Heading>
                          <Text>Ines</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Dimensions (in Inches)
                          </Heading>
                          <Text>
                            Sofa : H 37 x W 84 x D 35; Bed Size when open: H 17
                            x W 73 x D 58; Storage; H 9 x W 68 x D 23
                          </Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Product Rating
                          </Heading>
                          <Text>{rating}</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Seating Height
                          </Heading>
                          <Text>17</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Warranty
                          </Heading>
                          <Text>36 Months' Warranty</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Sku
                          </Heading>
                          <Text>FM1963678-S-WH32516</Text>
                        </Box>
                      </Box>

                      <Box color="gray">
                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Assembly
                          </Heading>
                          <Text>No Assembly Required</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Dimensions (In Centimeters)
                          </Heading>
                          <Text>
                            Sofa : H 93 x W 213 x D 89; Bed Size when open: H 43
                            x W 185 x D 147; Storage; H 22 x W 172 x D58;
                            Seating Height: 43; Seating Depth: 53
                          </Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Primary Material{" "}
                          </Heading>
                          <Text>Fabric</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Room Type
                          </Heading>
                          <Text>Living Room</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Storage
                          </Heading>
                          <Text>Box Storage</Text>
                        </Box>

                        <Box mb={3}>
                          <Heading as="h5" size="sm">
                            Weight
                          </Heading>
                          <Text>Weight</Text>
                        </Box>
                      </Box>
                    </SimpleGrid>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        fontWeight="bold"
                        fontSize="lg"
                        textAlign="left"
                        pt={2}
                        pb={2}
                      >
                        Specifications
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList>
                      <ListItem>
                        Frame Material : Red Meranti Solid Wood
                      </ListItem>
                      <ListItem>Upholstery : Premium Velvet</ListItem>
                      <ListItem>Thickness : 400 GSM</ListItem>
                      <ListItem>Martindale Rubs - 50,000 + Rubs</ListItem>
                      <ListItem>Leg Material : Metal</ListItem>
                      <ListItem>Seating Mechanism : S Spring</ListItem>
                      <ListItem>Foam Density : HR Foam 40 D</ListItem>
                    </UnorderedList>

                    <Text>Other Features</Text>

                    <UnorderedList>
                      <ListItem>Super Smooth Mechanism</ListItem>
                      <ListItem>
                        Easy to Operate for Kids and Senior Citizen
                      </ListItem>
                      <ListItem>
                        Eye Catching Details,Modern and Trendy Design
                      </ListItem>
                    </UnorderedList>

                    <Text>
                      Depending on your screen settings and resolution on your
                      device there may be a slight variance in fabric colour and
                      wood polish of the image and actual product.Wood grains
                      will vary from product to product in case of solid wood
                      furniture.Furniture having intricate hand-painted details
                      are individual unique pieces and may have slight
                      distinctions and variance between the picture and actual
                      product. The Primary material is the main material used to
                      manufacture the product and in addition to the primary
                      material there might also be other type of materials used
                      in the manufacturing of the product
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default ProductDetails;
