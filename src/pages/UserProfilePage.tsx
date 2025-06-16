import React from 'react';
import Sidebar from '@/components/Sidebar';

const UserProfilePage = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-sky-100 via-white to-sky-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Profile Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-3xl font-bold shadow-inner mb-4">
              AE
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Test User</h2>
            <p className="text-sm text-gray-500 mb-6">noonminutes@gmail.com</p>

            <div className="w-full text-left">
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  value="Test User"
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Email</label>
                <input
                  type="email"
                  value="noonminutes@gmail.com"
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-600 text-sm mb-1">Role</label>
                <input
                  type="text"
                  value="Admin"
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;