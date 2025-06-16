import React, { useState } from 'react';
import {
  User,
  Bell,
  ChevronRight,
  LogOut,
  ShoppingCart,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  onLogout?: () => void;
}

const Sidebar = ({ onLogout }: SidebarProps) => {
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showOrdersDropdown, setShowOrdersDropdown] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  const isAnyDropdownOpen = showNotificationDropdown || showOrdersDropdown;

  const handleLogout = () => {
    if (onLogout) onLogout();
  };

  const previousOrders = [
    {
      id: 'PREV001',
      name: 'Ahmed Al Saeed',
      phone: '+966 55 123 4567',
      location: 'Riyadh, Saudi Arabia',
      clientOrderId: 'CL-7890',
      paymentMethod: 'Cash',
      orderValue: 'SAR 120.00',
    },
    {
      id: 'PREV002',
      name: 'Fatimah Al Zahrani',
      phone: '+966 55 987 6543',
      location: 'Jeddah, Saudi Arabia',
      clientOrderId: 'CL-3456',
      paymentMethod: 'Card',
      orderValue: 'SAR 85.00',
    },
    {
      id: 'PREV003',
      name: 'Mohammed Al Harbi',
      phone: '+966 55 444 5555',
      location: 'Dammam, Saudi Arabia',
      clientOrderId: 'CL-1122',
      paymentMethod: 'Cash',
      orderValue: 'SAR 99.00',
    },
    {
      id: 'PREV004',
      name: 'Salma Al Qahtani',
      phone: '+966 55 333 2222',
      location: 'Mecca, Saudi Arabia',
      clientOrderId: 'CL-2233',
      paymentMethod: 'Card',
      orderValue: 'SAR 150.00',
    },
    {
      id: 'PREV005',
      name: 'Yousef Al Amri',
      phone: '+966 55 111 9999',
      location: 'Tabuk, Saudi Arabia',
      clientOrderId: 'CL-3344',
      paymentMethod: 'Cash',
      orderValue: 'SAR 75.00',
    },
    {
      id: 'PREV006',
      name: 'Reem Al Mutairi',
      phone: '+966 55 888 7777',
      location: 'Abha, Saudi Arabia',
      clientOrderId: 'CL-5566',
      paymentMethod: 'Card',
      orderValue: 'SAR 132.00',
    },
    {
      id: 'PREV007',
      name: 'Noura Al Dossary',
      phone: '+966 55 222 1111',
      location: 'Najran, Saudi Arabia',
      clientOrderId: 'CL-7788',
      paymentMethod: 'Cash',
      orderValue: 'SAR 65.00',
    },
    {
      id: 'PREV008',
      name: 'Khaled Al Anazi',
      phone: '+966 55 999 0000',
      location: 'Al Khobar, Saudi Arabia',
      clientOrderId: 'CL-8899',
      paymentMethod: 'Card',
      orderValue: 'SAR 105.00',
    },
  ];

  return (
    <>
      {isAnyDropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => {
            setShowNotificationDropdown(false);
            setShowOrdersDropdown(false);
          }}
        />
      )}

      <div className={`w-16 bg-gradient-to-b from-red-600 to-blue-800 rounded-lg m-2 flex flex-col items-center py-6 relative z-50 text-${fontSize}`}>
        <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center mb-6">
          <span className="text-white font-bold text-sm">AE</span>
        </div>

        <div className="mb-6">
          <button
            className="w-10 h-10 flex items-center justify-center transition-colors hover:scale-110 relative"
            onClick={() => {
              setShowNotificationDropdown(!showNotificationDropdown);
              setShowOrdersDropdown(false);
              setShowUserProfile(false);
              setShowSettingsModal(false);
            }}
          >
            <Bell className="w-5 h-5 text-gray-300" />
            <ChevronRight className="w-3 h-3 text-gray-300 absolute right-0" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </div>

        <div className="mb-6">
          <button
            className="w-10 h-10 flex items-center justify-center transition-colors hover:scale-110 relative"
            onClick={() => {
              setShowOrdersDropdown(!showOrdersDropdown);
              setShowNotificationDropdown(false);
              setShowUserProfile(false);
              setShowSettingsModal(false);
            }}
          >
            <ShoppingCart className="w-5 h-5 text-gray-300" />
            <ChevronRight className="w-3 h-3 text-gray-300 absolute right-0" />
          </button>
        </div>

        <div className="flex-1" />

        <div className="mb-4">
          <button
            className="w-10 h-10 flex items-center justify-center transition-colors hover:scale-110 relative"
            onClick={() => {
              setShowSettingsModal(true);
              setShowNotificationDropdown(false);
              setShowOrdersDropdown(false);
              setShowUserProfile(false);
            }}
            title="Settings"
          >
            <Settings className="w-5 h-5 text-gray-300" />
            <ChevronRight className="w-3 h-3 text-gray-300 absolute right-0" />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <button
            className="w-10 h-10 flex items-center justify-center transition-colors hover:scale-110 relative"
            onClick={() => {
              setShowUserProfile(true);
              setShowNotificationDropdown(false);
              setShowOrdersDropdown(false);
              setShowSettingsModal(false);
            }}
          >
            <User className="w-5 h-5 text-gray-300" />
            <ChevronRight className="w-3 h-3 text-gray-300 absolute right-0" />
          </button>

          <button
            className="w-10 h-10 flex items-center justify-center transition-colors hover:scale-110 hover:bg-red-700/20 rounded-lg"
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {showNotificationDropdown && (
          <div className="absolute top-20 left-16 ml-2 w-64 bg-white rounded-lg shadow-lg border z-50">
            <div className="py-2">
              <div className="px-4 py-2 border-b">
                <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-gray-50 border-b">
                  <p className="text-sm text-gray-900">New order received</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 border-b">
                  <p className="text-sm text-gray-900">Driver arrived at pickup</p>
                  <p className="text-xs text-gray-500">5 minutes ago</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50">
                  <p className="text-sm text-gray-900">Order completed</p>
                  <p className="text-xs text-gray-500">10 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showOrdersDropdown && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setShowOrdersDropdown(false)}
          >
            <div
              className="w-[90%] max-w-[1000px] bg-white rounded-xl shadow-2xl border p-6 overflow-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Previous Orders
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b text-gray-700 bg-gray-100">
                      <th className="px-4 py-3">Order ID</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Phone</th>
                      <th className="px-4 py-3">Location</th>
                      <th className="px-4 py-3">Client ID</th>
                      <th className="px-4 py-3">Payment</th>
                      <th className="px-4 py-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previousOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 border-b">
                        <td className="px-4 py-2">{order.id}</td>
                        <td className="px-4 py-2">{order.name}</td>
                        <td className="px-4 py-2">{order.phone}</td>
                        <td className="px-4 py-2">{order.location}</td>
                        <td className="px-4 py-2">{order.clientOrderId}</td>
                        <td className="px-4 py-2">{order.paymentMethod}</td>
                        <td className="px-4 py-2">{order.orderValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {showUserProfile && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
            onClick={() => setShowUserProfile(false)}
          >
            <div
              className="bg-white rounded-xl shadow-xl border p-6 w-[90%] max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                User Profile
              </h3>
              <div className="space-y-2 text-sm text-gray-700 text-center">
                <p><strong>Name:</strong> Demo User</p>
                <p><strong>ID:</strong> #USR001</p>
              </div>
              <div className="mt-6 text-right">
                <button
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => setShowUserProfile(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {showSettingsModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
            onClick={() => setShowSettingsModal(false)}
          >
            <div
              className="bg-white rounded-xl shadow-xl border p-6 w-[90%] max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Settings
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Font Size</span>
                  <select
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value as 'sm' | 'base' | 'lg')}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="sm">Small</option>
                    <option value="base">Medium</option>
                    <option value="lg">Large</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 text-right">
                <button
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => setShowSettingsModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;