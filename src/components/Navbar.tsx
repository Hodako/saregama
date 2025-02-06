import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Moon, Sun, Search, Bell, Upload } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} sticky top-0 z-40 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <BookOpen className={`h-8 w-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`ml-2 text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Rational Discourse
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-white" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600" />
            )}
          </button>
          <Bell className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
          <Link
            to="/upload"
            className={`${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} text-white px-3 py-2 rounded-lg flex items-center`}
          >
            <Upload className="h-4 w-4" />
            <span className="ml-2">Upload</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
