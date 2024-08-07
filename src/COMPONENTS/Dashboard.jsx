import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Admin Dashboard</h1>
      <div className='dashboard-nav'>
        <Link to='/Usermanagement' className='dashboard-link'>Admin</Link>
        <Link to='/Orders' className='dashboard-link'>Order</Link>
        <Link to='/Inventory' className='dashboard-link'>InventoryDetails</Link>
      </div>
    </div>
  );
};

export default Dashboard;
