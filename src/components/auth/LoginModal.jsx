import { useState } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";

export default function LoginModal({ open, onClose }) {
  const [step, setStep] = useState("login");

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

        {/* BRAND */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl">♡</span>
          <span className="font-semibold text-lg">Bulking</span>
        </div>

        {/* ===== LOGIN ===== */}
        {step === "login" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Hey there, welcome back!
            </h2>

            <Input label="Email" />
            <Input label="Password" type="password" />

            <button
              onClick={() => setStep("verify")}
              className="w-full py-3 rounded-full bg-lime-400 font-semibold mt-4"
            >
              Login
            </button>

            <button
              onClick={() => setStep("forgot")}
              className="block mx-auto mt-4 text-sm text-blue-600"
            >
              Forgot Password?
            </button>
          </>
        )}

        {/* ===== FORGOT PASSWORD ===== */}
        {step === "forgot" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Reset Password
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              Recover your account password
            </p>

            <Input label="Email" />

            <button
              onClick={() => setStep("verify")}
              className="w-full py-3 rounded-full bg-lime-400 font-semibold"
            >
              Next
            </button>
          </>
        )}

        {/* ===== VERIFY METHOD ===== */}
        {step === "verify" && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Let’s confirm it’s really you
            </h2>

            <div className="space-y-4 mb-6">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked />
                Get the code by email
              </label>
              <label className="flex items-center gap-3 opacity-60">
                <input type="checkbox" />
                Get the code by SMS
              </label>
            </div>

            <button
              onClick={() => setStep("otp")}
              className="w-full py-3 rounded-full bg-lime-400 font-semibold"
            >
              Continue
            </button>
          </>
        )}

        {/* ===== OTP ===== */}
        {step === "otp" && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Enter your verification code
            </h2>

            <div className="flex justify-center gap-3 mb-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                >
                  •
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep("new-password")}
              className="w-full py-3 rounded-full bg-lime-400 font-semibold"
            >
              Next
            </button>

            <button className="block mx-auto mt-4 text-sm text-blue-600">
              Resend
            </button>
          </>
        )}

        {/* ===== CREATE NEW PASSWORD ===== */}
        {step === "new-password" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Create New Password
            </h2>

            <Input label="Password" type="password" />
            <Input label="Confirm Password" type="password" />

            <button
              onClick={() => setStep("success")}
              className="w-full py-3 rounded-full bg-lime-400 font-semibold"
            >
              Next
            </button>
          </>
        )}

        {/* ===== SUCCESS ===== */}
        {step === "success" && (
          <div className="text-center">
            <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Success!</h2>
            <p className="text-sm text-gray-500 mb-6">
              Your password is successfully created
            </p>

            <button
              onClick={onClose}
              className="px-8 py-2 rounded-full border"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* INPUT */
function Input({ label, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="w-full mt-2 px-5 py-3 rounded-full border outline-none"
      />
    </div>
  );
}
