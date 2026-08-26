const BlogCard = ({ blog, onClick }) => {
  return (
    <article>
      <h2 onClick={onClick} className="font-bold text-2xl cursor-pointer">
        {blog.title}
      </h2>
      <p>{blog.body}</p>
    </article>
  );
};

export default BlogCard;
