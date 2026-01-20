import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const BLOG_SLUG = "the-5-effective-fitness-morning-routines-you-should-follow";

export default function Blog() {
  return (
    <main className="bg-white">

      {/* ================= FEATURED NEWS ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pt-24 pb-20">

        <span className="inline-block mb-6 px-4 py-1 text-xs rounded-full border border-blue-200 text-blue-600">
          Resource Center
        </span>

        <h1 className="text-[44px] font-semibold mb-12">
          Featured <span className="font-light">News</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr] gap-12">

          {/* LEFT FEATURED */}
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20250305/pngtree-fitness-motivation-intense-gym-workout-for-muscle-growth-image_17069571.jpg"
              className="rounded-2xl mb-6 w-full h-[360px] object-cover"
              alt="Featured blog"
            />

            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                Featured
              </span>
              <span className="text-xs text-gray-400">Nov 22, 2022</span>
            </div>

            <h3 className="text-[24px] font-semibold mb-3">
              The interesting mental health benefits of exercise
            </h3>

            <p className="text-gray-500 mb-4 max-w-[520px]">
              Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada...
            </p>

            <Link
              to={`/blog/${BLOG_SLUG}`}
              className="flex items-center gap-2 text-sm font-medium text-blue-600"
            >
              Read More <FiArrowRight />
            </Link>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-8">
            <SideBlog
              image="https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
            />
            <SideBlog
              image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            />
            <SideBlog
              image="https://linkspaces.co.uk/wp-content/uploads/2024/05/gb-botanica-gym-link-spaces-slough.jpg"
            />
          </div>

        </div>
      </section>

      {/* ================= TOPIC MATCH ================= */}
      <section className="max-w-[1440px] mx-auto px-16 pb-28">

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[28px] font-semibold">
            Topic Match For You
          </h2>

          <div className="flex items-center gap-4 text-sm">
            <Filter active>All</Filter>
            <Filter>Fitness</Filter>
            <Filter>Health</Filter>
            <Filter>Recipes</Filter>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12">
          <BlogCard category="Fitness" image="https://images.unsplash.com/photo-1574680096145-d05b474e2155" />
          <BlogCard category="Health" image="https://explosivewhey.com/cdn/shop/articles/best-workout-routine-for-gym-beginners-135325.png" />
          <BlogCard category="Fitness" image="https://images.unsplash.com/photo-1517964603305-11c0f6f66012" />
          <BlogCard category="Health" image="https://images.unsplash.com/photo-1558611848-73f7eb4001a1" />
          <BlogCard category="Fitness" image="https://images.unsplash.com/photo-1576678927484-cc907957088c" />
          <BlogCard category="Fitness" image="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0" />
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
              Workout was started by James and Mount in 2012. It’s our mission to help people get fit, stay healthy.
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

function SideBlog({ image }) {
  return (
    <Link to={`/blog/${BLOG_SLUG}`} className="flex gap-5 group">
      <img
        src={image}
        className="w-[120px] h-[90px] rounded-xl object-cover"
        alt="Blog thumbnail"
      />

      <div>
        <p className="text-xs text-gray-400 mb-2">Nov 22, 2022</p>
        <h4 className="text-sm font-medium leading-snug group-hover:text-blue-600">
          The interesting mental health benefits of exercise
        </h4>
      </div>
    </Link>
  );
}

function BlogCard({ category, image }) {
  return (
    <div>
      <img
        src={image}
        className="rounded-2xl mb-4 w-full h-[220px] object-cover"
        alt="Blog"
      />

      <div className="flex items-center justify-between mb-2 text-xs text-gray-400">
        <span>{category}</span>
        <span>Nov 22, 2022</span>
      </div>

      <h3 className="font-semibold mb-2">
        The interesting mental health benefits of exercise
      </h3>

      <p className="text-sm text-gray-500 mb-3">
        Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada...
      </p>

      <Link
        to={`/blog/${BLOG_SLUG}`}
        className="flex items-center gap-2 text-sm font-medium text-blue-600"
      >
        Read More <FiArrowRight />
      </Link>
    </div>
  );
}

function Filter({ children, active }) {
  return (
    <button
      className={`px-4 py-1 rounded-full text-xs ${
        active
          ? "bg-lime-400 text-black font-medium"
          : "border border-gray-200 text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}
