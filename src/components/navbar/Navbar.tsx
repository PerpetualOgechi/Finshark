import React from 'react'
import logo from "./logo.png"
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout} = useAuth()
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center space-x-6 lg:space-x-20">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className=" font-bold">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
            {/* <Link to="/search" className="text-black hover:text-darkBlue">
              Dashboard
            </Link> */}
          </div>
        </div>

        { isLoggedIn() ? (
          <div className="flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue" >Welcome {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              LogOut
            </a>
          </div>
        ) : (
          <div className="flex items-center space-x-6 text-back">
            <Link className="hover:text-darkBlue" to={'/login'}>Login</Link>
            <Link
              to={"/register"}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar