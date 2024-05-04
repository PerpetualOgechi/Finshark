import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { UserProvider } from './context/useAuth';



function App() {
 
  return (
    <div>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </div>
  );
}

export default App;
