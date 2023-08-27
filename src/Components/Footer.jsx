import {
  Box,
  Divider,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: "1", sm: "3", md: "5" }}
        backgroundColor="blackAlpha.100"
        // p="60px"
        p={{ base: "20px", sm: "40px", md: "60px" }}
        gap={9}
        textAlign={{ base: "center", lg: "start" }}
      >
        <Box display="flex" flexDirection="column">
          <Heading as="h4" size="md" mb="6px">
            Corporate
          </Heading>
          <Link mb="6px">About Us</Link>
          <Link mb="6px">Corporate Governance</Link>
          <Link mb="6px">Pepperfry in the News</Link>
          <Link mb="6px">Careers</Link>
        </Box>

        {/* column -2 */}
        <Box display="flex" flexDirection="column">
          <Heading as="h4" size="md" mb="6px">
            Useful Links
          </Heading>
          <Link mb="6px">Explore Gift Cards</Link>
          <Link mb="6px">Buy in Bulk</Link>
          <Link mb="6px">Discover Our Brands</Link>
          <Link mb="6px">Check Out Bonhomie, Our Blog</Link>
          <Link mb="6px">Find a Studio</Link>
        </Box>

        {/* column -3 */}
        <Box display="flex" flexDirection="column">
          <Heading as="h4" size="md" mb="6px">
            Partner With Us
          </Heading>
          <Link mb="6px">Sell on Pepperfry</Link>
          <Link mb="6px">Become a Franchisee</Link>
          <Link mb="6px">Become Our Channel Partner</Link>
          <Link mb="6px">Become Our Pep Homie</Link>
          <Link mb="6px">Our Marketplace Policies</Link>
          <Link mb="6px">Merchant Dashboard Login</Link>
        </Box>

        {/* column - 4 */}
        <Box display="flex" flexDirection="column">
          <Heading as="h4" size="md" mb="6px">
            Need Help?
          </Heading>
          <Link mb="6px">FAQs</Link>
          <Link mb="6px">Policies</Link>
          <Link mb="6px">Contact Us</Link>
        </Box>

        {/* column - 4 */}
        <Box display="flex" flexDirection="column">
          <Heading as="h4" size="md" mb="6px">
            Download our App
          </Heading>
          <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-apple-appstore-logo_2x.png" />
          <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-google-playstore-logo_2x.png" />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: "1", sm: "3", md: "3" }}
        backgroundColor="blackAlpha.100"
        p="60px"
        gap={9}
      >
        {/* column - 1 */}
        <Box>
          <Heading as="h4" size="md" mb="20px">
            Popular Categories
          </Heading>
          <Text color="blackAlpha.600" fontSize="16px">
            Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds,King Size
            Beds,Coffee Tables,Dining Sets,Recliners,Sofa Cum Beds,Rocking
            Chairs,Cabinets & Sideboards,Book Shelves,TV & Media
            Units,Wardrobes,Outdoor Furniture,Bar Cabinets,Wall Shelves,Photo
            Frames,Bed Sheets,Table Linen,Study Tables,Office Furniture,Dining
            Tables,Carpets,Wall Art
          </Text>
        </Box>

        {/* column - 2 */}
        <Box>
          <Heading as="h4" size="md" mb="20px">
            Popular Brands
          </Heading>
          <Text color="blackAlpha.600" fontSize="16px">
            Mintwud,Woodsworth,CasaCraft,Amberville,Mudramark,Bohemiana,Clouddio,Spacewood,A
            Globia Creations,Febonic,@home,Durian,Evok,Hometown,Nilkamal,Crystal
            Furnitech,Bluewud,Duroflex,Sleepyhead,Green Soul,Orange Tree
          </Text>
        </Box>

        {/* column - 3 */}
        <Box>
          <Heading as="h4" size="md" mb="20px">
            Popular cities
          </Heading>
          <Text color="blackAlpha.600" fontSize="16px">
            Bengaluru,Mumbai,Navi
            Mumbai,Delhi,Hyderabad,Pune,Chennai,Gurgaon,Kolkata,Noida,Goa,Ghaziabad,Faridabad,Jaipur,Lucknow,Kochi,Visakhapatnam,Chandigarh,Vadodara,Nagpur,Thiruvananthapuram,Indore,Mysore,Bhopal,Surat,Jalandhar,Patna,Ludhiana,Ahmedabad,Nashik,Madurai,Kanpur,Aurangabad
          </Text>
        </Box>
      </SimpleGrid>

      <Divider colorScheme="blackAlpha" />

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        // columns={{ base: "1", sm: "3", md: "5" }}
        backgroundColor="blackAlpha.100"
        pl={{ base: "20px", sm: "50px", lg: "60px" }}
        gap={{ base: "1rem", lg: "24rem" }}
      >
        <Box>
          <Heading as="h4" size="md" mb="20px">
            We accept
          </Heading>
          <Box display="flex" gap="10px">
            <Image
              w={{ base: "1.6rem", sm: "3rem", md: "4rem" }}
              src="https://ii2.pepperfry.com/assets/w23-pf-visa.jpg"
            />
            <Image
              w={{ base: "1.6rem", sm: "3rem", md: "4rem" }}
              src="https://ii3.pepperfry.com/assets/w23-pf-master-card.jpg"
            />
            <Image
              w={{ base: "1.6rem", sm: "3rem", md: "4rem" }}
              src="https://ii3.pepperfry.com/assets/w23-pf-maestro.jpg"
            />
            <Image
              w={{ base: "1.6rem", sm: "3rem", md: "4rem" }}
              src="https://ii1.pepperfry.com/assets/w23-pf-american-express.jpg"
            />
            <Image
              w={{ base: "1.6rem", sm: "3rem", md: "4rem" }}
              src="https://ii1.pepperfry.com/assets/w23-pf-rupay.jpg"
            />
            <Image
              w={{ base: "1.6rem", sm: "3rem", md: "4rem" }}
              src="https://ii1.pepperfry.com/assets/w23-pf-dinners-club.jpg"
            />
            <Image
              w={{ base: "1.6rem", sm: "3rem", md: "4rem" }}
              src="https://ii3.pepperfry.com/assets/w23-pf-wallet.jpg"
            />
            <Image
              w={{ base: "1.6rem", sm: "3rem", md: "4rem" }}
              src="https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg"
            />
          </Box>
        </Box>

        <Box>
          <Heading as="h4" size="md" mb="20px">
            Like What You See? Follow us Here
          </Heading>
          <Box display="flex" gap="10px">
            <Image
              w={{ base: "2rem", md: "2rem", lg: "2rem" }}
              src="https://ii2.pepperfry.com/assets/w23-pf-social-insta.png"
            />
            <Image
              w={{ base: "2rem", md: "2rem", lg: "2rem" }}
              src="https://ii1.pepperfry.com/assets/w23-pf-social-fb.png"
            />
            <Image
              w={{ base: "2rem", md: "2rem", lg: "2rem" }}
              src="https://ii3.pepperfry.com/assets/w23-pf-social-pinterest.png"
            />
            <Image
              w={{ base: "2rem", md: "2rem", lg: "2rem" }}
              src="https://ii3.pepperfry.com/assets/w23-pf-social-linkedin.png"
            />
            <Image
              w={{ base: "2rem", md: "2rem", lg: "2rem" }}
              src="https://ii1.pepperfry.com/assets/w23-pf-social-youtube.png"
            />
            <Image
              w={{ base: "2rem", md: "2rem", lg: "2rem" }}
              src="https://ii2.pepperfry.com/assets/w23-pf-social-twitter.png"
            />
          </Box>
        </Box>
      </SimpleGrid>

      <Divider colorScheme="blackAlpha" />

      <Box backgroundColor="blackAlpha.100" textAlign="center" p={4}>
        Copyright 2022 Nostra. All right reserved
      </Box>
      {/* </> */}
    </Box>
  );
};

export default Footer;
