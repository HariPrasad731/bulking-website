import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#07152A] to-[#061226] text-white">
      <div className="max-w-[1440px] mx-auto px-16 pt-20 pb-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-4 gap-16 items-start">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FiHeart className="text-white" />
              <span className="text-lg font-semibold">Bulking</span>
            </Link>

            <p className="text-sm text-blue-200 leading-relaxed max-w-[260px]">
              Get fit, stay healthy, and live life on their terms without fitness
              being an obstacle.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <Link to="/" className="hover:text-lime-400">Home</Link>
            <Link to="/programs" className="hover:text-lime-400">Programs</Link>
            <Link to="/membership" className="hover:text-lime-400">Membership</Link>
            <Link to="/blog" className="hover:text-lime-400">Blog</Link>
            <Link to="/contact" className="hover:text-lime-400">Contact</Link>
            <Link to="/about" className="hover:text-lime-400">About Us</Link>
          </div>

          {/* EMPTY COLUMN */}
          <div />

          {/* NEWSLETTER */}
          <div>
            <p className="text-sm mb-4">Newsletter</p>

            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email here"
                className="px-6 py-3 rounded-full bg-white/10 text-sm placeholder:text-blue-200 outline-none w-[220px]"
              />
              <button className="px-6 py-3 rounded-full bg-lime-400 text-black text-sm font-medium hover:bg-lime-300 transition">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex items-center justify-between text-sm text-blue-200">

          {/* COPYRIGHT */}
          <p>© 2022 Nguli® Global Inc.</p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaLinkedinIn /></SocialIcon>
            <SocialIcon><FaTwitter /></SocialIcon>
            <SocialIcon><FaYoutube /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
          </div>

          {/* POLICIES */}
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* SOCIAL ICON */
function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition cursor-pointer">
      {children}
    </div>
  );
}
