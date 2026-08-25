import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(true);

  // Error State
  const [error, setError] = useState(null);

  const featchBlogs = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetched Data");
      }

      const data = await res.json();

      setBlogs(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    featchBlogs();
  }, []);

  return { blogs, error, loading };
};

export default useBlogs;
