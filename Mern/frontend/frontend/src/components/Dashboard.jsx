import React, { useState } from 'react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 ease-in-out flex-shrink-0`}>
        <div className="h-16 flex items-center justify-center border-b border-slate-800">
          <h1 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>AdminPanel</h1>
          <span className={`${isSidebarOpen && 'hidden'} font-bold text-xl`}>AP</span>
        </div>
        
        <nav className="mt-6 px-4 space-y-2">
          <SidebarLink icon={<HomeIcon />} text="Dashboard" isOpen={isSidebarOpen} active />
          <SidebarLink icon={<UsersIcon />} text="Users" isOpen={isSidebarOpen} />
          <SidebarLink icon={<ChartIcon />} text="Analytics" isOpen={isSidebarOpen} />
          <SidebarLink icon={<SettingsIcon />} text="Settings" isOpen={isSidebarOpen} />
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <MenuIcon />
          </button>
          
          <div className="text-xl font-semibold text-gray-800">Overview</div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
              <BellIcon />
            </div>
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              GC
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard title="Total Users" value="1,245" color="bg-blue-500" icon={<UsersIcon />} />
            <StatCard title="Revenue" value="$34,000" color="bg-green-500" icon={<DollarIcon />} />
            <StatCard title="New Signups" value="+45" color="bg-purple-500" icon={<TrendIcon />} />
            <StatCard title="Active Sessions" value="132" color="bg-orange-500" icon={<ActivityIcon />} />
          </div>

          {/* Recent Activity Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Recent Users</h2>
            </div>
            <div className="overflow-x-auto p-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-sm font-semibold text-gray-600 bg-gray-50">Name</th>
                    <th className="p-3 text-sm font-semibold text-gray-600 bg-gray-50">Role</th>
                    <th className="p-3 text-sm font-semibold text-gray-600 bg-gray-50">Status</th>
                    <th className="p-3 text-sm font-semibold text-gray-600 bg-gray-50">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <TableRow name="Prem" role="Admin" status="Active" date="2023-10-01" />
                  <TableRow name="Roshini" role="Editor" status="Pending" date="2023-10-02" />
                  <TableRow name="Kattai" role="User" status="Active" date="2023-10-03" />
                  <TableRow name="Santhosh" role="Manager" status="Active" date="2023-10-04" />
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// --- Helper Components for Clean Code ---

const SidebarLink = ({ icon, text, isOpen, active }) => (
  <a href="#" className={`flex items-center p-3 rounded-lg transition-colors ${active ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-slate-800 hover:text-white'}`}>
    <span className="w-6 h-6">{icon}</span>
    <span className={`ml-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>{text}</span>
  </a>
);

const StatCard = ({ title, value, color, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-center">
    <div className={`p-4 rounded-full text-white mr-4 ${color}`}>
      <div className="w-6 h-6">{icon}</div>
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const TableRow = ({ name, role, status, date }) => (
  <tr className="hover:bg-gray-50">
    <td className="p-3 text-sm text-gray-700">{name}</td>
    <td className="p-3 text-sm text-gray-700">{role}</td>
    <td className="p-3 text-sm">
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
        {status}
      </span>
    </td>
    <td className="p-3 text-sm text-gray-500">{date}</td>
  </tr>
);

// --- Icons (Standard SVGs) ---
const HomeIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const UsersIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const ChartIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>;
const SettingsIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const BellIcon = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
const MenuIcon = () => <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>;
const DollarIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const TrendIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const ActivityIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default Dashboard;