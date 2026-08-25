// import { Link, useParams } from "react-router";
// import useBlogs from "../hook/useBlogs";

// const BlogDetailes = () => {
//   const { id } = useParams();

//   const { blogs, loading, error } = useBlogs();

//   if (loading) {
//     return <h1>Loading....</h1>;
//   }
//   if (error) {
//     return <h1> {error} </h1>;
//   }

//   const blog = blogs.find((blog) => blog.id === Number(id));

//   if (!blog) {
//     return (
//       <main>
//         <h1>Blog is not Found</h1>
//         <Link to="/blogs">Back to blog</Link>
//       </main>
//     );
//   }

//   return (
//     <main className="single-bow m-5">
//       <h1 className="text-center text-[20px] py-5 font-semibold">
//         {blog.title}
//       </h1>
//       <p>{blog.body}</p>
//       <Link to="/blogs"> &lt; - Back to blog </Link>
//     </main>
//   );
// };

// export default BlogDetailes;



import { Link, useParams } from "react-router";
import useBlogs from "../hook/useBlogs";

const BlogDetailes = () => {
  const { id } = useParams();
  const { blogs, loading, error } = useBlogs();

  if (loading) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse mb-6" />
        <div className="h-10 w-full bg-neutral-200 rounded animate-pulse mb-3" />
        <div className="h-10 w-2/3 bg-neutral-200 rounded animate-pulse mb-8" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-neutral-700 font-medium">Couldn't load this post</p>
        <p className="text-neutral-500 text-sm mt-1">{error}</p>
        <Link
          to="/blogs"
          className="inline-block mt-6 text-sm font-medium underline underline-offset-4 text-neutral-700 hover:text-black"
        >
          ← Back to blog
        </Link>
      </main>
    );
  }

  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-2xl font-bold">Post not found</h1>
        <p className="text-neutral-500 text-sm mt-2">
          It may have been moved or never existed.
        </p>
        <Link
          to="/blogs"
          className="inline-block mt-6 text-sm font-medium underline underline-offset-4 text-neutral-700 hover:text-black"
        >
          ← Back to blog
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link
        to="/blogs"
        className="inline-block text-sm font-medium text-neutral-500 hover:text-black mb-8 transition-colors"
      >
        ← Back to blog
      </Link>

      <p className="text-sm font-medium tracking-wide uppercase text-neutral-500 mb-3">
        Post #{blog.id}
      </p>

      <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-8">
        {blog.title}
      </h1>

      <div className="prose-content text-neutral-700 leading-relaxed whitespace-pre-line">
        {blog.body}
      </div>
    </main>
  );
};

export default BlogDetailes;