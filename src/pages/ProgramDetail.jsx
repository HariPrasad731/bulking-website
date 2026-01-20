import { FaPlay } from "react-icons/fa";
import {
  FiClock,
  FiTrendingUp,
  FiBarChart2,
  FiCalendar,
} from "react-icons/fi";
import {
  GiMuscleUp,
  GiBodyBalance,
  GiWeightLiftingUp,
} from "react-icons/gi";

export default function ProgramDetail() {
  return (
    <main className="bg-[#F7F8FA]">

      {/* ================= PROGRAM DETAIL HERO ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pt-20 pb-28">

        <h1 className="text-[44px] font-semibold mb-3">
          Personal <span className="font-light">Training</span>
        </h1>

        <p className="text-gray-500 max-w-[520px] mb-12">
          It’s a long established fact that a reader will be distracted by
          the readable content.
        </p>

        {/* ================= FEATURE TAGS ================= */}
        <div className="flex items-center gap-12 mb-14">
          <FeatureTag
            index="01"
            icon={<GiMuscleUp />}
            text="Power Up"
          />
          <FeatureTag
            index="02"
            icon={<GiBodyBalance />}
            text="Be Flexible"
          />
          <FeatureTag
            index="03"
            icon={<GiWeightLiftingUp />}
            text="Super Body Toning"
          />
        </div>

        <div className="grid grid-cols-[1fr_380px] gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* VIDEO */}
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img
                src="https://img.freepik.com/free-photo/strong-man-training-gym_1303-23478.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Program Video"
                className="w-full h-[420px] object-cover"
              />

              <button className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <FaPlay className="text-blue-600 ml-1" />
                </span>
              </button>
            </div>

            {/* CONTENT */}
            <ContentBlock
              title="What is this class about?"
              text="Pretium sed tempor vestibulum sit urna. Potenti purus sodales in enim nunc. In et auctor fusce sit donec condimentum."
            />

            <ContentBlock
              title="Is this the right fitness class for me?"
              list={[
                "Enim eu turpis egestas pretium aenean pharetra magna ac placerat.",
                "Nunc semper velit netus donec commodo.",
                "Lacus hendrerit aliquam habitant eget faucibus venenatis turpis.",
              ]}
            />

            <ContentBlock
              title="How can I take a trial class?"
              text="Diam ultrices enim nunc ornare id aliquet sed arcu commodo. Aliquam morbi fermentum amet dui ullamcorper."
            />
          </div>

          {/* ================= RIGHT DETAILS CARD ================= */}
          <aside className="bg-white rounded-2xl shadow-sm p-8 h-fit">
            <h3 className="font-semibold mb-8">Details Program</h3>

            <DetailItem
              icon={<FiClock />}
              label="Duration"
              value="60 Minutes"
            />

            <DetailItem
              icon={<FiTrendingUp />}
              label="Intensity"
              value="High"
            />

            <DetailItem
              icon={<FiBarChart2 />}
              label="Fitness Level"
              value="Intermediate"
            />

            <DetailItem
              icon={<FiCalendar />}
              label="Schedule"
              value="Monday, Friday"
            />

            <button className="mt-10 w-full py-3 rounded-full bg-lime-400 text-black font-semibold">
              Book a Class
            </button>
          </aside>

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

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
                Member Review
              </p>

              <p className="text-gray-700 max-w-[640px] mb-8">
                Eget aliquet sit at lacinia. Magna consequat consectetur
                maecenas amet sagittis mi.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Davis Rosser"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium">Davis Rosser</p>
                  <p className="text-sm text-gray-400">Member</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-16">
            <span className="text-xl text-gray-400">←</span>
            <span className="w-3 h-3 bg-blue-600 rounded-full" />
            <span className="text-xl text-gray-900">→</span>
          </div>

        </div>
      </section>

    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */

function FeatureTag({ index, icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium">
      <span className="text-gray-400">{index}</span>
      <span className="text-blue-600 text-lg">{icon}</span>
      <span className="text-blue-600">{text}</span>
    </div>
  );
}

function ContentBlock({ title, text, list }) {
  return (
    <div className="mb-10">
      <h3 className="font-semibold mb-3">{title}</h3>

      {text && (
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      )}

      {list && (
        <ul className="list-decimal ml-5 text-gray-600 text-sm space-y-2">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 mb-4 text-sm">
      <span className="text-blue-600">{icon}</span>
      <span className="text-gray-500">{label}:</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}
