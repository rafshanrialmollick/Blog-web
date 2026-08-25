// import { NavLink } from "react-router";

// const Header = () => {
//   const navLink = ({ isActive }) => ({
//     color: isActive ? "white" : "black",
//   });

//   return (
//     <header className="flex items-center ">
//       <div className="logo flex flex-1/3 gap-4  items-center p-5">
//         <NavLink to="/">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmc3LOYy5_7izWb_-OG180hw2_uAL9g4kFYpB-dfZnQ&s=10"
//             alt="logo"
//             className="w-10 rounded-md"
//           />
//         </NavLink>
//         <NavLink to="/">
//           <h1 className="text-2xl  font-bold">My Blog</h1>
//         </NavLink>
//       </div>
//       <nav className="flex flex-2/3 justify-end px-10">
//         <ul className="flex gap-5 items-center font-bold text-[17px]  ">
//           <li>
//             <NavLink to="/" style={navLink}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" style={navLink}>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/blogs" style={navLink}>
//               Blogs
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" style={navLink}>
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const linkClass = ({ isActive }) =>
    `relative py-1 transition-colors duration-200 ${
      isActive ? "text-black" : "text-neutral-500 hover:text-black"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200 rounded-lg ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 ">
        <NavLink to="/" className="flex items-center gap-3 group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmc3LOYy5_7izWb_-OG180hw2_uAL9g4kFYpB-dfZnQ&s=10"
            alt="logo"
            className="w-9 h-9 rounded-md object-cover"
          />
          <span className="text-xl font-serif font-bold tracking-tight text-black">
            My Blog
          </span>
        </NavLink>

        <nav>
          <ul className="flex gap-8 items-center text-sm font-medium">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
