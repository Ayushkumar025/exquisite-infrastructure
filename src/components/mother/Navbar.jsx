import { useState, useEffect } from 'react';
import Logo from '../../assets/Images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const location = useLocation();

  // Update navItems to include paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Ready To Invest', path: '/ready-to-invest' }
  ];

  // Update active link based on current path
  useEffect(() => {
    const currentItem = navItems.find(item => item.path === location.pathname);
    if (currentItem) {
      setActiveLink(currentItem.name);
    }
  }, [location.pathname]);

  return (
    <header className="sticky top-0 w-full z-50 bg-[#111111] py-3 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center group"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-16 sm:h-20 transition-transform duration-300 hover:scale-105 drop-shadow-xl"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`relative text-lg font-bold uppercase tracking-wide transition-all duration-300 group ${
                      activeLink === item.name
                        ? 'text-[#f5d648]'
                        : 'text-[#ff6700] hover:text-[#f5d648]'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#ff6700] to-[#f5d648] transition-all duration-500 ${
                        activeLink === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none z-50 p-2 rounded-full bg-[#ff6700]/10 hover:bg-[#f5d648]/20 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 space-y-1.5">
              <span
                className={`block h-0.5 w-full bg-gradient-to-r from-[#ff6700] to-[#f5d648] transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gradient-to-r from-[#ff6700] to-[#f5d648] transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gradient-to-r from-[#ff6700] to-[#f5d648] transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-3xl font-bold tracking-wide uppercase px-8 py-4 rounded-full transition-all duration-300 ${
                activeLink === item.name
                  ? 'bg-gradient-to-r from-[#ff6700] to-[#f5d648] text-white shadow-xl'
                  : 'text-[#f5d648] hover:text-white hover:bg-[#ff6700]/20'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;