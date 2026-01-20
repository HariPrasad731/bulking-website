import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function BlogDetail() {
  return (
    <main className="bg-white">

      {/* ================= BLOG DETAIL ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pt-24 pb-28">
        <div className="grid grid-cols-[2fr_1fr] gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* LABEL */}
            <span className="inline-block mb-4 text-xs text-gray-400">
              Resource Center
            </span>

            {/* TITLE */}
            <h1 className="text-[40px] leading-tight font-semibold mb-8 max-w-[720px]">
              The 5 effective fitness morning routines you should follow
            </h1>

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              alt="Blog cover"
              className="rounded-2xl w-full h-[420px] object-cover mb-10"
            />

            {/* INTRO */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-[720px]">
              Porta purus vel volutpat id facilisis sem. Rhoncus vitae potenti
              tellus maecenas pellentesque viverra suspendisse. Convallis quis
              sem nulla ipsum sed enim quam ultricies vivamus.
            </p>

            {/* AUTHOR */}
            <div className="flex items-center gap-3 mb-10">
              <span className="w-1 h-6 bg-lime-400 rounded-full" />
              <p className="text-sm text-gray-700">
                Cristofor Geidt{" "}
                <span className="text-gray-400">Training Coach</span>
              </p>
            </div>

            {/* BODY */}
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed max-w-[720px]">
              <p>
                A porta sed nunc amet dolor pharetra. Posuere interdum semper
                duis semper id. Sem sit sed sapien hendrerit phasellus non.
                Venenatis lectus vulputate in lacus arcu.
              </p>

              <p>
                Pharetra lacus diam faucibus sapien ac egestas purus vehicula
                odio. Volutpat justo purus ut tortor.
              </p>

              <p>
                Viverra urna imperdiet non malesuada. In massa id tellus natoque
                augue in et.
              </p>

              <ol className="list-decimal ml-5 space-y-2">
                <li>Enim eu turpis egestas pretium aenean pharetra magna</li>
                <li>Nunc semper velit netus donec commodo</li>
                <li>Lacus hendrerit aliquam habitant eget faucibus</li>
              </ol>
            </div>

            {/* QUOTE */}
            <div className="mt-14 bg-[#F7F8FA] rounded-2xl p-10 max-w-[720px]">
              <div className="text-gray-300 text-[48px] leading-none mb-4">“</div>

              <p className="text-gray-700 mb-6">
                Eget aliquet sit at lacinia. Magna consequat consectetur maecenas
                amet sagittis mi. Mattis cursus dolor amet quam commodo amet in
                sed dui. Risus risus sed sed lectus.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="Coach"
                />
                <div>
                  <p className="text-sm font-medium">Wilson Dorwart</p>
                  <p className="text-xs text-gray-400">Training Coach</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside>

            {/* SHARE */}
            <div className="flex items-center gap-3 mb-10">
              <ShareIcon><FiFacebook /></ShareIcon>
              <ShareIcon><FiLinkedin /></ShareIcon>
              <ShareIcon><FiTwitter /></ShareIcon>
            </div>

            {/* LATEST ARTICLES */}
            <div className="bg-white border rounded-2xl p-6 mb-10">
              <h3 className="font-semibold mb-6">Latest articles</h3>

              <SidebarItem
                category="Fitness"
                title="The 5 effective fitness morning routines you should follow"
                date="Jun 27, 2022"
              />

              <SidebarItem
                category="Health"
                title="8 innovative design ideas to make your resume pop"
                date="Jun 27, 2022"
              />

              <SidebarItem
                category="Fitness"
                title="14 strength-specific training exercises you can do today"
                date="Jun 27, 2022"
              />
            </div>

            {/* CATEGORIES */}
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-semibold mb-6">Categories</h3>

              <Category>Fitness</Category>
              <Category>Health</Category>
              <Category>Recipes</Category>
            </div>

          </aside>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0B4DBA] py-20">
        <div className="max-w-[1200px] mx-auto px-16 flex items-center justify-between text-white">
          <div>
            <h2 className="text-[32px] font-semibold mb-3">
              Discover Your Potential
            </h2>
            <p className="text-blue-200 max-w-[520px] text-sm">
              Workout was started by James and Mount in 2012. It’s our mission to
              help people get fit, stay healthy.
            </p>
          </div>

          <button className="px-8 py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300 transition">
            Get Started
          </button>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function ShareIcon({ children }) {
  return (
    <div className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition cursor-pointer">
      {children}
    </div>
  );
}

function SidebarItem({ category, title, date }) {
  return (
    <div className="mb-6">
      <p className="text-xs text-gray-400 mb-1">{category}</p>
      <p className="text-sm font-medium mb-1">{title}</p>
      <p className="text-xs text-gray-400">{date}</p>
    </div>
  );
}

function Category({ children }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
      {children}
      <span>›</span>
    </div>
  );
}
