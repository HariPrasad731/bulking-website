import { FiCheck } from "react-icons/fi";
import { FaPaypal, FaApple } from "react-icons/fa";

export default function Payment() {
  return (
    <main className="bg-[#F7F8FA]">

      <section className="max-w-[1440px] mx-auto px-16 pt-20 pb-28">

        <div className="grid grid-cols-[1fr_420px] gap-20">

          {/* ================= LEFT FORM ================= */}
          <div>

            <h1 className="text-[32px] font-semibold mb-10">
              Get your package
            </h1>

            {/* PAY OPTIONS */}
            <p className="text-sm mb-4">Pay with</p>

            <div className="space-y-4 mb-8">
              <PaymentOption icon={<FaPaypal />} label="PayPal" />
              <PaymentOption icon={<FaApple />} label="Apple Pay" />
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Or using a credit card
            </p>

            {/* FORM */}
            <div className="space-y-6">

              <Input label="Cardholder Name" placeholder="" />
              <Input label="Card Number" placeholder="Ex: 3111 1111 1111 1111" />

              <div className="grid grid-cols-3 gap-4">
                <Input label="Postal Code" placeholder="Postal or ZIP code" />
                <Input label="Expiration" placeholder="MM/YY" />
                <Input label="CVV" placeholder="" />
              </div>

              <label className="flex items-center gap-3 text-sm text-gray-600">
                <input type="checkbox" className="accent-lime-400" />
                Save card
              </label>

              <button className="mt-6 px-8 py-3 rounded-full bg-lime-400 text-black font-semibold">
                Confirm and pay
              </button>

            </div>
          </div>

          {/* ================= RIGHT SUMMARY ================= */}
          <aside className="bg-white rounded-2xl p-8 h-fit">

            <div className="text-[32px] font-semibold mb-1">
              $149.00
              <span className="text-sm text-gray-400">/Month</span>
            </div>

            <p className="font-medium mb-2">Basic Plan</p>

            <p className="text-sm text-gray-500 mb-6">
              It’s a long established fact that a reader will be distracted by
              the readable content
            </p>

            <p className="text-sm font-medium mb-4">What’s Includes:</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm">
                <FiCheck className="text-blue-600" />
                8 classes per month
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FiCheck className="text-blue-600" />
                All in basic package
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FiCheck className="text-blue-600" />
                1-on-1 personal training
              </li>
            </ul>

            <div>
              <p className="text-sm font-medium mb-2">Package Duration</p>
              <select className="w-full border rounded-xl px-4 py-3 text-sm">
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
              </select>
            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */

function PaymentOption({ icon, label }) {
  return (
    <label className="flex items-center gap-4 border rounded-2xl px-6 py-4 cursor-pointer">
      <input type="radio" name="payment" />
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </label>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400"
      />
    </div>
  );
}
