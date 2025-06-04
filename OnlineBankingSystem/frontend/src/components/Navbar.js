import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="text-blue-600 hover:underline">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="text-blue-600 hover:underline">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="text-blue-600 hover:underline">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
