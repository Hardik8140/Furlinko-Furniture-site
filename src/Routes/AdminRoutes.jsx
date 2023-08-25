import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "../Pages/Admin";
import Sales from "../Pages/Sales";
import AdminProducts from "../Pages/AdminProducts";
import AdminUsers from "../Pages/AdminUsers";
import AddAdmin from "../Pages/AddAdmin";
import { useSelector } from "react-redux";

const AdminRoutes = () => {
  const isAdminAuth = useSelector((store) => store.adminReducer.isAdminAuth);
  const navigate = useNavigate();

  // if (isAdminAuth) {
  //   navigate("/");
  //   return null;
  // }

  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/adminProducts" element={<AdminProducts />} />
      <Route path="/adminUsers" element={<AdminUsers />} />
      <Route path="/addAdmin" element={<AddAdmin />} />
    </Routes>
  );
};

export default AdminRoutes;
