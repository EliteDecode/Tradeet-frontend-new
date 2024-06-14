import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbars/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
