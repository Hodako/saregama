import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and main navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <BookOpen className={`h-8 w-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`ml-2 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                BanguJournal
              </span>
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-6 w-6 text-yellow-400" />
              ) : (
                <Moon className="h-6 w-6 text-gray-600" />
              )}
            </button>
            
            {user ? (
              <UserDropdown user={user} logout={logout} />
            ) : (
              <Link
                to="/auth/login"
                className={`px-4 py-2 rounded-lg ${isDark ? 'bg-blue-600' : 'bg-blue-600'} text-white`}
              >
                Join
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
