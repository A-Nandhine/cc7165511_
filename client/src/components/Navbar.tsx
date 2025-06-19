import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, User, LogOut, Plus, List } from 'lucide-react';
import { User as UserType } from '../types';

interface NavbarProps {
  currentUser: UserType | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  if (!currentUser && location.pathname !== '/register') {
    return null;
  }

  return (
    <nav className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/events" className="flex items-center space-x-2 text-white hover:text-orange-100 transition-colors">
            <Calendar className="h-8 w-8" />
            <span className="text-xl font-bold">EventFlow</span>
          </Link>

          {/* Navigation Links */}
          {currentUser && (
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/events"
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/events')
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <List className="h-4 w-4" />
                <span>Events</span>
              </Link>
              
              <Link
                to="/add"
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/add')
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Plus className="h-4 w-4" />
                <span>Add Event</span>
              </Link>
            </div>
          )}

          {/* User Menu */}
          {currentUser && (
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <User className="h-5 w-5" />
                <span className="hidden sm:block">{currentUser.name}</span>
              </Link>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:block">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {currentUser && (
        <div className="md:hidden px-4 pb-3">
          <div className="flex space-x-1">
            <Link
              to="/events"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/events')
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <List className="h-4 w-4" />
              <span>Events</span>
            </Link>
            
            <Link
              to="/add"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/add')
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;