import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const AppRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

export default AppRoute;
