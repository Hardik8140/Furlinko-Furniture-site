import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <Box
      display="flex"
      w="100%"
      justifyContent="space-around"
      alignItems="baseline"
      boxShadow="md"
      p={2}
    >
      <Link to="/">
        <Image src={logo} w="8rem" />
      </Link>
      <Box
        w="50%"
        display="flex"
        justifyContent="space-between"
        fontSize="20px"
      >
        <Link to="/sales">Sales</Link>
        <Link to="/adminProducts">Products</Link>
        <Link to="/adminUsers">Users</Link>
        <Link to="/addAdmin">Admin</Link>
      </Box>
    </Box>
  );
};

export default AdminNavbar;
