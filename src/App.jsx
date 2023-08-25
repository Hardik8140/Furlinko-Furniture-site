import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";
import AdminNavbar from "./Components/AdminNavbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const isAdminAuth = useSelector((store) => store.adminReducer.isAdminAuth);
  return (
    <Box>
      {isAdminAuth ? <AdminNavbar /> : <Navbar />}
      <AllRoutes />
      {/* <AdminRoutes /> */}
      <Footer />
    </Box>
  );
}

export default App;
