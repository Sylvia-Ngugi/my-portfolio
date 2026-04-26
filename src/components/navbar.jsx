import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Silvia Ngugi</h1>
        <div className="space-x-6">
          {['home', 'about', 'education', 'experience', 'services', 'projects', 'skills', 'resume', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={600}
              offset={-70}
              className="text-gray-700 hover:text-blue-600 cursor-pointer capitalize"
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
