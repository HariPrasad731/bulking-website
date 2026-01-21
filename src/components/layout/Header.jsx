import { Link, NavLink, useLocation } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiCheck } from "react-icons/fi";
import { useState } from "react";

import SignupModal from "../auth/SignupModal";
import LoginModal from "../auth/LoginModal";

export default function Header() {
  const { pathname } = useLocation();

  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  // ✅ Blue header for Home & About only
  const isBlueHeader = pathname === "/" || pathname === "/about";
  const isWhiteHeader = !isBlueHeader;

  return (
    <>
      {/* ✅ STICKY HEADER */}
      <header
        className={`
          sticky top-0 z-50
          ${isWhiteHeader
            ? "bg-white/95 text-gray-900 border-b backdrop-blur"
            : "bg-[#0B4DBA]/95 text-white backdrop-blur"
          }
        `}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-8 py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="relative inline-flex items-center justify-center">
              <FiHeart
                className={`text-xl ${
                  isWhiteHeader ? "text-blue-600" : "text-white"
                }`}
              />
              <FiCheck
                className={`absolute text-[10px] ${
                  isWhiteHeader ? "text-blue-600" : "text-white"
                }`}
              />
            </span>

            <span className={isWhiteHeader ? "text-blue-600" : "text-white"}>
              Bulking
            </span>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {["/", "/programs", "/trainers", "/membership", "/contact", "/about"].map(
              (path, i) => {
                const labels = [
                  "Home",
                  "Programs",
                  "Trainers",
                  "Membership",
                  "Contact",
                  "About",
                ];

                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "opacity-70 hover:opacity-100 transition"
                    }
                  >
                    {labels[i]}
                  </NavLink>
                );
              }
            )}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer">
              <FiShoppingCart
                className={`text-xl ${
                  isWhiteHeader ? "text-gray-700" : "text-white"
                }`}
              />
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-lime-400 rounded-full" />
            </div>

            {/* LOGIN */}
            <button
              onClick={() => setOpenLogin(true)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition
                ${
                  isWhiteHeader
                    ? "border-gray-300 hover:bg-gray-100"
                    : "border-white hover:bg-white hover:text-[#0B4DBA]"
                }
              `}
            >
              Log In
            </button>

            {/* SIGN UP */}
            <button
              onClick={() => setOpenSignup(true)}
              className="px-5 py-2 rounded-full bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* SIGNUP MODAL */}
      <SignupModal
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        onLogin={() => {
          setOpenSignup(false);
          setOpenLogin(true);
        }}
      />

      {/* LOGIN MODAL */}
      <LoginModal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        onSwitch={() => {
          setOpenLogin(false);
          setOpenSignup(true);
        }}
      />
    </>
  );
}
