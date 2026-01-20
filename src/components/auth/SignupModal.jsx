import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignupModal({ open, onClose }) {
  const [step, setStep] = useState("signup"); 
  // signup | login | verify | otp

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-full max-w-[460px] rounded-2xl p-8 z-10">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <FiX size={20} />
        </button>

        {/* LOGO */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl">♡</span>
          <span className="font-semibold text-lg">Bulking</span>
        </div>

        {/* ================= SIGN UP ================= */}
        {step === "signup" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Welcome to Workout
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="flex items-center justify-center gap-3 border rounded-full py-3 text-sm hover:bg-gray-50">
                <FaGoogle /> Continue with Google
              </button>
              <button className="flex items-center justify-center gap-3 border rounded-full py-3 text-sm hover:bg-gray-50">
                <FaApple /> Continue with Apple
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
              <span className="flex-1 h-px bg-gray-200" />
              Or Sign Up with
              <span className="flex-1 h-px bg-gray-200" />
            </div>

            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 mb-6 px-5 py-3 rounded-full border outline-none focus:ring-2 focus:ring-lime-400"
            />

            <button
              onClick={() => setStep("verify")}
              className="w-full py-3 rounded-full bg-lime-400 text-black font-semibold mb-4 hover:bg-lime-300"
            >
              Continue
            </button>

            <div className="flex items-start gap-2 text-xs text-gray-500 mb-6">
              <input type="checkbox" className="mt-1" />
              <p>
                I agree to Claras{" "}
                <Link to="/terms" className="text-blue-600">Terms of Use</Link>{" "}
                and{" "}
                <Link to="/privacy-policy" className="text-blue-600">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <button
                onClick={() => setStep("login")}
                className="text-blue-600 font-medium"
              >
                Log In
              </button>
            </p>
          </>
        )}

        {/* ================= LOGIN ================= */}
        {step === "login" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Hey there, welcome back!
            </h2>

            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 mb-5 px-5 py-3 rounded-full border outline-none"
            />

            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 mb-6 px-5 py-3 rounded-full border outline-none"
            />

            <button
              onClick={() => setStep("verify")}
              className="w-full py-3 rounded-full bg-lime-400 text-black font-semibold mb-4 hover:bg-lime-300"
            >
              Login
            </button>

            <p className="text-sm text-center text-blue-600 cursor-pointer">
              Forgot Password?
            </p>
          </>
        )}

        {/* ================= VERIFY METHOD ================= */}
        {step === "verify" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-3">
              Let’s confirm it’s really you
            </h2>

            <p className="text-sm text-gray-500 text-center mb-6">
              Help us secure your account. Please complete the verifications below
            </p>

            <div className="space-y-4 mb-6">
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" defaultChecked />
                Get the code by email at joseph•••@gmail.com
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-400">
                <input type="checkbox" />
                Get the code by text message (SM) at +1 217•••918
              </label>
            </div>

            <button
              onClick={() => setStep("otp")}
              className="w-full py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300"
            >
              Continue
            </button>
          </>
        )}

        {/* ================= OTP ================= */}
        {step === "otp" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-3">
              Enter your security code
            </h2>

            <p className="text-sm text-gray-500 text-center mb-6">
              We texted your code to trann••••@gmail.com
            </p>

            <div className="flex justify-center gap-3 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border flex items-center justify-center text-lg"
                >
                  •
                </div>
              ))}
            </div>

            <button className="w-full py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300">
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}
