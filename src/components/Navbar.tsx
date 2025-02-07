import { Link } from 'react-router-dom';
import { Moon, Sun, Bell, Upload, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className={`h-8 w-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              BanguJournal
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/upload" className="flex items-center space-x-1">
                  <Upload className="h-5 w-5" />
                  <span>Upload</span>
                </Link>
                <button className="relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                    3
                  </span>
                </button>
                {/* User dropdown */}
              </div>
            ) : (
              <Link 
                to="/auth/login" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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

export default Navbar;
