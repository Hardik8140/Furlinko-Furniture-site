import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { plush } from "../assets";
import { useSelector } from "react-redux";
import AdminNavbar from "../Components/AdminNavbar";
import AdminRoutes from "../Routes/AdminRoutes";

const Admin = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const isAdminAuth = useSelector((store) => store.adminReducer.isAdminAuth);

  return (
    <Box>
      <Center m={10}>
        <Button>Refresh Sales</Button>
      </Center>
      {/* {isAdminAuth && <AdminNavbar />} */}
      {/* <AdminRoutes /> */}
      {/* <AdminNavbar /> */}
      <Box display="flex" justifyContent="space-around" m={10}>
        <Box backgroundColor="lightgray" borderRadius={10} p={10}>
          <Heading as="h4" size="lg">
            Todays Sales
          </Heading>
          <Heading as="h4" size="lg">
            $ 0.00
          </Heading>
        </Box>
        <Box backgroundColor="lightgray" borderRadius={10} p={10}>
          <Heading as="h4" size="lg">
            Week Sales
          </Heading>
          <Heading as="h4" size="lg">
            $ 0.00
          </Heading>
        </Box>
        <Box backgroundColor="lightgray" borderRadius={10} p={10}>
          <Heading as="h4" size="lg">
            Month Sales
          </Heading>
          <Heading as="h4" size="lg">
            $ 0.00
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
