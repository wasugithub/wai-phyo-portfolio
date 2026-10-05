// import { useState } from "react";
// import { personalInfo } from "../data/portfolio";

// const navItems = [
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
//         <a
//           href="#home"
//           className="text-xl font-bold tracking-tight text-slate-900"
//         >
//           Wai Phyo<span className="text-violet-600">.</span>
//         </a>

//         <div className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         <a
//           href={`mailto:${personalInfo.email}`}
//           className="hidden rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 md:block"
//         >
//           Let's Talk
//         </a>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="rounded-lg p-2 text-slate-700 md:hidden"
//           aria-label="Toggle navigation"
//         >
//           ☰
//         </button>
//       </nav>

//       {isOpen && (
//         <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
//           <div className="flex flex-col gap-4">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-sm font-medium text-slate-700 hover:text-violet-600"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          Wai Phyo Paing
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>

          <a href="/#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="/#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="/#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="/#education" onClick={closeMenu}>
            Education
          </a>

          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}