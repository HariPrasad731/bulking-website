import { FiHeart } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const trainers = [
  {
    name: "Jakob Curtis",
    role: "Founder & Owners",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Ryan Vetrovs",
    role: "Coach",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Marcus Levin",
    role: "Coach",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ahmad Saris",
    role: "Coach",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Phillip Mango",
    role: "Coach",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Martin Calzoni",
    role: "Coach",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

export default function Trainers() {
  return (
    <main className="bg-[#F7F8FA]">

      {/* ================= HERO ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pt-24 pb-28 text-center">
        <h1 className="text-[44px] font-semibold mb-4">
          Meet <span className="font-light">the Team</span>
        </h1>

        <p className="text-gray-500 max-w-[620px] mx-auto text-sm">
          Our Personal Trainers are experienced and highly qualified – and they’re
          all on their own inspiring journey too. Click our photos to read more.
        </p>
      </section>

      {/* ================= TRAINERS GRID ================= */}
      <section className="max-w-[1200px] mx-auto px-16 pb-32">
        <div className="grid grid-cols-3 gap-12">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="max-w-[1200px] mx-auto px-16 pb-28 text-center">
        <h2 className="text-[32px] font-semibold mb-3">
          My Core Work Values
        </h2>
        <p className="text-gray-500 text-sm mb-14">
          Consectetur adipiscing elit. Odio amet egestas dignissim eu nunc.
          Id pulvinar enim volutpat tellus.
        </p>

        <div className="grid grid-cols-3 rounded-2xl overflow-hidden shadow-sm">
          <ValueCard title="Commitment" />
          <ValueCard title="Motivation" active />
          <ValueCard title="Passion" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0B4DBA] py-20">
        <div className="max-w-[1200px] mx-auto px-16 flex items-center justify-between text-white">
          <div>
            <h2 className="text-[32px] font-semibold mb-3">
              Discover Your Potential
            </h2>
            <p className="text-blue-200 text-sm max-w-[520px]">
              Workout was started by James and Mount in 2012. It’s our mission
              to help people get fit, stay healthy, and live life on their terms.
            </p>
          </div>

          <button className="px-8 py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300 transition">
            Get Started
          </button>
        </div>
      </section>

    </main>
  );
}

/* ================= TRAINER CARD ================= */
function TrainerCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-xl object-cover mx-auto mb-6"
      />

      <h3 className="font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{role}</p>

      <div className="flex justify-center gap-3">
        <SocialIcon><FaFacebookF /></SocialIcon>
        <SocialIcon><FaLinkedinIn /></SocialIcon>
        <SocialIcon><FaTwitter /></SocialIcon>
      </div>
    </div>
  );
}

/* ================= VALUE CARD ================= */
function ValueCard({ title, active }) {
  return (
    <div
      className={`p-10 text-left ${
        active
          ? "bg-[#0B4DBA] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <FiHeart className={active ? "text-lime-400" : "text-lime-400"} />
        <h3 className="font-semibold">{title}</h3>
      </div>

      <p
        className={`text-sm ${
          active ? "text-blue-100" : "text-gray-500"
        }`}
      >
        Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et,
        viverra urna imperdiet non malesuada. Inol massa id tellus natoque
        augue in et.
      </p>
    </div>
  );
}

/* ================= SOCIAL ICON ================= */
function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-lime-400 hover:text-lime-400 transition cursor-pointer">
      {children}
    </div>
  );
}
