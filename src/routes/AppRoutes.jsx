import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Programs from "../pages/Programs";
import ProgramDetail from "../pages/ProgramDetail";
import Trainers from "../pages/Trainers";
import Membership from "../pages/Membership";
import MembershipDetail from "../pages/MembershipDetail";
import Payment from "../pages/Payment";

import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";

import FAQ from "../pages/FAQ"; // Book a Class → FAQ
import Contact from "../pages/Contact";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms"; // ✅ ADD THIS

export default function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* PROGRAMS */}
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:slug" element={<ProgramDetail />} />

      {/* MEMBERSHIP */}
      <Route path="/membership" element={<Membership />} />
      <Route path="/membership/:plan" element={<MembershipDetail />} />

      {/* PAYMENT */}
      <Route path="/payment" element={<Payment />} />

      {/* BLOG */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />

      {/* FAQ (BOOK A CLASS) */}
      <Route path="/faq" element={<FAQ />} />

      {/* STATIC PAGES */}
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} /> {/* ✅ TERMS OF SERVICE */}
    </Routes>
  );
}
