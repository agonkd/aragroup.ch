import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/brand/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Über Uns", path: "/uber" },
    { text: "Projektierung", path: "/projektierung" },
    { text: "Dienstleistungen", path: "/dienstleistungen" },
    { text: "Preise", path: "/preise" },
  ];

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isSmallScreen = window.innerWidth < 1280;

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav
      id="navbar"
      aria-label="Navigation bar"
      className="xl:px-[10vw] md:px-[4vw] px-8 py-4 lg:bg-[#1E1E1E] flex justify-between items-center text-xl font-semibold lg:relative absolute top-0 left-0 w-full z-50"
    >
      <a href="/" aria-label="Redirects to home page.">
        <img src={logo} alt="ARAGROUP logo" className="w-48" />
      </a>
      <ul
        className={`transition-all xl:bg-transparent bg-black xl:h-auto h-screen z-[999] xl:p-0 px-8 py-16 flex xl:flex-row flex-col flex-1 xl:justify-center 2xl:gap-16 gap-8 xl:relative absolute w-full top-0 left-0 ${
          isSmallScreen
            ? isNavbarOpen
              ? "opacity-1 visible"
              : "opacity-0 invisible"
            : ""
        } `}
      >
        {navLinks.map((link) => (
          <li key={link.path} className="w-fit z-10">
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={toggleNavbar}
            >
              {link.text}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/contact"
            className="xl:hidden w-fit block bg-primary text-white py-3 px-6 rounded-lg"
            onClick={toggleNavbar}
          >
            <Link to="/contact">Kontaktieren Sie uns!</Link>
          </a>
        </li>
      </ul>
      <a
        href="/contact"
        className="xl:block hidden bg-primary text-white py-3 px-6 rounded-lg"
      >
        <Link to="/contact">Kontaktieren Sie uns!</Link>
      </a>
      <button
        id="navToggler"
        type="button"
        onClick={toggleNavbar}
        className="z-[999]"
      >
        <CiMenuFries className="xl:hidden block text-3xl" />
      </button>
    </nav>
  );
}

export default Navbar;
