// import BlogCard from "../components/BlogCard";
// import useBlogs from "../hook/useBlogs";

// const Blogs = () => {
//   const { blogs, error, loading } = useBlogs();

//   if (loading) {
//     return <h1>Loading....</h1>;
//   }
//   if (error) {
//     return <h1> {error} </h1>;
//   }
//   return (
//     <main>
//       <h1 className="text-center text-[20px] py-5 font-semibold">All Blogs</h1>
//       <div className="blog-grid ">
//         {blogs.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Blogs;

import BlogCard from "../components/BlogCard";
import useBlogs from "../hook/useBlogs";

const Blogs = () => {
  const { blogs, error, loading } = useBlogs();

  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold">All Blogs</h1>
        {!loading && !error && (
          <span className="text-sm text-neutral-500">
            {blogs.length} {blogs.length === 1 ? "post" : "posts"}
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

      {!loading && !error && blogs.length === 0 && (
        <div className="text-center py-16 border border-dashed border-neutral-300 rounded-lg">
          <p className="text-neutral-700 font-medium">No blogs yet</p>
          <p className="text-neutral-500 text-sm mt-1">
            Check back soon — new posts show up here first.
          </p>
        </div>
      )}

      {!loading && !error && blogs.length > 0 && (
        <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </main>
  );
};

const LoadingGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 9 }).map((_, i) => (
      <div
        key={i}
        className="h-56 rounded-lg bg-neutral-200/60 animate-pulse"
      />
    ))}
  </div>
);

export default Blogs;
