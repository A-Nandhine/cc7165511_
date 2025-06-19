import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { Event, User } from './types';

const AppContent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const navigate = useNavigate();

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('eventflow_events');
    const savedUsers = localStorage.getItem('eventflow_users');
    const savedCurrentUser = localStorage.getItem('eventflow_current_user');

    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
    if (savedCurrentUser) {
      setCurrentUser(JSON.parse(savedCurrentUser));
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('eventflow_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('eventflow_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('eventflow_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('eventflow_current_user');
    }
  }, [currentUser]);

  const handleAddOrUpdateEvent = (event: Event) => {
    if (editingEvent) {
      setEvents(prevEvents => 
        prevEvents.map(e => e.id === event.id ? event : e)
      );
      setEditingEvent(null);
    } else {
      setEvents(prevEvents => [...prevEvents, event]);
    }
    navigate('/events');
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(prevEvents => prevEvents.filter(e => e.id !== id));
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    navigate('/add');
  };

  const handleRegister = (newUser: User) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    setCurrentUser(newUser);
  };

  const handleLogin = (loginData: { email: string; password: string }) => {
    const foundUser = users.find(
      u => u.email === loginData.email && u.password === loginData.password
    );
    
    if (foundUser) {
      setCurrentUser(foundUser);
      return true;
    }
    
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setEditingEvent(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      
      <Routes>
        <Route 
          path="/" 
          element={<Login onLogin={handleLogin} />} 
        />
        
        <Route 
          path="/register" 
          element={<Register onRegister={handleRegister} />} 
        />
        
        <Route 
          path="/events" 
          element={
            <ProtectedRoute user={currentUser}>
              <EventList 
                events={events.filter(e => e.createdBy === currentUser!.name)} 
                onEdit={handleEditEvent} 
                onDelete={handleDeleteEvent}
              />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/add" 
          element={
            <ProtectedRoute user={currentUser}>
              <EventForm 
                onAdd={handleAddOrUpdateEvent} 
                editingEvent={editingEvent}
                currentUser={currentUser!}
              />
            </ProtectedRoute>
          } 
        />
          <Route
          path="/edit/:id"
          element={
            <ProtectedRoute user={currentUser}>
              <EventForm currentUser={currentUser!} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/profile" 
          element={
            <ProtectedRoute user={currentUser}>
              <Profile 
                user={currentUser!} 
                events={events.filter(e => e.createdBy === currentUser!.name)}
              />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;