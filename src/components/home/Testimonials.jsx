import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Testimonials() {
  return (
    <section className="bg-[#F8F9FC] py-32">
      <div className="max-w-[900px] mx-auto px-6 text-center relative">

        {/* PILL */}
        <span className="inline-block px-4 py-1 text-sm rounded-full border border-blue-200 text-blue-600 mb-6">
          Review
        </span>

        {/* TITLE */}
        <h2 className="text-[36px] font-semibold leading-tight mb-16">
          What Our Happy
          <br />
          Clients Say
        </h2>

        {/* REVIEW CARD */}
        <div className="relative max-w-[640px] mx-auto">

          {/* QUOTE ICON */}
          <span className="absolute -left-10 -top-6 text-[80px] text-gray-200 font-serif">
            “
          </span>

          <p className="text-left text-[18px] leading-relaxed text-gray-700 mb-10">
            Eget aliquet sit at lacinia. Magna consequat consectetur maecenas
            amet sagittis mi. Mattis cursus dolor amet quam commodo amet in
            sed dui. Risus risus sed sed lectus.
          </p>

          {/* USER */}
          <div className="flex items-center gap-4 mb-12">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="client"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-sm">Davis Rosser</p>
              <p className="text-xs text-gray-500">Member</p>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-6">
          <button className="text-gray-400 hover:text-black transition">
            <FiChevronLeft size={22} />
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
          </div>

          <button className="text-gray-400 hover:text-black transition">
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
