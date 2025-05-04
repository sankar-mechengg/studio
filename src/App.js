import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Loader from "./components/Loader.js";
import BackToTop from "./components/BackToTop.js";
import ScrollProgress from "./components/ScrollProgress.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Portfolio from "./pages/Portfolio.js";
import Publications from "./pages/PublicationsPatents.js";
import Blog from "./pages/Blog.js";
import BlogPost from "./pages/BlogPosts.js";
import ExperimentalLab from "./pages/ExperimentalLab.js";
import Contact from "./pages/Contact.js";
import SkillsCertifications from "./pages/SkillsCertifications.js";
import TrainingsPrograms from "./pages/TrainingsPrograms.js";
import RolesResponsibilities from "./pages/RolesResponsibilities.js";
import AwardsRecognition from "./pages/AwardsRecognitions.js";
import AOS from "aos";
import "aos/dist/aos.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => setLoading(false), 1500); // Loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/studio">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop />
          <ScrollProgress />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications-patents" element={<Publications />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/experimental-lab" element={<ExperimentalLab />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/skills-certifications"
              element={<SkillsCertifications />}
            />
            <Route path="/trainings-programs" element={<TrainingsPrograms />} />
            <Route
              path="/roles-responsibilities"
              element={<RolesResponsibilities />}
            />
            <Route path="/awards-recognition" element={<AwardsRecognition />} />
          </Routes>
          <BackToTop />
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
