import { useState } from "react";
import logo from "../assets/logorounded.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow-xl h-24 bg-gray-300 flex justify-between items-center px-6">
            {/* Logo */}
            <div className="flex items-center space-x-4">
                <img
                    src={logo}
                    alt="Learn from Home Logo"
                    className="w-16 h-16 object-contain bg-white rounded-full shadow-lg"
                />
                <span className="font-playwrite text-blue-900 text-xl font-bold tracking-wide">
                    Learn From Home
                </span>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex space-x-6 font-playwrite">
                <a href="#price" className=" text-blue-600 hover:text-yellow-500">
                    Price
                </a>
                <a href="#about" className="text-blue-600 hover:text-yellow-500">
                    About
                </a>
                <a href="#contact" className="text-blue-600 hover:text-yellow-500">
                    Contact Us
                </a>
                <a href="#faq" className="text-blue-600 hover:text-yellow-500">
                    FAQ
                </a>
            </nav>

            {/*  Burger menu */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white focus:outline-none"
                >
                    {/* Icone burger */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/*  Mobile menu */}
            {menuOpen && (
                <nav className="absolute top-20 left-0 w-full bg-slate-400 flex flex-col items-center space-y-4 md:hidden">
                    <a href="#price" className="text-white hover:text-yellow-500">
                        Price
                    </a>
                    <a href="#about" className="text-white hover:text-yellow-500">
                        About
                    </a>
                    <a href="#contact" className="text-white hover:text-yellow-500">
                        Contact Us
                    </a>
                    <a href="#faq" className="text-white hover:text-yellow-500">
                        FAQ
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
