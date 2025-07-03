import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] text-white p-6 font-sans">
      <Header changeUser={props.changeUser} />
      <div className="mt-6 space-y-6">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
