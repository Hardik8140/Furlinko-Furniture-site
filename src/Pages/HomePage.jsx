import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Card,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { getProduct } from "../Redux/Home/action";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      {/* Main Image Part */}
      <Box mt="2rem">
        <Link>
          <Image src="https://ii1.pepperfry.com/assets/b3834675-d7b0-4be0-b6fc-beeb69d5ee0d.jpg" />
        </Link>
      </Box>

      {/* Second Section */}
      <Center>
        <Box
          w={{ base: "90%", sm: "70%" }}
          mt={7}
          mb={{ base: "3rem", sm: "6rem" }}
        >
          <SimpleGrid columns={2}>
            <Box>
              <Text
                color="goldenrod"
                fontSize={{ base: "x-small", sm: "medium" }}
              >
                CABINET OF FURNITURE
              </Text>
              <Heading as="h3" size={{ base: "sm", sm: "lg" }}>
                Catalog of Our Products
              </Heading>
              <Text fontSize={{ base: "xx-small", sm: "md" }} mt={2} mb={2}>
                You wil find heaven for your interior beautifully dyed cotton or
                cloths dwarfs, one for each boy in the family
              </Text>
              <SimpleGrid columns={2} gap={2} mt={4}>
                <Box>
                  <Image
                    w="90%"
                    src="https://ii1.pepperfry.com/media/catalog/product/a/l/494x544/alcalde-wing-chair-in-velvet-wine-red-colour-by-casacraft-alcalde-wing-chair-in-velvet-wine-red-colo-u1qnyy.jpg"
                  />
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "xx-small", sm: "md" }}
                    textDecoration="underline"
                  >
                    Sofa Chair <ArrowForwardIcon />
                  </Text>
                </Box>
                <Box>
                  <Image
                    w="90%"
                    src="https://ii1.pepperfry.com/media/catalog/product/2/0/494x544/200gsm-polycotton-single-bed-sheet-with-1-pillow-cover-200gsm-polycotton-single-bed-sheet-with-1-pil-dlzjqd.jpg"
                  />
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "xx-small", sm: "md" }}
                    textDecoration="underline"
                  >
                    Bed <ArrowForwardIcon />
                  </Text>
                </Box>
                <Box>
                  <Image
                    w="90%"
                    src="https://ii2.pepperfry.com/assets/abd59da2-16cd-4174-b4f3-90db68f67f0d.jpg"
                  />
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "xx-small", sm: "md" }}
                    textDecoration="underline"
                  >
                    Center Table <ArrowForwardIcon />
                  </Text>
                </Box>
                <Box>
                  <Image
                    w="90%"
                    src="https://ii3.pepperfry.com/assets/3e4b8d35-3ac4-4426-8a10-cca2558dcf5e.jpg"
                  />
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "xx-small", sm: "md" }}
                    textDecoration="underline"
                  >
                    Been Bag <ArrowForwardIcon />
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Image
                aspectRatio={{ base: "2/4", sm: "3/5", md: "3/6", lg: "3/5" }}
                src="https://ii2.pepperfry.com/assets/613f3574-2ff2-4c53-a6cc-162c0852b58d.jpg"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Center>

      {/* Third Section */}
      <Center>
        <Box w={{ base: "90%", sm: "70%" }} mb={{ base: "3rem", sm: "6rem" }}>
          <SimpleGrid columns={2} gap={5}>
            <Box>
              <Text
                fontSize={{ base: "sm", sm: "2xl", md: "2xl", lg: "4xl" }}
                fontFamily="inherit"
              >
                PROJECT YOUR IMPLEMENTATION OURS
              </Text>
              <Image
                aspectRatio="3/1.9"
                src="https://ii1.pepperfry.com/media/catalog/product/r/a/494x544/rana-fabric-rhs-chaise-lounger-in-pine-green-colour-rana-fabric-rhs-chaise-lounger-in-pine-green-col-1ngpdk.jpg"
              />
            </Box>
            <Box>
              <Image src="https://ii2.pepperfry.com/assets/1769f8f9-a060-4ded-8efe-524abe424baf.jpg" />
            </Box>
          </SimpleGrid>
        </Box>
      </Center>

      <Center>
        <Box>
          <Heading as="h4" size="md">
            Buyers Choice
          </Heading>
          {/* <Slider {...settings} />
          <Box>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg" />
            <Heading as="h5" size={"sm"} mt={2} mb={2}>
              Soho Velvet Bench in Green Colour
            </Heading>
            <Text>₹ 4374</Text>
          </Box>

          <Box>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg" />
            <Heading as="h5" size={"sm"} mt={2} mb={2}>
              Soho Velvet Bench in Green Colour
            </Heading>
            <Text>₹ 4374</Text>
          </Box>

          <Box>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg" />
            <Heading as="h5" size={"sm"} mt={2} mb={2}>
              Soho Velvet Bench in Green Colour
            </Heading>
            <Text>₹ 4374</Text>
          </Box>

          <Box>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg" />
            <Heading as="h5" size={"sm"} mt={2} mb={2}>
              Soho Velvet Bench in Green Colour
            </Heading>
            <Text>₹ 4374</Text>
          </Box>

          <Box>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg" />
            <Heading as="h5" size={"sm"} mt={2} mb={2}>
              Soho Velvet Bench in Green Colour
            </Heading>
            <Text>₹ 4374</Text>
          </Box>

          <Box>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg" />
            <Heading as="h5" size={"sm"} mt={2} mb={2}>
              Soho Velvet Bench in Green Colour
            </Heading>
            <Text>₹ 4374</Text>
          </Box>

          <Box>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg" />
            <Heading as="h5" size={"sm"} mt={2} mb={2}>
              Soho Velvet Bench in Green Colour
            </Heading>
            <Text>₹ 4374</Text>
          </Box>

          <Box>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg" />
            <Heading as="h5" size={"sm"} mt={2} mb={2}>
              Soho Velvet Bench in Green Colour
            </Heading>
            <Text>₹ 4374</Text>
          </Box> */}
        </Box>
      </Center>

      <Box mt="2rem" mb="2rem">
        <Link>
          <Image src="https://ii1.pepperfry.com/assets/4d2d41f4-e6f9-4089-a7bf-34095f6db565.jpg" />
        </Link>
      </Box>

      <Center>
        <Box
          w={{ base: "90%", sm: "70%" }}
          display="flex"
          gap={8}
          mb={10}
          mt={10}
        >
          <Box w="50%">
            <Image
              aspectRatio="5/3"
              src="https://ii3.pepperfry.com/assets/2e8c49b4-5ec4-41ba-b0dc-d9f5076c11ae.jpg"
            />
            <Heading as="h3" size={{ base: "sm", sm: "lg" }}>
              Furniture Factory Wood Fans
            </Heading>
            <Text fontSize={{ base: "sm", sm: "md" }} mt={2} mb={2}>
              This is the place where you will always be helped to choose the
              fabric for the sofa or bed. determine the size and enliven the
              interior with textile decor
            </Text>
          </Box>

          <Box w="60%">
            <Box>
              <Heading as="h3" size={{ base: "sm", sm: "lg" }}>
                Theoretical Collapse
              </Heading>
              <Text fontSize={{ base: "sm", sm: "md" }} mt={2} mb={2}>
                A crisis of legitimacy is usually predictable <br /> As already
                noted the landscape park <br /> repels the capitalist world
                society
              </Text>
            </Box>
            <SimpleGrid columns={2} gap={{ base: "5", sm: "10" }}>
              <Image src="https://ii2.pepperfry.com/media/catalog/product/a/c/494x544/aciano-fabric-full-back-lounge-chair-in-floral-print-aciano-fabric-full-back-lounge-chair-in-floral--dog25f.jpg" />
              <Image src="https://ii2.pepperfry.com/media/catalog/product/u/n/494x544/unique-pu-velvet---fabric-dining-chair-with-black-metal-powdered-coated-base-in-light-blue---multi-c-bhwn8l.jpg" />
            </SimpleGrid>
          </Box>
        </Box>
      </Center>

      <Center>
        <SimpleGrid
          columns={{ base: "1", sm: "2", md: "4" }}
          width="70%"
          gap={7}
          mt={9}
          mb={9}
        >
          <Box>
            <Heading as="h2" size="md">
              Video on YouTube
            </Heading>
            <Text fontSize={"md"} mt={2} mb={2}>
              As a first approximation the level groundwater is uneven Oblesenie
              navlivaent natri
            </Text>
          </Box>

          <Box>
            <Image
              aspectRatio="5/4"
              src="https://ii3.pepperfry.com/media/catalog/product/t/h/494x544/thomas-fabric-arm-chair-in-light-pink-colour-thomas-fabric-arm-chair-in-light-pink-colour-6qenxn.jpg"
            />
            <Heading as="h4" size="sm">
              Reagan Leather Arm Chair In Brass Finish
            </Heading>
            <Text fontSize={"md"} mt={2} mb={2}>
              A crisis of legitimacy is usually predictable
            </Text>
          </Box>

          <Box>
            <Image
              aspectRatio="5/4"
              src="https://ii3.pepperfry.com/media/catalog/product/t/h/494x544/thomas-fabric-arm-chair-in-light-pink-colour-thomas-fabric-arm-chair-in-light-pink-colour-6qenxn.jpg"
            />
            <Heading as="h4" size="sm">
              Reagan Leather Arm Chair In Brass Finish
            </Heading>
            <Text fontSize={"md"} mt={2} mb={2}>
              A crisis of legitimacy is usually predictable
            </Text>
          </Box>

          <Box>
            <Image
              aspectRatio="5/4"
              src="https://ii3.pepperfry.com/media/catalog/product/t/h/494x544/thomas-fabric-arm-chair-in-light-pink-colour-thomas-fabric-arm-chair-in-light-pink-colour-6qenxn.jpg"
            />
            <Heading as="h4" size="sm">
              Reagan Leather Arm Chair In Brass Finish
            </Heading>
            <Text fontSize={"md"} mt={2} mb={2}>
              A crisis of legitimacy is usually predictable
            </Text>
          </Box>
        </SimpleGrid>
      </Center>

      <Center>
        <Box w={{ base: "90%", sm: "70%" }} mt={8} mb={8}>
          <Image
            aspectRatio="3/1"
            src="https://ii1.pepperfry.com/assets/w23-pf-modular-page-banner-1280.jpg"
          />
        </Box>
      </Center>

      <Center>
        <SimpleGrid
          columns={{ base: "1", sm: "3" }}
          gap={{ base: "6", sm: "8" }}
          w={{ base: "90%", sm: "70%" }}
          mb={8}
        >
          <Box>
            <Image
              aspectRatio="3/3"
              src="https://ii1.pepperfry.com/assets/fca35ff6-fe27-44ae-a7ab-3f3a0db20746.jpg"
            />
            <Heading as="h2" size="md" mt={2} mb={2}>
              Andrria Miss
            </Heading>
            <Text fontSize={"md"} mt={2} mb={2}>
              As a first approximation the level groundwater is uneven Oblesenie
              navlivaent natri
            </Text>
          </Box>
          <Box>
            <Image
              aspectRatio="3/3"
              src="https://ii2.pepperfry.com/assets/b3a48d0b-adac-4374-8bbb-d467ae466fdd.jpg"
            />
            <Heading as="h2" size="md" mt={2} mb={2}>
              Andrria Miss
            </Heading>
            <Text fontSize={"md"} mt={2} mb={2}>
              As a first approximation the level groundwater is uneven Oblesenie
              navlivaent natri
            </Text>
          </Box>
          <Box>
            <Image
              aspectRatio="3/3"
              src="https://ii3.pepperfry.com/assets/16080fa3-d096-4159-b086-341d4d8068ae.jpg"
            />
            <Heading as="h2" size="md" mt={2} mb={2}>
              Andrria Miss
            </Heading>
            <Text fontSize={"md"} mt={2} mb={2}>
              As a first approximation the level groundwater is uneven Oblesenie
              navlivaent natri
            </Text>
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default HomePage;
