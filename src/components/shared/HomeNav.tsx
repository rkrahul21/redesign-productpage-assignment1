import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HomeNavProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HomeNav: React.FC<HomeNavProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavItemClick = (ref: React.RefObject<HTMLElement>) => {
        scrollToSection(ref);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md py-4 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold font-serif">
                    gogetwell.ai
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                    <button
                        onClick={() => scrollToSection(aboutRef)}
                        className="text-white hover:text-primary transition-colors font-medium"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection(featuresRef)}
                        className="text-white hover:text-primary transition-colors font-medium"
                    >
                        Features
                    </button>
                    <button
                        onClick={() => scrollToSection(contactRef)}
                        className="text-white hover:text-primary transition-colors font-medium"
                    >
                        Contact
                    </button>
                    <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium">
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-56 bg-gradient-to-b from-blue-600 to-purple-600 transform transition-transform duration-300 ease-in-out z-50 ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col p-4">
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/" className="text-white text-xl font-bold font-serif">
                            gogetwell.ai
                        </Link>
                        <button
                            className="text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button
                            className="text-white hover:text-primary transition-colors font-medium text-left"
                            onClick={() => handleNavItemClick(aboutRef)}
                        >
                            About
                        </button>
                        <button
                            className="text-white hover:text-primary transition-colors font-medium text-left"
                            onClick={() => handleNavItemClick(featuresRef)}
                        >
                            Features
                        </button>
                        <button
                            className="text-white hover:text-primary transition-colors font-medium text-left"
                            onClick={() => handleNavItemClick(contactRef)}
                        >
                            Contact
                        </button>
                        <Link
                            to="/login"
                            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium text-center mt-4"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </nav>
    );
};

export default HomeNav; 