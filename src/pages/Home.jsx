// import BlogCard from "../components/BlogCard";
// import useBlogs from "../hook/useBlogs";

// const Home = () => {
//   const { blogs, loading, error } = useBlogs();

//   const topBlogs = blogs.slice(0, 12);

//   if (loading) {
//     return <h1>Loading....</h1>;
//   }
//   if (error) {
//     return <h1> {error} </h1>;
//   }

//   return (
//     <main>
//       <h1 className="text-center text-[20px] py-5 font-semibold">Top Blogs</h1>
//       <div>
//         {topBlogs.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Home;

import BlogCard from "../components/BlogCard";
import Marquee from "../components/Marquee";
import useBlogs from "../hook/useBlogs";

const Home = () => {
  const { blogs, loading, error } = useBlogs();

  const topBlogs = blogs.slice(0, 12);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-sm font-medium tracking-wide uppercase text-neutral-500 mb-4">
            Est. 2026 — Words worth reading
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
            Stories, thoughts, and things worth writing down.
          </h1>
          <p className="mt-5 text-neutral-600 max-w-md">
            A running collection of essays and notes. Updated whenever there's
            something worth saying.
          </p>
        </div>
      </section>

      <Marquee/>

      {/* Top blogs */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl font-bold">Top Blogs</h2>
          {!loading && !error && (
            <span className="text-sm text-neutral-500">
              {topBlogs.length} {topBlogs.length === 1 ? "post" : "posts"}
            </span>
          )}
        </div>

        {loading && <LoadingGrid />}

        {error && (
          <div className="text-center py-16 border border-dashed border-neutral-300 rounded-lg">
            <p className="text-neutral-700 font-medium">Couldn't load blogs</p>
            <p className="text-neutral-500 text-sm mt-1">{error}</p>
          </div>
        )}

        {!loading && !error && topBlogs.length === 0 && (
          <div className="text-center py-16 border border-dashed border-neutral-300 rounded-lg">
            <p className="text-neutral-700 font-medium">No blogs yet</p>
            <p className="text-neutral-500 text-sm mt-1">
              Check back soon — new posts show up here first.
            </p>
          </div>
        )}

        {!loading && !error && topBlogs.length > 0 && (
          <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

const LoadingGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="h-56 rounded-lg bg-neutral-200/60 animate-pulse"
      />
    ))}
  </div>
);

export default Home;
