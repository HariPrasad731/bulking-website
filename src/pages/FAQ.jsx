import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "Do I need previous experience for your classes?",
    a: "Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui.",
  },
  { q: "Do you offer a trial class for any of your classes?" },
  { q: "How long is the class duration?" },
  { q: "Do you offer on-site classes, or just virtual classes?" },
  { q: "Do you offer 1-on-1 classes and personal training?" },
  { q: "Can I customize my workout plan on this website?" },
  { q: "Are the workouts on this website suitable for beginners?" },
  { q: "Are there any cost associated with using this website?" },
  { q: "Is it necessary to have any equipment to do the workouts on this website?" },
  { q: "Are there any personal trainers available on this website?" },
  { q: "Are there any videos available on this website?" },
  { q: "Is this website available on mobile?" },
  { q: "What is the best way to start a fitness routine?" },
  { q: "How often should I exercise?" },
  { q: "What are the best exercises for weight loss?" },
  { q: "How can I stay motivated to exercise?" },
  { q: "What are some common mistakes people make when starting a fitness routine?" },
  { q: "How can I prevent injury while exercising?" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="bg-white">

      {/* ================= FAQ ================= */}
      <section className="max-w-[1000px] mx-auto px-16 pt-24 pb-28">

        <h1 className="text-[40px] font-semibold text-center mb-4">FAQs</h1>
        <p className="text-gray-400 text-sm text-center max-w-[520px] mx-auto mb-14">
          Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada.
        </p>

        <p className="text-center text-sm text-gray-600 mb-10">
          Maybe your question is have been answered, check this out!
        </p>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b pb-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">
                  {item.q}
                </h3>

                <span className="w-6 h-6 flex items-center justify-center rounded-full border text-xs">
                  {openIndex === i ? <FiMinus /> : <FiPlus />}
                </span>
              </div>

              {openIndex === i && item.a && (
                <p className="text-sm text-gray-500 mt-4 max-w-[820px]">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-[#F7F8FA] py-28">
        <div className="max-w-[640px] mx-auto px-16 text-center">

          <h2 className="text-[36px] font-semibold mb-4">
            How can we <span className="font-bold">help you?</span>
          </h2>

          <p className="text-sm text-gray-400 mb-14">
            Fill up the form and our team will get back to you within 24 hours.
          </p>

          <form className="space-y-6 text-left">

            <div>
              <label className="text-xs text-gray-500">Full Name</label>
              <input
                type="text"
                placeholder="What’s your Name?"
                className="w-full mt-2 px-6 py-4 rounded-full border outline-none text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Email</label>
              <input
                type="email"
                placeholder="What’s your Email?"
                className="w-full mt-2 px-6 py-4 rounded-full border outline-none text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Message</label>
              <textarea
                placeholder="Write your message..."
                className="w-full mt-2 px-6 py-4 rounded-2xl border outline-none text-sm h-[140px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-10 py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300 transition"
              >
                Submit Question
              </button>
            </div>

          </form>
        </div>
      </section>

    </main>
  );
}
