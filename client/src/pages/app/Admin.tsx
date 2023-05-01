import { FaCog, FaUsers, FaChartLine } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-400 hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 hover:no-underline"
  >
    <span className="mr-3 text-lg">{icon}</span>
    {children}
  </NavLink>
);

const AdminDashboard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <NavLink
          to="/admin/users"
          className="bg-white rounded-lg shadow-md hover:bg-gray-50 px-6 py-8"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Users</h2>
          <p className="text-gray-600">
            View and manage user accounts and permissions.
          </p>
        </NavLink>
        <NavLink
          to="/admin/products"
          className="bg-white rounded-lg shadow-md hover:bg-gray-50 px-6 py-8"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Products</h2>
          <p className="text-gray-600">View and manage the product catalog.</p>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className="bg-white rounded-lg shadow-md hover:bg-gray-50 px-6 py-8"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Orders</h2>
          <p className="text-gray-600">
            View and manage customer orders and order history.
          </p>
        </NavLink>
        <NavLink
          to="/admin/settings"
          className="bg-white rounded-lg shadow-md hover:bg-gray-50 px-6 py-8"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Settings</h2>
          <p className="text-gray-600">
            Manage website settings and configurations.
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminDashboard;
