export default function Discover() {
  return (
    <section className="bg-[#0B4DBA]">
      <div className="max-w-[1440px] mx-auto px-16 py-24 flex items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-[520px]">
          <h2 className="text-[36px] font-semibold text-white mb-4">
            Discover Your Potential
          </h2>

          <p className="text-blue-200 text-sm leading-relaxed">
            Workout was started by James and Mount in 2012. It’s our mission to
            help people in Denver get fit, stay healthy, and live life on their
            terms without fitness being an obstacle.
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <button className="px-10 py-4 rounded-full bg-lime-400 text-black font-medium hover:bg-lime-300 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
