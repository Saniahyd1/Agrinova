// AgriMarketNavbar.jsx
import React from 'react';

const AgriMarketNavbar = () => (
  <nav className="bg-emerald-600 h-[90px] flex items-center px-8 w-full shadow-md justify-between">
    
    <div className="flex items-center w-full">
      
      <span className="text-3xl text-white ml-10 mr-3">🌱</span>
      <span className="font-bold text-2xl text-white tracking-wide mr-10">AgriNova</span>
      
      <ul className="flex gap-7 list-none ml-20">
        <li>
          <a href="#" className="text-white font-medium text-base hover:text-green-100 transition">Home</a>
        </li>
        <li>
          <a href="#" className="text-white font-medium text-base hover:text-green-100 transition">Marketplace</a>
        </li>
        <li>
          <a href="#" className="text-white font-medium text-base hover:text-green-100 transition">Analytics</a>
        </li>
        <li>
          <a href="#" className="text-white font-medium text-base hover:text-green-100 transition">Notifications</a>
        </li>
      </ul>
    </div>
    
    <div className="flex items-center bg-emerald-400 rounded-full min-w-60">
      <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center font-bold text-emerald-600 text-lg shadow mr-3">
        U
      </div>
      <div className="flex flex-col text-white leading-tight">
        <span className="font-semibold text-base mb-1">User</span>
        <span className="text-sm opacity-90">user.123@agrimarket.com</span>
      </div>
    </div>
  </nav>
);

export default AgriMarketNavbar;
