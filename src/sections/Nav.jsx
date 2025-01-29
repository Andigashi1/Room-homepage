import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import logo from "../assets/images/logo.svg";

function Nav({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`absolute top-0 left-0 flex justify-between items-center lg:justify-start lg:gap-20 z-50 w-full px-6 py-8 lg:px-12 lg:py-12 ${
        isMenuOpen && "bg-white"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="cursor-pointer self-start lg:hidden"
      >
        <img
          src={isMenuOpen ? iconClose : iconHamburger}
          alt={`${isMenuOpen ? "close" : "open"} icon`}
        />
      </button>

      {!isMenuOpen && (
        <img className="w-16 h-4 mx-auto lg:mx-0" src={logo} alt="logo" />
      )}

      <ul
        className={`gap-8 lg:flex lg:text-white [&>*]:border-b-2 [&>*]:border-transparent [&>*]:hover:border-white [&>*]:cursor-pointer ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default Nav;
