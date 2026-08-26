const Marquee = ({ text = "Welcome to my web" }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap  py-3 bg-transparent w-full">
      <div className="inline-block animate-marquee">
        <span className="text-[#221c1c] font-serif text-lg mx-8">{text}</span>
        <span className="text-[black] font-serif text-lg mx-8">{text}</span>
        <span className="text-[black] font-serif text-lg mx-8">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;

