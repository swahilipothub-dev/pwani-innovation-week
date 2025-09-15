import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="shadow-md bg-white tracking-wide relative z-50">
      <section className="relative flex items-center justify-center gap-4 py-2.5 sm:px-10 px-4 border-gray-200 border-b min-h-[70px]">
        <Link to="/" className="block">
          <img src="/piw_logo.png" alt="logo" className="w-36 max-sm:w-9 mx-auto" />
        </Link>
        <div className="hidden lg:flex items-center space-x-4 absolute right-10">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M23 4.8c-.8.4-1.6.6-2.5.8.9-.5 1.5-1.3 1.8-2.3-.8.5-1.8.9-2.8 1.1C18.8 3.5 17.6 3 16.3 3c-2.5 0-4.5 2.2-4 4.7-3.7-.2-7-2-9.2-4.7-1 1.8-.5 4.1 1.2 5.3-.7 0-1.3-.2-1.9-.5-.1 2 1.4 3.9 3.5 4.3-.6.2-1.3.2-1.9.1.5 1.7 2.1 2.9 3.9 3-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.1-.1C2.4 19 4.7 20 7.2 20c8.7 0 13.6-7.4 13.3-14 .9-.6 1.6-1.3 2.2-2.2z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10.8 1.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05c.53-1 1.84-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16V23h-4v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.77 1.86-2.77 3.78V23H8V8z"/></svg>
          </a>
        </div>
      </section>

      <div className="flex flex-wrap justify-center sm:px-10 px-4 py-3 relative">
        <div
          id="collapseMenu"
          className={(menuOpen ? 'block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50' : 'max-lg:hidden lg:!block') + ' ' + 'max-lg:before:content-[\'\'] max-lg:before:block'}
        >
          {menuOpen && (
            <button
              id="toggleClose"
              onClick={closeMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </button>
          )}

          <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[280px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:pb-4 px-3 lg:hidden">
              <Link to="/"><img src="/piw_logo.png" alt="logo" className="w-36" /></Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:px-3 max-lg:py-3"><Link to='/' onClick={closeMenu} className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]">Home</Link></li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:px-3 max-lg:py-3"><Link to='/about' onClick={closeMenu} className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">About</Link></li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:px-3 max-lg:py-3"><Link to='/speakers' onClick={closeMenu} className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">Speakers</Link></li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:px-3 max-lg:py-3"><Link to='/tickets' onClick={closeMenu} className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">Tickets</Link></li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:px-3 max-lg:py-3"><Link to='/engage' onClick={closeMenu} className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">Engage</Link></li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:px-3 max-lg:py-3"><Link to='/experiences' onClick={closeMenu} className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">Experiences</Link></li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:px-3 max-lg:py-3"><Link to='/past-events' onClick={closeMenu} className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block">Past Events</Link></li>
          </ul>
        </div>

        <div id="toggleOpen" className="flex ml-auto lg:hidden">
          <button className="cursor-pointer" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
