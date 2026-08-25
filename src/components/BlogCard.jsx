const BlogCard = ({ blog }) => {
  return (
    <article>
      <h2 className="font-bold text-2xl">{blog.title}</h2>
      <p>{blog.body}</p>
    </article>
  );
};

export default BlogCard;
