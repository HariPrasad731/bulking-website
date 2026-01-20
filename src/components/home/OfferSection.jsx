import { FiCheckCircle, FiHeart } from "react-icons/fi";
import { GiBiceps } from "react-icons/gi";

export default function OfferSection() {
  return (
    <section className="bg-[#F8F9FC] py-28">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-semibold text-center mb-20 leading-tight">
          We Offer Something For
          <br />
          <span className="block mt-2">Everybody</span>
        </h2>

        {/* ================= FIRST ROW ================= */}
        <div className="grid grid-cols-2 gap-20 items-center mb-28">

          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <GiBiceps className="text-lime-400 text-3xl mb-6" />

            <h3 className="text-2xl font-semibold mb-8 leading-snug">
              Crush any strength program with our suite of strength equipment
            </h3>

            <ul className="space-y-5 text-sm text-gray-600">
              <li className="flex gap-3">
                <FiCheckCircle className="text-blue-600 mt-1" />
                Fully fitted powerlifting and strongman section
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="text-blue-600 mt-1" />
                Olympic lifting platforms, weights, and bars
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="text-blue-600 mt-1" />
                Dumbbells ranging 5lbs–250lbs
              </li>
            </ul>

            <button className="mt-12 px-10 py-3 rounded-full bg-lime-400 text-black text-sm font-semibold">
              Join Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="https://myindianthings.com/cdn/shop/products/Gym_Yoga_wallpapers-compressed-page-008_800x.jpg?v=1658401561"
            alt="Strength training"
            className="rounded-2xl w-full h-[420px] object-cover"
          />
        </div>

        {/* ================= SECOND ROW ================= */}
        <div className="grid grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
            alt="Personal coaching"
            className="rounded-2xl w-full h-[420px] object-cover"
          />

          {/* RIGHT CARD */}
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <FiHeart className="text-lime-400 text-3xl mb-6" />

            <h3 className="text-2xl font-semibold mb-8 leading-snug">
              Be guided every step of the way with one of our world class coaches
            </h3>

            <ul className="space-y-5 text-sm text-gray-600">
              <li className="flex gap-3">
                <FiCheckCircle className="text-blue-600 mt-1" />
                Weightloss
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="text-blue-600 mt-1" />
                Competitive CrossFit
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="text-blue-600 mt-1" />
                Powerlifting
              </li>
            </ul>

            <button className="mt-12 px-10 py-3 rounded-full bg-lime-400 text-black text-sm font-semibold">
              Join Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
