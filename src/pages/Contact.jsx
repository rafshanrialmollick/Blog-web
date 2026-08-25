import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <p className="text-sm font-medium tracking-wide uppercase text-neutral-500 mb-4">
        Contact
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4">
        Get in touch
      </h1>
      <p className="text-neutral-700 leading-relaxed mb-10">
        Have a question, feedback, or just want to say hi? Send a message below.
      </p>

      {submitted ? (
        <div className="border border-neutral-300 rounded-lg p-6 text-center">
          <p className="font-medium text-neutral-900">Message delivered</p>
          <p className="text-neutral-500 text-sm mt-1">
            Thanks for reaching out, {formData.name || "friend"} — I'll get back
            to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-700 mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white font-medium px-6 py-2.5 rounded-md hover:bg-neutral-800 transition-colors"
          >
            Send message
          </button>
        </form>
      )}
    </main>
  );
};

export default Contact;
