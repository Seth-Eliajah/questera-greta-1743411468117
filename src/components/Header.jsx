import { FaBell, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">Fleet Management</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FaBell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <FaUser className="w-4 h-4 text-gray-600" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}