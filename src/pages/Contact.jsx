import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <main className="bg-[#F7F8FA]">

      {/* ================= CONTACT ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pt-24 pb-40">

        <div className="grid grid-cols-[1fr_420px] gap-20">

          {/* ================= LEFT FORM ================= */}
          <div>

            <h1 className="text-[48px] font-semibold mb-4">
              Let's get in touch!
            </h1>

            <p className="text-gray-500 max-w-[520px] mb-14">
              Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et,
              viverra urna imperdiet non malesuada.
            </p>

            <form className="space-y-8 max-w-[520px]">

              {/* FULL NAME */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="What’s your Name?"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="What’s your Email?"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="What’s your Phone?"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Input Title
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 text-sm outline-none resize-none focus:ring-2 focus:ring-lime-400"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-6 px-10 py-4 rounded-full bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <aside className="bg-white rounded-2xl shadow-sm p-10 h-fit">

            <h3 className="font-semibold mb-3">
              Contact Details
            </h3>

            <p className="text-sm text-gray-500 mb-8">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">

              {/* PHONE */}
              <ContactItem
                icon={<FiPhone />}
                text="+1 432 1234 234"
              />

              {/* EMAIL */}
              <ContactItem
                icon={<FiMail />}
                text="hello@nguli.com"
              />

              {/* ADDRESS */}
              <ContactItem
                icon={<FiMapPin />}
                text="105 Street, Seattle-US"
              />

            </div>

          </aside>
        </div>
      </section>

    </main>
  );
}



function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}
