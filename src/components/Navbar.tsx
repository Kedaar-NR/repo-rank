
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">RR</span>
          </div>
          <span className="text-xl font-bold text-brand-900">RepoRank</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <Link 
            to="/" 
            className={cn(
              "nav-link",
              isActive("/") && "bg-gray-100 text-brand-900"
            )}
          >
            Home
          </Link>
          <Link 
            to="/trends" 
            className={cn(
              "nav-link",
              isActive("/trends") && "bg-gray-100 text-brand-900"
            )}
          >
            Trends
          </Link>
          <Link 
            to="/search" 
            className={cn(
              "nav-link",
              isActive("/search") && "bg-gray-100 text-brand-900"
            )}
          >
            Search
          </Link>
          <Link 
            to="/mvp-helper" 
            className={cn(
              "nav-link",
              isActive("/mvp-helper") && "bg-gray-100 text-brand-900"
            )}
          >
            MVP Helper
          </Link>
          <Link 
            to="/api" 
            className={cn(
              "nav-link",
              isActive("/api") && "bg-gray-100 text-brand-900"
            )}
          >
            API
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-brand-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4 items-center mt-8">
          <Link 
            to="/" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/trends" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={closeMenu}
          >
            Trends
          </Link>
          <Link 
            to="/search" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={closeMenu}
          >
            Search
          </Link>
          <Link 
            to="/mvp-helper" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={closeMenu}
          >
            MVP Helper
          </Link>
          <Link 
            to="/api" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={closeMenu}
          >
            API
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
