import trainerImg from "../assets/images/about/trainer.png";
import { FiHeart } from "react-icons/fi";

export default function About() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#0B4DBA] text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-16 pt-24 pb-48">

          <div className="grid grid-cols-[1fr_520px_1fr] gap-12">

            {/* LEFT TEXT */}
            <div>
              <span className="inline-block mb-6 px-4 py-1 text-xs rounded-full border border-lime-400 text-lime-400">
                About Me
              </span>

              <h1 className="text-[56px] leading-tight font-semibold mb-6">
                Hi, I’m <span className="text-lime-400">Adison</span>, <br />
                your personal trainer
              </h1>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative flex justify-center translate-y-52">

              <div className="absolute w-[420px] h-[420px] rounded-full border border-lime-400/40" />
              <div className="absolute w-[560px] h-[560px] rounded-full border border-lime-400/20" />

              <img
                src={trainerImg}
                alt="Personal Trainer"
                className="relative z-10 max-h-[520px]"
              />

              <div className="absolute left-[-40px] bottom-24 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl">
                <p className="text-sm font-semibold">1,400+</p>
                <p className="text-xs text-blue-100">Classes taught</p>
              </div>

              <div className="absolute right-[-40px] top-24 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl">
                <p className="text-sm font-semibold">120+</p>
                <p className="text-xs text-blue-100">Years experience</p>
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="text-blue-100 pt-16">
              <h3 className="text-white font-semibold mb-4">
                What’s my story?
              </h3>

              <p className="text-sm leading-relaxed max-w-[360px]">
                Consectetur adipiscing elit. Odio amet egestas dignissim eu
                nunc. Id pulvinar enim volutpat tellus. Cras tellus ac dui
                at sed. Suspendisse feugiat scelerisque et, viverra urna
                imperdiet non malesuada.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="max-w-[1440px] mx-auto px-16 py-28">

        <div className="text-center mb-20">
          <h2 className="text-[36px] font-semibold mb-4">
            My Core Work Values
          </h2>
          <p className="text-gray-500 max-w-[520px] mx-auto">
            Consectetur adipiscing elit. Odio amet egestas dignissim eu nunc.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <ValueCard title="Commitment" />
          <ImageCard image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" />

          <ImageCard image="https://cdn.betterme.world/articles/wp-content/uploads/2025/08/BP-372-30-day-gym-workout-plan.png" />
          <ValueCard title="Motivation" />

          <ValueCard title="Passion" />
          <ImageCard image="https://static.vecteezy.com/system/resources/thumbnails/023/010/709/small/ai-generative-strong-athletic-men-pumping-up-muscles-workout-bodybuilding-concept-muscular-bodybuilder-men-doing-exercises-in-gym-naked-photo.jpg" />
        </div>
      </section>

      {/* ================= TESTIMONIAL (FIXED) ================= */}
      <section className="bg-[#F7F8FA] py-28">
        <div className="max-w-[900px] mx-auto">

          <div className="flex justify-center">
            <span className="px-4 py-1 text-xs rounded-full border border-blue-200 text-blue-600">
              Review
            </span>
          </div>

          <h2 className="text-[36px] font-semibold mt-6 mb-20 text-center">
            What Our Happy <br /> Clients Say
          </h2>

          <div className="flex gap-12 items-start">

            <div className="text-gray-200 text-[96px] leading-none select-none">
              “
            </div>

            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
                Member Review
              </p>

              <p className="text-gray-700 text-base leading-relaxed max-w-[640px] mb-8">
                Eget aliquet sit at lacinia. Magna consequat consectetur
                maecenas amet sagittis mi. Mattis cursus dolor amet
                quam commodo amet in sed dui. Risus risus sed sed lectus.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-12 h-12 rounded-full object-cover"
                  alt="Client"
                />

                <div>
                  <p className="font-medium text-gray-900">Davis Rosser</p>
                  <p className="text-sm text-gray-400">Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="flex justify-center items-center gap-6 mt-16">
            <button className="text-gray-400 text-xl">←</button>

            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
            </div>

            <button className="text-gray-900 text-xl">→</button>
          </div>

        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function ValueCard({ title }) {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <FiHeart className="text-lime-400" />
        <h3 className="font-semibold">{title}</h3>
      </div>

      <p className="text-sm text-gray-500">
        Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et,
        viverra urna imperdiet non malesuada.
      </p>
    </div>
  );
}

function ImageCard({ image }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm">
      <img src={image} alt="Fitness" className="w-full h-full object-cover" />
    </div>
  );
}
