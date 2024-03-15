import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router';



function App() {
 
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
