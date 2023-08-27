import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/authReducer/action";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   dispatch(logoutUser());
  //   navigate("/");
  // };
  return (
    <Box
      display="flex"
      w="100%"
      justifyContent="space-around"
      alignItems="baseline"
      boxShadow="md"
    >
      {/* <Link to="/">
        <Image src={logo} w="8rem" />
      </Link> */}
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
        {/* <Button onClick={handleLogout}>Logout</Button> */}
      </Box>
    </Box>
  );
};

export default AdminNavbar;
