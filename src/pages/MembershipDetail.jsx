import { FiCheck } from "react-icons/fi";
import { FaDumbbell } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // ✅ ADD

export default function MembershipDetail() {
  const navigate = useNavigate(); // ✅ ADD

  return (
    <main className="bg-[#F7F8FA]">

      {/* ================= HERO ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pt-20 pb-28">

        {/* TITLE */}
        <h1 className="text-[44px] font-semibold mb-3">
          Basic <span className="font-light">Plan</span>
        </h1>

        <p className="text-gray-500 max-w-[520px] mb-12">
          It’s a long established fact that a reader will be distracted by
          the readable content
        </p>

        {/* FEATURES */}
        <div className="flex items-center gap-16 mb-16">
          <FeatureItem index="01" label="Power Up" icon={<GiMuscleUp />} />
          <FeatureItem index="02" label="Be Flexible" icon={<MdOutlineFitnessCenter />} />
          <FeatureItem index="03" label="Super Body Toning" icon={<FaDumbbell />} />
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-[1fr_380px] gap-20">

          {/* LEFT */}
          <div>
            <ContentBlock
              title="About the plan"
              text="Diam tortor tortor diam mauris. Feugiat fames in et neque. Sem mollis sagittis id bibendum vitae magna risus. Feugiat adipiscing gravida bibendum adipiscing vel fermentum potenti."
            />

            <ContentBlock
              title="Is this the right package for me?"
              list={[
                "Enim eu turpis egestas pretium aenean pharetra magna ac placerat.",
                "Nunc semper velit netus donec commodo.",
                "Lacus hendrerit aliquam habitant eget faucibus venenatis turpis.",
              ]}
            />
          </div>

          {/* RIGHT CARD */}
          <aside className="bg-white rounded-2xl shadow-sm p-8 h-fit -mt-48">
            <h3 className="font-semibold mb-6">Get your package</h3>

            <p className="text-sm text-gray-500 mb-6">
              Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada.
            </p>

            <p className="text-sm font-medium mb-4">What’s Includes:</p>

            <ul className="space-y-3 mb-8">
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

            <div className="text-[28px] font-semibold mb-6">
              $149.00<span className="text-sm text-gray-400">/Month</span>
            </div>

            {/* ✅ UPDATED BUTTON */}
            <button
              onClick={() => navigate("/payment")}
              className="w-full py-3 rounded-full bg-lime-400 text-black font-semibold mb-3"
            >
              Purchase Now
            </button>

            <button className="w-full py-3 rounded-full border text-sm">
              Add to Cart
            </button>
          </aside>

        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-white py-28">
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
            <div className="text-gray-200 text-[96px] leading-none">“</div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
                Member Review
              </p>

              <p className="text-gray-700 max-w-[640px] mb-8">
                Eget aliquet sit at lacinia. Magna consequat consectetur
                maecenas amet sagittis mi. Mattis cursus dolor amet
                quam commodo amet in sed dui.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="Member"
                />

                <div>
                  <p className="font-medium">Davis Rosser</p>
                  <p className="text-sm text-gray-400">Member</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-16">
            <span className="text-gray-400 text-xl">←</span>
            <span className="w-3 h-3 bg-blue-600 rounded-full" />
            <span className="text-gray-900 text-xl">→</span>
          </div>

        </div>
      </section>

    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */

function FeatureItem({ icon, label, index }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="text-[28px] text-gray-800">{icon}</div>
        <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-lime-400 rounded-full border-2 border-white" />
      </div>

      <div>
        <p className="text-xs text-gray-400">{index}</p>
        <p className="text-blue-600 font-medium">{label}</p>
      </div>
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
