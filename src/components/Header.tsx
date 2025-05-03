import React, { useState, useEffect } from "react";
import { TowerControl as GameController, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <GameController className="h-6 w-6 text-blue-500" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            SGCS Release 게임
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="홈" />
          <NavLink to="/games" label="게임" />
          <NavLink to="/about" label="소개" />
          <NavLink to="/submit" label="제출" /> {/* ★ 추가 */}
          <a
            href="https://github.com/SGCS-Release-Git-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="메뉴 열기/닫기"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" label="홈" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/games" label="게임" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/about" label="소개" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/submit" label="제출" onClick={() => setMobileMenuOpen(false)} /> {/* ★ 추가 */}
            <a
              href="https://github.com/SGCS-Release-Git-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}
const NavLink: React.FC<NavLinkProps> = ({ to, label }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white transition-colors relative group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}
const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClick }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Header;
