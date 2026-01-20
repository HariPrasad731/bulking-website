import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F8F9FC] py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* PILL */}
        <span className="inline-block px-4 py-1 text-sm rounded-full border border-blue-200 text-blue-600 mb-6">
          Membership
        </span>

        {/* TITLE */}
        <h2 className="text-[36px] font-semibold leading-tight mb-20">
          Crushing your health and fitness goals
          <br />
          starts here...
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-8 items-end">

          {/* FREE PLAN */}
          <PlanCard
            price="$0"
            plan="Free Plan"
            slug="free"
            features={[
              "1 classes per month",
              "Access to online classes",
              "10 health & fitness guides",
            ]}
            onPurchase={(slug) => navigate(`/membership/${slug}`)}
          />

          {/* BASIC PLAN */}
          <PlanCard
            price="$149.00"
            plan="Basic Plan"
            slug="basic"
            highlight
            features={[
              "8 classes per month",
              "All in basic package",
              "1-on-1 personal training",
            ]}
            onPurchase={(slug) => navigate(`/membership/${slug}`)}
          />

          {/* PRO PLAN */}
          <PlanCard
            price="$289.00"
            plan="Professional Plan"
            slug="pro"
            features={[
              "20 classes per month",
              "All in Intermediate package",
              "Access to my online tutorials",
            ]}
            onPurchase={(slug) => navigate(`/membership/${slug}`)}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= PLAN CARD ================= */
function PlanCard({ price, plan, features, highlight, slug, onPurchase }) {
  return (
    <div
      className={`rounded-2xl p-10 text-left shadow-sm ${
        highlight
          ? "bg-[#0B4DBA] text-white scale-105"
          : "bg-white text-black"
      }`}
    >
      {/* PRICE */}
      <div className="mb-2">
        <span className="text-[36px] font-semibold">{price}</span>
        <span className="text-sm opacity-60">/Month</span>
      </div>

      {/* PLAN NAME */}
      <p
        className={`mb-8 font-medium ${
          highlight ? "text-white" : "text-blue-600"
        }`}
      >
        {plan}
      </p>

      {/* FEATURES */}
      <ul className="space-y-4 mb-10">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                highlight
                  ? "bg-lime-400 text-black"
                  : "border border-blue-200 text-blue-600"
              }`}
            >
              <FiCheck size={12} />
            </span>
            <span className={highlight ? "opacity-90" : "opacity-70"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => onPurchase(slug)}
        className="w-full py-3 rounded-full bg-lime-400 text-black text-sm font-semibold"
      >
        Purchase Plan
      </button>
    </div>
  );
}
