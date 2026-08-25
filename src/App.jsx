import { Route, Routes } from "react-router";
import "./App.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetailes from "./pages/BlogDetailes";
import NotFound from "./pages/notFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="m-2 p-2 max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/blogs" Component={Blogs} />
        {/* Dynamic  */}
        <Route path="/blogs/:id" Component={BlogDetailes} />
        <Route path="/contact" Component={Contact} />
        <Route path="/*" Component={NotFound} />
      </Routes>
      <Footer />
      {/* <Blogs /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
