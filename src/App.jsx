import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetailes from "./pages/BlogDetailes";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

function App() {
  const location = useLocation();

  return (
    <div className="m-2 p-2 max-w-7xl mx-auto">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
          {/* Dynamic  */}
          <Route
            path="/blogs/:id"
            element={
              <PageWrapper>
                <BlogDetailes />
              </PageWrapper>
            }
          />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      {/* <Blogs /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
