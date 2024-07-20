import React from 'react';

const MetricCard = ({ title, value, change, icon: Icon, impact }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <Icon className="text-blue-500" size={24} />
    </div>
    <p className="text-2xl font-bold">{value}</p>
    <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% vs last month
    </p>
    <p className="text-xs mt-2">Financial Impact: {impact}</p>
  </div>
);

export default MetricCard;
