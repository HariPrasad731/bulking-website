import heroImg from "../../assets/images/hero/hero-man.png";
import {
  FiHeart,
  FiTrendingUp,
  FiActivity,
  FiUser,
  FiClipboard
} from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { SiNike, SiNewbalance } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-[#0B4DBA] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-16 pt-10 relative">

        {/* ================= HERO + IMAGE WRAPPER ================= */}
        <div className="relative">

          {/* HERO GRID */}
          <div className="grid grid-cols-2 min-h-[640px]">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-[56px] leading-[1.15] font-semibold max-w-[520px]">
                For Your Health
                <br />
                and Fitness Goals
                <br />
                in No Time
              </h1>

              <p className="mt-6 text-[15px] text-blue-100 max-w-[480px] leading-relaxed">
                It doesn’t matter if your goal is to get stronger, burn fat,
                or to just stay fit our world class coaches will guide you
                every step of the way.
              </p>

              <button className="mt-10 px-8 py-3 rounded-full bg-lime-400 text-black text-sm font-semibold">
                Book a Class
              </button>

              {/* SUPPORTED BY */}
              <div className="mt-14">
                <p className="text-xs uppercase tracking-widest text-blue-200 mb-4">
                  Supported by
                </p>

                <div className="flex items-center gap-8 text-blue-100">
                  <SiNike size={28} />
                  <span className="tracking-widest">ESPRIT</span>
                  <FaApple size={24} />
                  <SiNewbalance size={30} />
                </div>
              </div>
            </div>

            {/* RIGHT EMPTY */}
            <div />
          </div>

          {/* ================= HERO IMAGE ================= */}
          <div className="absolute left-[340px] top-24 z-30 -mb-32">

            {/* RINGS */}
            <div className="absolute w-[520px] h-[520px] rounded-full border border-lime-400/30 top-24 left-24" />
            <div className="absolute w-[680px] h-[680px] rounded-full border border-lime-400/20 top-0 left-0" />

            {/* IMAGE */}
            <img
              src={heroImg}
              alt="Fitness model"
              className="relative max-w-[700px]"
            />

            {/* METRICS */}
            <div className="absolute top-40 left-20 bg-[#1E5CCB] rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <FiHeart />
              <div>
                <p className="text-xs opacity-80">Heart Rate</p>
                <p className="text-sm font-semibold">9281 bpm</p>
              </div>
            </div>

            <div className="absolute top-32 right-0 bg-[#1E5CCB] rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <FiTrendingUp />
              <div>
                <p className="text-xs opacity-80">Muscle Rate</p>
                <p className="text-sm font-semibold">2.861</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="relative -mt-20">
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-3 overflow-hidden w-[900px] relative z-10">

            <FeatureCard
              title="Personal Training"
              icon={<FiUser size={20} />}
              link="/programs/personal-training"
            />

            <FeatureCard
              title="Workout Programs"
              highlight
              icon={<FiActivity size={20} />}
              link="/programs/workout-programs"
            />

            <FeatureCard
              title="Program & Diet"
              icon={<FiClipboard size={20} />}
              link="/programs/program-and-diet"
            />
          </div>

          {/* RIGHT BOTTOM TEXT */}
          <div className="absolute right-0 top-[-20px] max-w-[260px]">
            <h3 className="text-[28px] font-semibold leading-tight">
              Training
              <br />
              Program For
              <br />
              You
            </h3>

            <p className="mt-4 text-sm text-blue-100">
              Starting a fitness routine can be intimidating, but it helps to
              have an idea of what to expect before joining any class.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURE CARD ================= */
function FeatureCard({ title, highlight, icon, link }) {
  return (
    <div className={`p-8 ${highlight ? "bg-lime-400" : "bg-white"}`}>
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-md mb-4 ${
          highlight ? "text-black" : "text-blue-600"
        }`}
      >
        {icon}
      </div>

      <h4 className="font-semibold mb-2 text-sm text-black">{title}</h4>

      <p className="text-sm opacity-70 mb-4 text-black">
        It’s a long established fact that a reader will be distracted by the readable content
      </p>

      <Link
        to={link}
        className="text-sm font-medium text-blue-600"
      >
        Learn More →
      </Link>
    </div>
  );
}
