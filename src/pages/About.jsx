// const About = () => {
//   return <div>About</div>;
// };

// export default About;

const About = () => {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <p className="text-sm font-medium tracking-wide uppercase text-neutral-500 mb-4">
        About
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
        Hi, I'm the person behind this blog.
      </h1>
      <div className="space-y-4 text-neutral-700 leading-relaxed">
        <p>
          This is a small corner of the internet where I write down things worth
          remembering — ideas, notes, and the occasional half-formed thought
          that turned into something longer.
        </p>
        <p>
          No fixed schedule, no single topic. Just whatever felt worth putting
          into words at the time.
        </p>
      </div>
    </main>
  );
};

export default About;
