import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";
import AdminNavbar from "./Components/AdminNavbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const isAuth = useSelector((store) => store.loginReducer.isAdminAuth);
  return (
    <Box>
      {/* {isAuth ? <AdminNavbar /> : <Navbar />} */}
      <Navbar />
      <AllRoutes />
      {/* <AdminRoutes /> */}
      <Footer />
    </Box>
  );
}

export default App;
