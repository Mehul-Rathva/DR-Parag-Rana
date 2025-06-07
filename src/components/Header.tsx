import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Lectures", href: "#lectures" },
    { name: "Hospital", href: "#hospital" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <a 
            href="#" 
            className="text-2xl font-bold bg-gradient-to-r from-medical-bright-blue to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Dr. Parag Rana
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === link.href.substring(1)
                    ? "text-medical-bright-blue"
                    : "text-gray-600 hover:text-medical-bright-blue"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-medical-bright-blue transform origin-left transition-transform duration-300 ${
                    activeSection === link.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="ml-4 bg-gradient-to-r from-medical-bright-blue to-primary text-white hover:opacity-90 transition-opacity"
            >
              <Stethoscope className="w-4 h-4 mr-2" />
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[400px] opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-2 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/30">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "bg-medical-bright-blue/10 text-medical-bright-blue"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-gradient-to-r from-medical-bright-blue to-primary text-white hover:opacity-90 transition-opacity mt-2"
            >
              <Stethoscope className="w-4 h-4 mr-2" />
              Get Consultation
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
