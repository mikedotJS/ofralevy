import { Outlet } from "react-router-dom";
import { Navbar } from "./components/NavbarWithCallToAction/Navbar";
import { Container } from "@chakra-ui/react";

function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
