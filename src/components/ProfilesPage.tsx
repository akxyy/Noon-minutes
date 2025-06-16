import React from 'react';
import Sidebar from './Sidebar';

const ProfilesPage = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-sky-100 via-white to-sky-200">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Profile section */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center border max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">User Profile</h2>
          <div className="text-gray-600 space-y-2">
            <p><span className="font-semibold">Name:</span> Test User</p>
            <p><span className="font-semibold">Email:</span> noonminutes@gmail.com</p>
            <p><span className="font-semibold">ID:</span> 123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;