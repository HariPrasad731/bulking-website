import { FiCheck, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Membership() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#F7F8FA]">

      {/* ================= MEMBERSHIP HERO ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pt-20 pb-24 text-center">

        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-xs font-medium rounded-full border border-blue-200 text-blue-600">
            Membership
          </span>
        </div>

        <h1 className="text-[36px] font-semibold mb-16">
          Compare Our Plane and <br /> Find Your
        </h1>

        {/* ================= PRICING CARDS ================= */}
        <div className="grid grid-cols-3 gap-8 max-w-[1000px] mx-auto mb-20">

          <PlanCard
            price="$0"
            title="Free Plan"
            desc="It’s a long established fact that a reader will be distracted by the readable content"
            onPurchase={() => navigate("/membership/free")}
          />

          <PlanCard
            price="$149.00"
            title="Basic Plan"
            highlight
            desc="It’s a long established fact that a reader will be distracted by the readable content"
            onPurchase={() => navigate("/membership/basic")}
          />

          <PlanCard
            price="$289.00"
            title="Professional Plan"
            desc="It’s a long established fact that a reader will be distracted by the readable content"
            onPurchase={() => navigate("/membership/pro")}
          />
        </div>

        {/* ================= COMPARISON TABLE ================= */}
        <div className="max-w-[1100px] mx-auto">

          <div className="text-left font-semibold text-blue-600 mb-4">
            Overview
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">

            <TableRow label="Classes per month" values={["1", "8", "20"]} />
            <TableRow label="Access to online classes" values={[true, true, true]} />
            <TableRow label="Health & fitness guides" values={[true, true, true]} />
            <TableRow label="Full Warmup guide" values={[true, true, true]} />
            <TableRow label="Access video Link" values={[false, true, true]} />
            <TableRow label="Full diet plan" values={[false, true, true]} />
            <TableRow label="Nutritional support" values={[false, true, true]} />
            <TableRow label="Full customize plan" values={[false, false, true]} />
            <TableRow label="Daily progress check up" values={[false, false, true]} />
            <TableRow label="All Intermediate package" values={[false, false, true]} />

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

/* ================= COMPONENTS ================= */

function PlanCard({ price, title, desc, highlight, onPurchase }) {
  return (
    <div
      className={`rounded-2xl p-8 text-left ${
        highlight ? "bg-blue-600 text-white" : "bg-white"
      }`}
    >
      <h3 className="text-[28px] font-semibold mb-1">
        {price}
        <span className="text-sm opacity-70">/Month</span>
      </h3>

      <p className={`font-medium mb-3 ${highlight ? "text-white" : "text-blue-600"}`}>
        {title}
      </p>

      <p className={`text-sm mb-6 ${highlight ? "text-blue-100" : "text-gray-500"}`}>
        {desc}
      </p>

      <button
        onClick={onPurchase}
        className="w-full py-3 rounded-full font-semibold bg-lime-400 text-black"
      >
        Purchase Plan
      </button>
    </div>
  );
}

function TableRow({ label, values }) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-8 py-4 border-b last:border-b-0 text-sm">
      <p className="text-gray-600">{label}</p>

      {values.map((val, i) => (
        <div key={i} className="flex justify-center">
          {typeof val === "boolean" ? (
            val ? <FiCheck className="text-green-500" /> : <FiX className="text-red-400" />
          ) : (
            <span>{val}</span>
          )}
        </div>
      ))}
    </div>
  );
}
