import { Outlet } from "react-router-dom";
import { Navbar } from "./components/NavbarWithCallToAction/Navbar";
import { Container } from "@chakra-ui/react";
import { Footer } from "./components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
