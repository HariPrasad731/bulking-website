import { Link } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaDumbbell } from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp } from "react-icons/gi";

export default function Programs() {
  return (
    <main className="bg-[#F7F8FA]">

      {/* ================= PROGRAMS HERO ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pt-20 pb-28">

        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-xs font-medium rounded-full border border-blue-200 text-blue-600">
            Programs
          </span>
        </div>

        <h1 className="text-center text-[36px] font-semibold mb-14">
          Browse Our Available <br /> Programs
        </h1>

        {/* PROGRAM CARDS */}
        <div className="bg-white rounded-2xl shadow-sm grid grid-cols-3 overflow-hidden max-w-[900px] mx-auto">
          <ProgramCard
            icon={<GiMuscleUp />}
            title="Personal Training"
            slug="personal-training"
          />

          <ProgramCard
            icon={<FaDumbbell />}
            title="Workout Programs"
            slug="workout-programs"
            highlight
          />

          <ProgramCard
            icon={<GiWeightLiftingUp />}
            title="Program & Diet"
            slug="program-diet"
          />
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pb-28">
        <div className="grid grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <h2 className="text-[40px] font-semibold mb-6">FAQs</h2>
            <p className="text-gray-500 text-sm max-w-[360px] mb-8">
              Cras tellus ac dui at sed. Suspendisse feugiat scelerisque
              et, viverra urna imperdiet non malesuada.
            </p>

            {/* ✅ UPDATED: Book a Class → FAQ PAGE */}
            <Link
              to="/faq"
              className="inline-block px-8 py-3 rounded-full bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 transition"
            >
              Book a Class
            </Link>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-sm text-gray-500 mb-6">
              Maybe your question is have been answered, check this out!
            </p>

            <FAQItem
              question="Do I need previous experience for your classes?"
              open
            />
            <FAQItem question="Do you offer a trial class for any of your classes?" />
            <FAQItem question="How long is the class duration?" />
            <FAQItem question="Do you offer on-site classes, or just virtual classes?" />
            <FAQItem question="Do you offer 1-on-1 classes and personal training?" />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-white py-28">
        <div className="max-w-[900px] mx-auto">

          <div className="flex justify-center">
            <span className="px-4 py-1 text-xs font-medium rounded-full border border-blue-200 text-blue-600">
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
                  alt="Davis Rosser"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium text-gray-900">Davis Rosser</p>
                  <p className="text-sm text-gray-400">Member</p>
                </div>
              </div>
            </div>
          </div>

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

/* ================= PROGRAM CARD ================= */
function ProgramCard({ icon, title, slug, highlight }) {
  return (
    <div className={`p-8 ${highlight ? "bg-lime-400" : "bg-white"}`}>
      <div
        className={`text-2xl mb-4 ${
          highlight ? "text-black" : "text-blue-600"
        }`}
      >
        {icon}
      </div>

      <h3 className="font-semibold mb-2">{title}</h3>

      <p className="text-sm text-gray-600 mb-4">
        It’s a long established fact that a reader will be distracted by the readable content
      </p>

      <Link
        to={`/programs/${slug}`}
        className="text-sm font-medium text-blue-600 flex items-center gap-2"
      >
        Learn More
        <span className="w-2 h-2 rounded-full bg-blue-600" />
      </Link>
    </div>
  );
}

/* ================= FAQ ITEM ================= */
function FAQItem({ question, open }) {
  return (
    <div className="border-b py-5 flex items-start justify-between">
      <div>
        <p className="font-medium">{question}</p>

        {open && (
          <p className="text-sm text-gray-500 mt-3 max-w-[520px]">
            Convallis quis sem nulla ipsum sed enim quam ultricies vivamus.
            Dictum vehicula amet tristique imperdiet.
          </p>
        )}
      </div>

      <div className="mt-1">
        {open ? (
          <FiMinus className="text-gray-600" />
        ) : (
          <FiPlus className="text-gray-600" />
        )}
      </div>
    </div>
  );
}
