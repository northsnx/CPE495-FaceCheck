import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import CourseDetails from './components/CourseDetails';
import AttendanceList from './components/AttendanceList';
import ScanPage from './components/ScanPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
    setCurrentPage('courses');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'login' && (
        <LoginPage onLogin={handleLogin} />
      )}
      
      {currentPage === 'courses' && (
        <CourseDetails onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'attendance' && (
        <AttendanceList onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'scan' && (
        <ScanPage onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;