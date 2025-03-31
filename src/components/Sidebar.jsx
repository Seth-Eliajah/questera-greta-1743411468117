import { NavLink } from 'react-router-dom';
import { FaHome, FaCar, FaStore, FaBlog, FaPlus } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="bg-primary-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">FleetMaster</span>
      </div>
      
      <nav className="space-y-2">
        <NavLink to="/" className={({ isActive }) => 
          `flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
            isActive ? 'bg-primary-700' : 'hover:bg-primary-700'
          }`}>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/marketplace" className={({ isActive }) => 
          `flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
            isActive ? 'bg-primary-700' : 'hover:bg-primary-700'
          }`}>
          <FaStore />
          <span>Marketplace</span>
        </NavLink>

        <NavLink to="/blog" className={({ isActive }) => 
          `flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
            isActive ? 'bg-primary-700' : 'hover:bg-primary-700'
          }`}>
          <FaBlog />
          <span>Blog</span>
        </NavLink>

        <NavLink to="/add-asset" className={({ isActive }) => 
          `flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
            isActive ? 'bg-primary-700' : 'hover:bg-primary-700'
          }`}>
          <FaPlus />
          <span>Add Asset</span>
        </NavLink>
      </nav>
    </div>
  );
}