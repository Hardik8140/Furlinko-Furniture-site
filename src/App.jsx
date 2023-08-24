import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin";
import { useSelector } from "react-redux";
import AdminNavbar from "./Components/AdminNavbar";
import AdminRoutes from "./Routes/AdminRoutes";
import AllRoutes from "./Routes/AllRoutes";
import CategoryNavbar from "./Components/CategoryNavbar";

function App() {
  // const isAdminAuth = useSelector((store) => store.adminReducer.isAdminAuth);
  return (
    <Box>
      {/* {isAdminAuth ? <AdminNavbar /> : null} */}
      {/* <AdminRoutes /> */}
      {/* <Admin /> */}
      <Navbar />
      {/* <CategoryNavbar /> */}
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
